/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  var isColored = false;

  var buttonRed = document.getElementById("red");
  buttonRed.addEventListener("click", function () {
    if (isColored) {
      document.body.style.background = "#16232E";
      isColored = false;
    } else {
      document.body.style.background = "red";
      isColored = true;
    }
  });

  var buttonGreen = document.getElementById("green");
  buttonGreen.addEventListener("click", function () {
    if (isColored) {
      document.body.style.background = "#16232E";
      isColored = false;
    } else {
      document.body.style.background = "green";
      isColored = true;
    }
  });

  var buttonYellow = document.getElementById("yellow");
  buttonYellow.addEventListener("click", function () {
    if (isColored) {
      document.body.style.background = "#16232E";
      isColored = false;
    } else {
      document.body.style.background = "yellow";
      isColored = true;
    }
  });

  var buttonBlue = document.getElementById("blue");
  buttonBlue.addEventListener("click", function () {
    if (isColored) {
      document.body.style.background = "#16232E";
      isColored = false;
    } else {
      document.body.style.background = "blue";
      isColored = true;
    }
  });
})();
