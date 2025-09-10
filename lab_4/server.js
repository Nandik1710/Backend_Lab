const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// ------------------ MongoDB Setup ------------------
mongoose.connect('mongodb://localhost:27017/todolist')
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error(err));

// Schema & Model
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, default: 'pending' }
});
const Task = mongoose.model('Task', TaskSchema);

// ------------------ CRUD API ------------------

// CREATE Task
app.post('/tasks', async (req, res) => {
  try {
    const task = new Task({ title: req.body.title });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ All Tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE Task
app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE Task
app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------ Start Server ------------------
app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
