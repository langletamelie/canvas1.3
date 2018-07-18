var cvs =  document.getElementById('myCanvas');
var ctx = cvs.getContext('2d');
//bas de la voiture//
ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(50,200,350,80);
//toit de la voiture//
ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(125,135,200,80);
// roue droite
ctx.beginPath();
ctx.arc(370,310,30,0,Math.PI*2,true);
ctx.strokeStyle = "black";
ctx.fillStyle = "grey";
ctx.fill();
ctx.stroke();
//roue gauche
ctx.beginPath();
ctx.arc(70,310,30,0,Math.PI*2,true);
ctx.strokeStyle = "black";
ctx.fillStyle = "grey";
ctx.fill();
ctx.stroke();
