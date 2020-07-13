/* becode/javascript
 *
 * /02-maths/01-resultulator-one/script.js - 2.1: resultulatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value
  let output = document.getElementById("output");
  let opOne;
  let opTwo;

  // AddEventListener
  document.getElementById("addition").addEventListener("click", function () {
    // perform an addition
    opOne = Number(document.getElementById("op-one").value);
    opTwo = Number(document.getElementById("op-two").value);
    let result = opOne + opTwo;
    output.value = result;
  });

  document
    .getElementById("substraction")
    .addEventListener("click", function () {
      // perform an substraction
      opOne = Number(document.getElementById("op-one").value);
      opTwo = Number(document.getElementById("op-two").value);
      let result = opOne - opTwo;
      output.value = result;
    });

  document
    .getElementById("multiplication")
    .addEventListener("click", function () {
      // perform an multiplication
      opOne = Number(document.getElementById("op-one").value);
      opTwo = Number(document.getElementById("op-two").value);
      let result = opOne * opTwo;
      output.value = result;
    });

  document.getElementById("division").addEventListener("click", function () {
    // perform an division
    opOne = Number(document.getElementById("op-one").value);
    opTwo = Number(document.getElementById("op-two").value);
    let result = (opOne / opTwo).toFixed(1);
    output.value = result;
  });
})();
