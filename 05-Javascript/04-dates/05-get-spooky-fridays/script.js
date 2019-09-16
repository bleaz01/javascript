/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
	document.getElementById("run").addEventListener("click", () =>{

		let year = document.getElementById("year").value;

		let bi = new Date( year );

		console.log(bi);

		let jour=["dimanche", "lundi", "mardi", "mercredi", "jeudi" , "vendredi", "samedi"];
		let month=["janvier", "Fevrier", "Mars", "Avril", "Mei", "Juin", "Juillet", "Septembre", "Octobre", "Novembre", "Décembre"];
		let num = bi.getDate();
		
		let a = 0;
		let i = 0;
		let j = bi.getDate();
		let m = bi.getMonth();
		let d = bi.getDay();
		
		if((bi.getFullYear() % 4 == 0) && (bi.getFullYear() % 100 !== 0) || (bi.getFullYear() % 400 == 0))
		{
			a = 366;
			console.log(a);
			while(i < a)
			{
				if(d === 6)
		

	});
    // your code here
})();
