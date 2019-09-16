/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code herooe
		let temp = document.getElementById("target");
		let date = new Date();
		let heure = date.getHours();
		let minute = date.getMinutes();
			console.log(minute);

		if((heure < 18) || (heure == 17 && minute < 30))
		{
			console.log(minute);
			temp.innerHTML = "Bonjour";
		}
		else
		{
			temp.innerHTML = "Bonsoir";
		}
		
})();
