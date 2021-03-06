/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  // Get Elements
  const target = document.querySelector("#target");
  const increment = document.querySelector("#increment");

  // Numbers
  let savedNumber = localStorage.getItem("number");
  let number = target.textContent;

  // Get Number
  if (savedNumber !== null) {
    number = savedNumber;
  }
  target.textContent = number;

  // Click
  increment.onclick = () => {
    number++;
    target.textContent = number;
    localStorage.setItem("number", number);
  };
})();
