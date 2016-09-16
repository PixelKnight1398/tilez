var exportCode = function(){
	var tempString = "";
	tempString += "//Tile Key: \n";
	if(tiles.length > 0){
		for(var i = 0; i < tiles.length; i++){
			tempString += "//" + tiles[i].name + " = " + tiles[i].tileID + "\n";
		}
	}
	else{
		tempString += "No Tiles Were Created\n";
	}
	tempString += "\n";
	for(var j = 0; j < tilemaps.length; j++){
		tempString += "var " + tilemaps[j].name + " = [\n";
		for(var k = 0; k < tilemaps[j].tileValues.length; k++){
			tempString += "\t[";
			for(var l = 0; l < tilemaps[j].tileValues[k].length; l++){
				if(l == tilemaps[j].tileValues[k].length - 1){
					tempString += tilemaps[j].tileValues[k][l];
				}
				else{
					tempString += tilemaps[j].tileValues[k][l] + ",";
				}
			}
			tempString += "],\n";
		}
		tempString += "];\n\n";
	}
	document.getElementById("codeReciever").value = tempString;
	document.getElementById("codeExporter").style.display = "block";
}