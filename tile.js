var tileIncrement = 0;

var usedColors = [];

var tile = function(name){
	this.name = name;
	this.color = "rgb(" + getRandomInt(75, 255) + ", " + getRandomInt(75, 255) + ", " + getRandomInt(75, 255) + ")";
	tileIncrement += 1;
	this.tileID = tileIncrement;
	
	this.getColor = function(){
		var needsColor = true;
		while(needsColor){
			if(usedColors.indexOf(this.color) != -1){
				this.color = "rgb(" + getRandomInt(75, 255) + ", " + getRandomInt(75, 255) + ", " + getRandomInt(75, 255) + ")";
			}
			else{
				usedColors.push(this.color);
				needsColor = false;
			}
		}
	}
	
	this.getColor();
}

var tiles = [];