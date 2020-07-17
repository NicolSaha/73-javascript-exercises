/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  document.getElementById("run").addEventListener("click", function () {
    const randomNumber = new Set();
    while (randomNumber.size !== 10) {
      randomNumber.add(Math.floor(Math.random() * 100) + 1);
    }
    let arr = Array.from(randomNumber);

    console.log(arr);
    console.log([...randomNumber]);

    let i = 1;
    randomNumber.forEach((e) => {
      document.querySelector(`#n-${i}`).textContent = e;
      i++;
    });

    // MIN VALUE
    const min = Math.min(...randomNumber);
    //   console.log(min);
    document.getElementById("min").textContent = min;

    // MAX VALUE
    const max = Math.max(...randomNumber);
    //   console.log(max);
    document.getElementById("max").textContent = max;

    // SUM VALUE
    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    document.getElementById("sum").textContent = sum;

    // AVERAGE VALUE
    const average = (sum / arr.length).toFixed(0);
    //   console.log(average);
    document.getElementById("average").textContent = average;
  });
})();
