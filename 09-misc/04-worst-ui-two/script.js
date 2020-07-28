/* becode/javascript
 *
 * /07-misc/04-worst-ui-partTwo/script.js - 7.4: la pire interface (2) : phpartOne clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  // Get Targets
  const target = document.querySelector("#target");
  const partOne = document.querySelector("#part-one");
  const partTwo = document.querySelector("#part-two");
  const partThree = document.querySelector("#part-three");
  const partFour = document.querySelector("#part-four");

  // Get Min & Max Values
  const min1 = partOne.getAttribute("data-min");
  const max1 = partOne.getAttribute("data-max");
  const min2 = partTwo.getAttribute("data-min");
  const max2 = partTwo.getAttribute("data-max");
  const min3 = partThree.getAttribute("data-min");
  const max3 = partThree.getAttribute("data-max");
  const min4 = partFour.getAttribute("data-min");
  const max4 = partFour.getAttribute("data-max");

  // Set Start Values
  let start1 = min1;
  let start2 = min2;
  let start3 = min3;
  let start4 = min4;

  // Button Click 1
  partOne.onclick = () => {
    if (start1 > max1) {
      start1 = min1;
    }
    console.log(start1);

    start1++;

    if (start1 < 10) {
      start1 = `0${start1}`;
    }

    partOne.textContent = start1;
    target.textContent = `+0${start1}${start2}${start3}${start4}`;
  };

  // Button Click 2
  partTwo.onclick = () => {
    if (start2 > max2) {
      start2 = min2;
    }

    start2++;

    if (start2 < 10) {
      start2 = `0${start2}`;
    }

    partTwo.textContent = start2;
    target.textContent = `+0${start1}${start2}${start3}${start4}`;
  };

  // Button Click 3
  partThree.onclick = () => {
    if (start3 > max3) {
      start3 = min3;
    }

    start3++;

    if (start3 < 10) {
      start3 = `0${start3}`;
    }

    partThree.textContent = start3;
    target.textContent = `+0${start1}${start2}${start3}${start4}`;
  };

  // Button Click 4
  partFour.onclick = () => {
    if (start4 > max4) {
      start4 = min4;
    }

    start4++;

    if (start4 < 10) {
      start4 = `0${start4}`;
    }

    partFour.textContent = start4;
    target.textContent = `+0${start1}${start2}${start3}${start4}`;
  };
})();
