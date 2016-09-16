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

var mouse = {
	isPressed: false,
	xPos: 0,
	yPos: 0,
	canvasX: 0,
	canvasY: 0,
	
	mouseDown: function(z){
		this.isPressed = true;
	},
	mouseUp: function(z){
		this.isPressed = false;
		checkCanvas();
	},
	mouseMove: function(z){
		this.xPos = z.clientX;
		this.yPos = z.clientY;
		this.canvasX = z.clientX - Math.floor(c.getBoundingClientRect().left);
		this.canvasY = z.clientY - Math.floor(c.getBoundingClientRect().top);
	},
}

window.addEventListener("keydown", function(event){keyBoard.keydown(event)});
window.addEventListener("keyup", function(event){keyBoard.keyup(event)});
window.addEventListener("mousedown", function(event){mouse.mouseDown(event)});
window.addEventListener("mouseup", function(event){mouse.mouseUp(event)});
window.addEventListener("mousemove", function(event){mouse.mouseMove(event)});

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
}