/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * ied at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  n = 100;
  for (i = 1; i <= n; i + 1) {
    if (i % 15 === 0) {
      console.log(i + " fizzbuzz");
      i++;
    } else if (i % 3 === 0) {
      console.log(i + " fizz");
      i++;
    } else if (i % 5 === 0) {
      console.log(i + " buzz");
      i++;
    } else {
      console.log(i);
      i++;
    }
  }
})();
