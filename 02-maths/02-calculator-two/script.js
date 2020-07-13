/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  const performOperation = (operation) => {
    // perform the operation
    let firstValue = document.getElementById("op-one");
    let secondValue = document.getElementById("op-two");
    let total = 0;

    // Calculate
    switch (operation) {
      case "addition":
        total = parseInt(firstValue.value) + parseInt(secondValue.value);
        break;

      case "substraction":
        total = parseInt(firstValue.value) - parseInt(secondValue.value);
        break;

      case "muktiplication":
        total = parseInt(firstValue.value) * parseInt(secondValue.value);
        break;

      case "division":
        total = (
          parseInt(firstValue.value) / parseInt(secondValue.value)
        ).toFixed(1);
        break;

      default:
        console.log("Try Again");
      // code block
    }

    alert(total);
  };

  Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
