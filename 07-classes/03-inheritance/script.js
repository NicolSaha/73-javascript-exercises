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
      this.greeting = "Hi";
    }
  }

  const dogOne = new Dog();
  dogOne.name = "DogName";
  console.log(`${dogOne.name} ${dogOne.greeting}`);

  /** class Cat extends Animal {
    constructor(name, greeting) {
      super(name, greeting);
    }
  }

  const catOne = new Cat();
  catOne.name = "CatName";
  catOne.greeting = "Hi";
  console.log(`${catOne.name} ${catOne.greeting}`);

   **/
})();
