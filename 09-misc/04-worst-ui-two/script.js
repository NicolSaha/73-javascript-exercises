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
  const partOne = document.querySelector("#part-One");
  const partTwo = document.querySelector("#part-Two");
  const partThree = document.querySelector("#part-Three");
  const partFour = document.querySelector("#part-Four");

  // Get Min & Max Values
  const min1 = partOne.getAttribute("data-min");
  const max1 = partOne.getAttribute("data-max");
  const min2 = partTwo.getAttribute("data-min");
  const max2 = partTwo.getAttribute("data-max");
  const min3 = partThree.getAttribute("data-min");
  const max3 = partThree.getAttribute("data-max");
  const min4 = partFour.getAttribute("data-min");
  const max4 = partFour.getAttribute("data-max");

  // Button Click 1
  partOne.onclick = () => {
 
    // 

    partOne.textContent = ??;
    target.textContent = ??;
  };

// Button Click 2
  partTwo.onclick = () => {
    //
    
    partTwo.textContent = ??;
    target.textContent = ??;
  };

  // Button Click 3
  partThree.onclick = () => {
   
    //

    partThree.textContent = ??;
    target.textContent = ??;
  };

  // Button Click 4
  partFour.onclick = () => {
   //

    partFour.textContent = i??;
    target.textContent = ??;
  };
})();
