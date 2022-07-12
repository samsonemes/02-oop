// Object literal
const personA = {
  name: "A-John",
  age: 30,

  // method
  greet: function () {
    return `Hello, I'm ${this.name}, I'm ${this.age} years old and I know ${this.skills.programming}.`;
  },

  // object within object
  skills: {
    programming: "JavaScript",
  },
};
console.log(personA.greet());
