/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  // Random number between 1 & 100
  const randomNumber = ~~(Math.random() * 100) + 1;
  const target = document.querySelector(".target");
  // User Input
  const input = Number(document.querySelector("#input").value);

  // Count
  let count = 0;

  document.querySelector("#run").onclick = () => {
    // Check Guess

    if (input === randomNumber) {
      count++;
      target.textContent = `That's right! You did it in ${
        count === 1 ? count + " time" : count + " times"
      }!`;
    } else {
      count++;
      if (input > randomNumber) {
        target.textContent = "Too High!";
      } else {
        target.textContent = "Too Low!";
      }

      // Logs
      console.log(randomNumber, "Random Number");
      console.log(input, "User Input");
      console.log(count, "Amount of guesses");
    }
  };
})();
