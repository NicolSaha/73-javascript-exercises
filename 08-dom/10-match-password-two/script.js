/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  document.getElementById("run").addEventListener("click", function () {
    const passOne = document.querySelector("#pass-one");
    const passTwo = document.querySelector("#pass-two");
    const valOne = passOne.value;
    const valTwo = passTwo.value;
    const error = new Error("Oops");

    if (valOne === valTwo) {
      passOne.style.borderColor = "green";
      passTwo.style.borderColor = "green";
      // console.log("Match");
    } else {
      passOne.style.borderColor = "red";
      passTwo.style.borderColor = "red";
      passOne.value = error;
      passTwo.value = error;
      //  console.log("No Match");
    }
  });
})();
