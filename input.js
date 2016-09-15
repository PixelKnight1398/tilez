var keyBoard = {
	_pressed: [],
	
	LEFT: 37,
	DOWN: 40,
	RIGHT: 39,
	UP: 38,
	
	keydown: function(key){
		this._pressed[key.keyCode] = true;
		//console.log(key.keyCode);
	},
	
	keyup: function(key){
		this._pressed[key.keyCode] = false;
	},
	
	ispressed: function(key){
		return this._pressed[key];
	},
};

window.addEventListener("keydown", function(){keyBoard.keydown(event)});
window.addEventListener("keyup", function(){keyBoard.keyup(event)});

var checkInput = function(){
	if(keyBoard.ispressed(keyBoard.LEFT)){
		offsetx -= 1;
	}
	if(keyBoard.ispressed(keyBoard.DOWN)){
		offsety += 1;
	}
	if(keyBoard.ispressed(keyBoard.RIGHT)){
		offsetx += 1;
	}
	if(keyBoard.ispressed(keyBoard.UP)){
		offsety -= 1;
	}
	draw();
	window.requestAnimationFrame(checkInput);
}

window.requestAnimationFrame(checkInput);