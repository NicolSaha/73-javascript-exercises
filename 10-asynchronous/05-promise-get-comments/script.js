/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  document.querySelector("#run").onclick = () => {
    window.lib.getPosts().then(addComments).catch(error);
  };

  function addComments(articles) {
    for (const obj in articles) {
      const id = articles[obj].id;

      window.lib
        .getComments(id)
        .then((comments) => {
          articles[obj].comments = comments;
        })
        .catch(error);
    }
    console.log(articles);
  }
  function error(error) {
    console.log(error);
  }
})();
