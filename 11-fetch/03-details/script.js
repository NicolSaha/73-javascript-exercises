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
    // console.log( input);
    let inputNumber = Number(input - 1);
    console.log(inputNumber);

    fetch(myRequest)
      .then((res) => res.json())
      .then((data) => {
        console.table(Object.values(data.heroes));
        let arr = Object.values(data.heroes);
        let template = document.getElementById("tpl-hero");

        arr.forEach((xmen) => {
          let value = Number(inputNumber) + Number(1);
          if (xmen.id === value) {
            let clone = template.content.cloneNode(true);
            let name = clone.querySelector(".name");
            let alterego = clone.querySelector(".alter-ego");
            let powers = clone.querySelector(".powers");
            name.innerHTML = arr[inputNumber].name;
            alterego.innerHTML = arr[inputNumber].alterEgo;
            powers.innerHTML = arr[inputNumber].abilities;
            template.parentNode.appendChild(clone);
          } else {
            console.log("Try Again");
          }
        });

        setTimeout(function () {
          window.location.reload(1);
        }, 60000);
        setTimeout();
      });
  });
})();
