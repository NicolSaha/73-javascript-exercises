/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  document.getElementById("run").addEventListener("click", function () {
    class Person {
      constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
      }

      get fullName() {
        return `${this.firstname} ${this.lastname}`;
      }

      set fullName(x) {
        let split = x.split(" ");
        this.firstname = split[0];
        this.lastname = split[1];
      }
    }

    let newPerson = new Person("Nicole", "Saha");
    console.log(newPerson.fullName);
    newPerson.x = "Nicole Saha";
    console.log(newPerson.firstname);
    console.log(newPerson.lastname);
    newPerson = new Person("Someone", "Else");
    console.log(newPerson.fullName);
  });
})();
