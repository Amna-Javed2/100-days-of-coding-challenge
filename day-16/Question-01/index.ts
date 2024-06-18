// // Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make,
// //  model, year, and a method describe() that logs a sentence about the laptop.



let laptop = {
    make: "Dell",
    model: "New Elite Series",
    year: 2024,
    describe: function abc (){
      console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    },
  };
  laptop.describe();


// more this keyword examples
  const obj = {
  f_name: "Amna",
  l_name: "Javed",
  full_name: function(){
    console.log(`My full name is ${this.f_name} ${this.l_name}.`);
    return this.f_name + " " + obj.l_name;
  }
}
console.log(obj.full_name());



