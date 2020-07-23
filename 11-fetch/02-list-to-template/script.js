/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
        console.table(Object.values(data.heroes));
        const arr = Object.values(data.heroes);
        //return arr;

        const template = document.getElementById("tpl-hero");
        for (i = 0; i < arr.length; i++) {
          const hero = arr[i];
          const clone = template.content.cloneNode(true);
          const name = clone.querySelectorAll(".name");
          const alterego = clone.querySelectorAll(".alter-ego");
          const powers = clone.querySelectorAll(".powers");
          name[0].innerHTML = hero.name;
          alterego[0].innerHTML = hero.alterEgo;
          powers[0].innerHTML = hero.abilities;
          template.parentNode.appendChild(clone);
        }
      });
  });
})();
