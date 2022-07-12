// using a constructor
function personB(name, age) {
  this.name = name;
  this.age = age;
}
const personB1 = new personB("B-John", 30);
console.log(`${personB1.name}`, `${personB1.age}`);
