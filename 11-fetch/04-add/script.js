/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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
        let arr = Object.values(data.heroes);
        //let arrLength = arr.length + 1;
        let heroName = document.getElementById("hero-name");
        let heroAlterEgo = document.getElementById("hero-alter-ego");
        let heroPowers = document.getElementById("hero-powers");

        // console.log(arr[arrLength].name);

        arr.push(heroName);
        arr.push(heroAlterEgo);
        arr.push(heroPowers);

        console.log(arr);
      });
  });
})();
