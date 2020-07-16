/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document
    .getElementById("run")
    .addEventListener("click", function getLuckyFridayMonths() {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let sunday = days[0];
      let input = document.getElementById("year").value;
      let date = new Date(input);
      let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      firstDayOfMonth = firstDay.getDay();

      let print = [];

      for (let i = 0; i <= 11; i++) {
        let month = new Date(`${i} 1, ${input}`);

        if (month.getDay() == 0) {
          console.log(`${months[i]}`);
          // alert(`${months[i]}`);
          print.push(`${months[i]}`);
        } else {
          console.log("n/a");
        }
      }
      alert(print);
    });
})();
