/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  const text = document.getElementById("target").innerHTML;
  console.log(text);

  for (i = 0; i < text.length; i++) {
   let result = text.charAt(i).fontsize(Math.round(5 + 15 * (i / 10 - Math.floor(i / 10))));
  }

  console.log(result);

  document.getElementById("target").innerHTML = `${result}`;
})();
