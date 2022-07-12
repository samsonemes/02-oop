// Encapsulation
class person {
  // properties & functions within a single unit
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_Address(add) {
    this.add = add;
  }
  getDetails() {
    console.log(`Name is ${this.name}, Address is: ${this.add}`);
  }
}

let person1 = new person("Ann", 21);
person1.add_Address("Nairobi");
person1.getDetails();
