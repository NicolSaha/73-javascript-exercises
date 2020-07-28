/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
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

  // Get Buttons
  const btn1 = document.querySelector("#fix-part-one");
  const btn2 = document.querySelector("#fix-part-two");
  const btn3 = document.querySelector("#fix-part-three");
  const btn4 = document.querySelector("#fix-part-four");

  // Get Min & Max Values
  const min1 = Number(partOne.getAttribute("data-min"));
  const max1 = Number(partOne.getAttribute("data-max"));
  const min2 = Number(partTwo.getAttribute("data-min"));
  const max2 = Number(partTwo.getAttribute("data-max"));
  const min3 = Number(partThree.getAttribute("data-min"));
  const max3 = Number(partThree.getAttribute("data-max"));
  const min4 = Number(partFour.getAttribute("data-min"));
  const max4 = Number(partFour.getAttribute("data-max"));

  // Random Number Generator
  function random(min, max) {
    return ~~(Math.random() * (max - min)) + min;
  }

  // Values
  let n1 = `0${min1}`;
  let n2 = `0${min2}`;
  let n3 = `0${min3}`;
  let n4 = `0${min4}`;

  // Button 1
  btn1.onclick = () => {
    n1 = random(min1, max1);
    if (n1 < 10) {
      n1 = `0${n1}`;
    }
    partOne.value = n1;
    target.textContent = `+0${n1}${n2}${n3}${n4}`;
  };

  // Button 2
  btn2.onclick = () => {
    n2 = random(min2, max2);
    if (n2 < 10) {
      n2 = `0${n2}`;
    }
    partTwo.value = n2;
    target.textContent = `+0${n1}${n2}${n3}${n4}`;
  };

  // Button 3
  btn3.onclick = () => {
    n3 = random(min2, max2);
    if (n3 < 10) {
      n3 = `0${n3}`;
    }
    partThree.value = n3;
    target.textContent = `+0${n1}${n2}${n3}${n4}`;
  };

  // Button 4
  btn4.onclick = () => {
    n4 = random(min4, max4);
    if (n4 < 10) {
      n4 = `0${n4}`;
    }
    partFour.value = n4;
    target.textContent = `+0${n1}${n2}${n3}${n4}`;
  };
})();
