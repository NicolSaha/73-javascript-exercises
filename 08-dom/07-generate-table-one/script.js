/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const table = `<table>
      <caption>
       Table
      </caption>
      <thead>
        <tr>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 2</td>
        </tr>
        <tr>
          <td>Row 3</td>
        </tr>
        <tr>
          <td>Row 4</td>
        </tr>
        <tr>
          <td>Row 5</td>
        </tr>
        <tr>
          <td>Row 6</td>
        </tr>
        <tr>
          <td>Row 7</td>
        </tr>
        <tr>
          <td>Row 8</td>
        </tr>
        <tr>
          <td>Row 9</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Footer</td>
        </tr>
      </tfoot>
    </table>`;

  document.querySelector("#target").innerHTML = table;
})();
