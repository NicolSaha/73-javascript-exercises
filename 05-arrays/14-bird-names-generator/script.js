/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", function () {
    const birds = [
      { name: "mouette", fem: true },
      { name: "corbeau" },
      { name: "mésange", fem: true },
      { name: "hibou" },
      { name: "buse", fem: true },
      { name: "pigeon" },
      { name: "pie", fem: true },
      { name: "vautour" },
      { name: "faucon" },
      { name: "rouge-gorge" },
      { name: "tourterelle", fem: true },
      { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
      "cendré",
      "huppé",
      "chantant",
      "hurlant",
      "perché",
      "grand",
      "petit",
      "bleu",
      "pantelant",
      "tangent",
      "arboré",
    ]);

    // your code here

    let randomBird = birds[Math.floor(Math.random() * birds.length)];
    // console.log(randomBird.name);

    let arrAdj = Array.from(adjectives);
    let randomAdj = arrAdj[Math.floor(Math.random() * arrAdj.length)];
    // console.log(randomAdj);

    function e() {
      let eV;
      if (randomBird.fem === true) {
        return "e";
      } else {
        return " ";
      }
    }
    // console.log(e);

    document.getElementById("target").textContent = `${
      randomBird.name
    }${e()} ${randomAdj}`;
  });
})();
