var checkCanvas = function(){
	var tempSpot;
	var tempMap;
	if(mouse.canvasX >= 0 && mouse.canvasY >= 0 && mouse.canvasX < c.width && mouse.canvasY < c.height){
		for(var i = 0; i < tilemaps.length; i++){
			tempMap = tilemaps[i];
			for(var j = 0; j < tempMap.height; j++){
				for(var k = 0; k < tempMap.width; k++){
					tempSpot = tempMap.tileValues[j][k];
					if(mouse.canvasX >= ((k * tempMap.tilewidth) + offsetx) * zoom && mouse.canvasX < (((k * tempMap.tilewidth) + offsetx) * zoom) + tempMap.tilewidth){
						if(mouse.canvasY >= ((j * tempMap.tileheight) + offsety) * zoom && mouse.canvasY < (((j * tempMap.tileheight) + offsety) * zoom) + tempMap.tileheight){
							tilemaps[i].tileValues[j][k] = currentTile;
						}
					}
				}
			}
		}
	}
}