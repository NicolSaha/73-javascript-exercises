/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    
    // your code here
    function dates() {
       
        let now = new Date();
        let date = now.getDate();
        let year = now.getFullYear();

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[now.getDay(5)];

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
        let month = months[now.getMonth()];

        // let dayOfWeek = 5; //friday
        let diff = date.getDay() - dayOfWeek;
        if (diff > 0) {
            date.setDate(date.getDate() + 6);
        }
        else if (diff < 0) {
            date.setDate(date.getDate() + ((-1) * diff))
        }
        console.log(date);
    }

    document.getElementById("run").addEventListener("click", dates());

})();
