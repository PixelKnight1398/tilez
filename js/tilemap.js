//tilemap constructor
var tilemap = function(name, w, h, tw, th){
	this.name = name;
	this.width = w;
	this.height = h;
	this.tilewidth = tw;
	this.tileheight = th;
	this.tileValues = [];
	
	this.initValues = function(){
		for(var i = 0; i < this.height; i++){
			this.tileValues[i] = [];
			for(var j = 0; j < this.width; j++){
				this.tileValues[i][j] = 0;
			}
		}
	}
	
	this.initValues();
}

//tilemap container
var tilemaps = [];
