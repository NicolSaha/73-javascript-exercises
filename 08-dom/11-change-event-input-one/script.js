/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const passOne = document.querySelector("#pass-one");
  const counterSpan = document.querySelector("#counter");

  passOne.onkeyup = () => {
    let valueOne = passOne.value;
    const length = valueOne.length;
    counterSpan.textContent = `${length}/10`;

    if (length > 10) {
      valueOne = valueOne.slice(0, -1);
      passOne.value = valueOne;
      counterSpan.textContent = `10/10`;
    }
  };
})();
