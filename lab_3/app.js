const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

let todos = []; // In-memory array to store todo items
let nextId = 1; // Simple ID generator

// GET: Retrieve all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST: Add a new todo
app.post('/todos', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    const todo = { id: nextId++, title };
    todos.push(todo);
    res.status(201).json(todo);
});

// PUT: Update a todo by ID
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todo.title = title || todo.title;
    res.json(todo);
});

// DELETE: Remove a todo by ID
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.status(204).send();
});

// Start the Express server
app.listen(3000, () => {
    console.log('Todo API server running on port 3000');
});
