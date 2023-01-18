let ads = {
	
	/*1:{
		name:"ad example",
		img:"https://assets.codepen.io/2104921/youradhere.PNG",
		link:"https://forms.gle/QwH7UkyzWPqja6ER9",
		rank:"example",
	}*/
	
	2:{
		name:"real",
		img:"https://peerboard.com/583030755/file/f43deeb1-92ff-4131-84e8-42d1c270cbdc_235_299",
		link:"#g-elasticman",
		rank:"free",
	},
	
}

for (const [i,v] of Object.entries(ads)) {
	let str = `<a href="`+v.link+`" target="_blank"><button class="ad">
<img class="adimg" src="`+v.img+`">
<h3 class="adtxt">`+v.name+`</h3>
</button></a>`
	
	if (v.rank == "free"){
		document.getElementById("adsFrame").innerHTML = (document.getElementById("adsFrame").innerHTML + str)
	} else {
		document.getElementById("adsFrame").innerHTML = (str + document.getElementById("adsFrame").innerHTML)
	}
}