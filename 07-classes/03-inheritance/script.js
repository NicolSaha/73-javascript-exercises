/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Animal {
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }
  // your code here

  class Dog extends Animal {
    constructor(name) {
      super(Animal);
      this.name = name;
    }
    static greeting = "Hello";
  }

  const dogOne = new Dog();
  dogOne.name = "DogName";
  console.log(`${dogOne.sayHello()}`);
  // console.log(Dog.sayHello());

  class Cat extends Animal {
    constructor(name) {
      super(Animal);
      this.name = name;
    }
    static greeting = "Hello";
  }

  const catOne = new Cat();
  catOne.name = "CatName";
  console.log(`${catOne.sayHello()}`);
})();
