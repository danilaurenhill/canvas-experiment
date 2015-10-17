var canvas = document.querySelector("#fade");
var context = canvas.getContext("2d");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var angle = 0;

var requestAnimationFrame = window.requestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.msRequestAnimationFrame;
 
function drawCircle() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
     
    // color in the background
    context.fillStyle = "#EEEEEE";
    context.fillRect(0, 0, canvasWidth, canvasHeight);

    // draw the circle
    context.beginPath();

    var radius = 25 + 80 * Math.abs(Math.cos(angle));
    context.arc(130, 130, radius, 0, Math.PI * 2, false);
    context.closePath();
    angle += Math.PI / 64;

    // color in the circle
    context.fillStyle = "#D46A6A";
    context.fill();

    requestAnimationFrame(drawCircle);
}