/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
		document.getElementById("run").addEventListener("click", () =>{
			
		let arrays=[];
		for(let i = 0; i < 10; i++)
		{
			arrays[i] = parseInt(Math.random()*100);
			console.log(arrays[i]);
		}

		let list= 1;
		arrays.forEach(function(value){
			document.getElementById("n-"+ list).innerHTML= value;
			list++;
		});
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		let min = Math.min(...arrays);
		let max = Math.max(...arrays);
		let sum = arrays.reduce(reducer);
		let average = sum / arrays.length;
		document.getElementById("min").innerHTML= min;
		document.getElementById("max").innerHTML= max;
		document.getElementById("sum").innerHTML= sum;
		document.getElementById("average").innerHTML= average;

	});

    // your code here
})();
