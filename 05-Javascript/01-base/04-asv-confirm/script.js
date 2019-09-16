/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
		let usernam = prompt("Quel est ton age, sex et ta ville");
		
		if(confirm("clik sur ok"))
		{
			alert("welcome");
		}
		else
		{
			prompt("Quel est ton age, sex, et ta ville");
		}
    // your code here
})();
