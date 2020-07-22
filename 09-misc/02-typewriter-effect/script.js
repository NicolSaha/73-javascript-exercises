/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let tw = {
    /* [THE SETTINGS] */
    container: "target", // ID of typewriter container
    text:
      "Je suis un texte qui va apparaître dans un effet 'machine à écrire', un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !", // Text to show
    delay: 100, // Delay in between each character

    /* [THE MECHANICS] */
    timer: null, // Used to hold the timer
    pointer: 0, // Current text position
    draw: function () {
      // tw.draw() : typewriter effect

      tw.pointer++;
      tw.container.innerHTML = tw.text.substring(0, tw.pointer);
      if (tw.pointer < tw.text.length) {
        tw.timer = setTimeout(tw.draw, tw.delay);
      }
    },
  };

  window.addEventListener("load", function () {
    tw.container = document.getElementById(tw.container);
    tw.draw();
  });
})();
