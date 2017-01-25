function toMeridian(number) {
	return (number / 180) * Math.PI;
}
/**
 * Created by Владыка Макс on 24.01.2017.
 */

$(function(){
	let el = document.getElementById('canvas'),
		width = document.documentElement.clientWidth,
		height = document.documentElement.clientHeight,
		canvas = new Canvas({
			canvas: el,
			width: width,
			height: height
		});
		
		
		
		canvas.canvas.addEventListener('mousemove', function(e) {
			
			canvas.drawCoordinateSystem(e.offsetX, e.offsetY);
		});
});

function Canvas(options) {
	this.canvas = options.canvas;
	this.ctx = this.canvas.getContext('2d');
	this.width = options.width;
	this.height = options.height;
	
	this.setSize();
}

Canvas.prototype.setSize = function() {
	this.canvas.width = this.width;
	this.canvas.height = this.height;
};

Canvas.prototype.clear = function() {
	this.setSize();
};

Canvas.prototype.drawCoordinateSystem = function(offsetX, offsetY) {
	let ctx = this.ctx,
		width = this.width,
		height = this.height;
	
	width = !(width % 50)? width: width + (50 - width % 50);
	height = !(height % 50)? height: height + (50 - height % 50);
	
	this.clear();
	
	ctx.translate(offsetX || 0, offsetY || 0);
	
	ctx.strokeStyle = '#000000';
	ctx.beginPath();
	
	ctx.moveTo(-width, 0);
	ctx.lineTo(width, 0);
	
	ctx.moveTo(0, -height);
	ctx.lineTo(0, height);
	
	for(let x = -width; x <= width; x += 50) {
		ctx.moveTo(x, -5);
		ctx.lineTo(x, 5);
		if(x) {
			ctx.fillText(x, x - 4, -8);
		}
	}
	
	for(let y = -height; y <= height; y += 50) {
		ctx.moveTo(-5, y);
		ctx.lineTo(5, y);
		if(y) {
			ctx.fillText(y, 8, y);
		}
	}
	
	ctx.stroke();
};