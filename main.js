function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var offsetx = 0;
var offsety = 0;

var currentTile = 0;

var draw = function(){
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.save();
	ctx.scale(zoom, zoom);
	//draw arrays
	ctx.strokeStyle = "white";
	for(var i = 0; i < tilemaps.length; i++){
		if(document.getElementById(tilemaps[i].name + "DrawBoolean").checked == true){
			for(var j = 0; j < tilemaps[i].height; j++){
				for(var k = 0; k < tilemaps[i].width; k++){
					ctx.strokeRect(offsetx + (k * tilemaps[i].tilewidth), offsety + (j * tilemaps[i].tileheight), tilemaps[i].tilewidth, tilemaps[i].tileheight);
				}
			}
		}
	}
	ctx.restore();
}

var resize = function(){
	c.height = document.getElementById("canvasContainer").getBoundingClientRect().height;
	c.width = document.getElementById("canvasContainer").getBoundingClientRect().width;
}

var buildArrayList = function(){
	document.getElementById("arrayList").innerHTML = "";
	for(var i = 0; i < tilemaps.length; i++){
		document.getElementById("arrayList").innerHTML += 
		"<div class = 'arrayInfo'>Drawing: <input type = 'checkbox' id = '" + tilemaps[i].name + "DrawBoolean' onchange = 'draw()'>" +
		"<h3 class = 'arrayName'>" + tilemaps[i].name + "</h3>" +
		"<ul class = 'arrayDetails'>" +
		"<li>Map Width:" + tilemaps[i].width + "</li>" + 
		"<li>Map Height:" + tilemaps[i].height + "</li>" + 
		"<li>Tile Width:" + tilemaps[i].tilewidth + "</li>" + 
		"<li>Tile Width:" + tilemaps[i].tileheight + "</li>" +
		"</ul></div>";
	}
}

var buildTileList = function(){
	document.getElementById("tileList").innerHTML = "";
	for(var i = 0; i < tiles.length; i++){
		var tempId = tiles[i].name + "Info";
		console.log(tempId);
		document.getElementById("tileList").innerHTML += 
		"<div class = 'tileInfo' id = '" + tiles[i].name + "Info' onmousedown = 'toggleTile(" + tempId + "," + tiles[i].tileID + ")'>" +
		"<h3 class = 'tileName'>" + tiles[i].name + "</h3>" +
		"<div class = 'tilePreview' style = 'background-color: " + tiles[i].color + "'>" +
		
		"</div></div>";
	}
}

var toggleTile = function(zID, newID){
	var allTiles = document.getElementById("tileList").children;
	for(var i = 0; i < allTiles.length; i++){
		allTiles[i].style.border = "0px solid white";
	}
	zID.style.border = "1px solid white";
	
	currentTile = newID;
}