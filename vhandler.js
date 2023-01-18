let games = {
	
	run3:{
		name:"Run 3",
		keyword:"run 3 alien runner",
		id:"run3",
		icon:"https://assets1.ignimgs.com/2018/06/18/run-3-0-button-1529363477468.jpg",
		desc:"Run 3 is a fun game where you run through tunnels in space while avoiding holes.",
		genre:"Runner",
		dev:"Publisher: player03.com",
		date:"9/26",
		link:"Visit wiki",
		linktxt:"https://run.fandom.com/wiki/Run_3",
	},
	
}

for (const [i,v] of
					Object.entries(games)) {
	document.getElementById("allGames").innerHTML += (
	`<button onclick="play('`+v.id+`')" name="game name" class="game">
<img class="gameimg" src="`+v.icon+`">
<h2 style="margin-top:7px;" class="gametxt">`+v.name+`</h2>
<p style="font-size:20px;margin-top:3px;" class="gametxt">`+v.genre+`</p>
</button>`
	)
}