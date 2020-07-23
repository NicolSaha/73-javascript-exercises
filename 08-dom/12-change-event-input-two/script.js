/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const passOne = document.querySelector("#pass-one");
  const validity = document.querySelector("#validity");

  passOne.onkeyup = () => {
    const valueOne = passOne.value;
    const length = valueOne.length;

    let n = 0;
    for (let i = 0; i < valueOne.length; i++) {
      if (!isNaN(valueOne[i])) {
        n++;
      }
    }

    if (length >= 8 && n >= 2) {
      validity.textContent = `ok`;
    } else {
      validity.textContent = `not ok`;
    }
  };
})();
