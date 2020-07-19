/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const me = {
    lastname: "Saha",
    firstname: "Nicole",
    age: 26,
    city: "Blankenberge",
    country: "Belgium",
  };

  let output = `${me.lastname} ${me.firstname} ${me.age} ${me.city} ${me.country}`;

  console.log(output);
})();
