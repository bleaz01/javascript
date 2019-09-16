/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
		let date = document.getElementById("target");
		let now = new Date();
		let day = now.getDay();
		let jour = now.getDate();
		let Month = now.getMonth();
		let year = now.getFullYear();
		let h = now.getHours();
		let m = now.getMinutes();
		const tabMonth=["janvier", "Fevrier", "Mars", "Avril"," Mei" ," Juin"," Juillet"," Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
		const tabDay=["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
			console.log(Month);	
		date.innerHTML = tabDay[day] +" "+ jour +" "+ tabMonth[Month]+ " " + year + "," +  h + "h" + m;

})();
