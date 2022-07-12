// Object.create() method
const coder = {
  greet: function () {
    console.log(`Hello, I'm ${this.name}, I'm ${this.age} years old.`);
  },
};
const personC = Object.create(coder);
personC.age = 23;
personC.name = "C-Sam";
console.log(personC.greet());
