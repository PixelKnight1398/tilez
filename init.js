var c;
var ctx;

var zoom = 1;


var init = function(){
	c = document.getElementById("myCanvas");
	c.height = document.getElementById("canvasContainer").getBoundingClientRect().height;
	c.width = document.getElementById("canvasContainer").getBoundingClientRect().width;
	ctx = c.getContext("2d");
}

var createNewArray = function(){
	document.getElementById("mapName").value = "";
	document.getElementById("mapWidth").value = "";
	document.getElementById("mapHeight").value = "";
	document.getElementById("tileWidth").value = "";
	document.getElementById("tileHeight").value = "";
	document.getElementById("createArrayForm").style.display = "block";
}

var closeArrayCreator = function(){
	document.getElementById("createArrayForm").style.display = "none";
}

var initArray = function(){
	tilemaps.push(new tilemap(
		document.getElementById("mapName").value,
		document.getElementById("mapWidth").value,
		document.getElementById("mapHeight").value,
		document.getElementById("tileWidth").value,
		document.getElementById("tileHeight").value
	));
	closeArrayCreator();
	
	buildArrayList();
	
	draw();
	
	console.log(tilemaps);
}

var createNewTile = function(){
	document.getElementById("tileName").value = "";
	document.getElementById("createTileForm").style.display = "block";
}

var closeTileCreator = function(){
	document.getElementById("createTileForm").style.display = "none";
}

var initTile = function(){
	for(var j = 0; j < tiles.length; j++){
		if(tiles[j].name == document.getElementById("tileName").value){
			document.getElementById("errorMessage2").innerHTML = "That tile name is already in use!";
			return;
		}
	}
	tiles.push(new tile(
		document.getElementById("tileName").value
	));
	closeTileCreator();
	
	buildTileList();
	
	draw();
	
	console.log(tiles);
}