var zoomin = function(){
	zoom += 0.25;
	document.getElementById("currentZoom").innerHTML = zoom * 100 + "%"
	draw();
}

var zoomout = function(){
	if(zoom > 0){
		zoom -= 0.25;
		document.getElementById("currentZoom").innerHTML = zoom * 100 + "%"
		draw();
	}
}