/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let tab = document.getElementById("numbers").value.split(',').map(x => Number(x));
		alert(tab);
		let i = 0;
		let j = 0;
		console.log(tab.length);
		while(i  < tab.length -1)
		{
			j = i + 1;
			while(j < tab.length)
			{
				if(tab[i] > tab[j])
				{
					let tmp = tab[i];
					tab[i] = tab[j];
					tab[j] = tmp;
				}
				j++;
			}
			i++;
		}
		alert(tab);
    });
})();
