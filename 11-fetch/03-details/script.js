/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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

    let input = document.getElementById("hero-id").value;
    let inputNumber = Number(input);
    console.log(inputNumber);

    fetch(myRequest)
      .then((res) => res.json())
      .then((data) => {
        console.table(Object.values(data.heroes));
        let arr = Object.values(data.heroes);

        let template = document.getElementById("tpl-hero");
        for (i = 0; i < arr.length; i++) {
          //  if (i == inputNumber) {
          let hero = arr[i];
          let clone = template.content.cloneNode(true);
          let name = clone.querySelectorAll(".name");
          let alterego = clone.querySelectorAll(".alter-ego");
          let powers = clone.querySelectorAll(".powers");
          name[i].innerHTML = hero.name;
          alterego[i].innerHTML = hero.alterEgo;
          powers[i].innerHTML = hero.abilities;
          template.parentNode.appendChild(clone);
          //  } else {
          //     console.log("Try again");
          //  }
        }
      });
  });
})();
