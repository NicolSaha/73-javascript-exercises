/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("run").addEventListener("click", function () {
    var output = "Result is";

    var n = 21;

    if (n != null && n > 0) {
      var i = 0;

      // alert("The first " + n + " numbers and their squares are:");
      
      for (i = 1; i <= n; i++)
        output += "\n" + i + "*" + i + "=" + i * i + "\n";
      alert(output);
    } else {
      alert("Try again");
    }
  });
})();
