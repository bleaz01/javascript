/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
		document.getElementById("run").addEventListener("click", () =>{
			
		const nextBirds = birds[Math.floor(Math.random() * birds.length)];
		const next=[];
		adjectives.forEach(function(valeur){
			
			next.push(valeur)

		});
			let text;
		const arrays = next[Math.floor(Math.random() * next.length)];
			console.log(arrays);
			if(nextBirds.fem == true)
			{
				 text = nextBirds.name + " " + arrays + "e";
			}
			else
			{
				text = nextBirds.name + " " +  arrays;
			}
			target.innerHTML = text;
			

				
				
				



		});
    // your code here
})();
