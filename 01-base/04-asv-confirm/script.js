/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let q1 = prompt("What is your age?");
  let q2 = prompt("What is your gender?");
  let q3 = prompt("What is the name of the town you live in?");

  let question = confirm(`So you are ${q1}, ${q2}, and you live in ${q3}`);

  if (question === true) {
    alert("Great!");
  } else {
    window.location.reload();
  }
})();
