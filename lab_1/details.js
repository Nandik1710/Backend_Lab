const person = {
  profile: {
    name: 'Nandik',
    age: 20,
  },
  greet: function() {
    return `Hello, my name is ${this.profile.name} and I am ${this.profile.age} years old.`;
  }
};
module.exports = person;