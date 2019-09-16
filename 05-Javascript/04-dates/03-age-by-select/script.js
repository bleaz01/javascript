/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
	document.getElementById("run").addEventListener("click", () =>{
		let day = document.getElementById("dob-day").value;
		let month = document.getElementById("dob-month").value -1;
		let year = document.getElementById("dob-year").value;
		let date = new Date()
		let birth = new Date(year, month, day);
		let dif= Math.floor(( date - birth ) / (1000 * 3600 * 24 * 365));
			console.log(dif);
	});
})();
