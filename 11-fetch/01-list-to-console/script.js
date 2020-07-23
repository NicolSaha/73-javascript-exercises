/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function () {
    let myInit = {
      method: "GET",
      mode: "cors",
      cache: "default",
    };

    let myRequest = new Request(
      "/Exercises/73-javascript-exercises/shared/api.json",
      myInit
    );

    fetch(myRequest)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    // .catch((err) => {
    // console.error("Error: ", err); });
  });
})();
