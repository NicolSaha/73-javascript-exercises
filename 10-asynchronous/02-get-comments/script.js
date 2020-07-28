/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  function getPosts(error, articles) {
    if (error) {
      console.error(error);
      return;
    }

    for (let i = 0; i < articles.length; i++) {
      let article = articles[i];
      let id = article.id;

      window.lib.getComments(id, (error, comments) => {
        if (error) {
          console.error(error);
        } else {
          article["comments"] = comments;
        }
      });
    }

    console.log(articles);
  }

  document.querySelector("#run").onclick = () => {
    window.lib.getPosts(getPosts);
  };
})();
