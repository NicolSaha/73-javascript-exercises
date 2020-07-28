/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  async function error() {
    console.error(error, "Error Called");
  }

  async function deleteHero(id) {
    const options = {
      method: "Delete",
      headers: { "Content-Type": "application/json" },
    };

    const del = await fetch(
      ` /Exercises/73-javascript-exercises/shared/api.json/heroes/${id}`,
      options
    );

    console.log(del);

    return del.ok
      ? console.log(`Hero with ID '${id}' successfully deleted!`)
      : console.log(`Error, hero with ID '${id}' does not exist`);
  }

  document.querySelector("#run").onclick = async () => {
    const id = document.querySelector("#hero-id").value;
    await deleteHero(id).catch(error);
  };
})();
