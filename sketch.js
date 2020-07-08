var canvas,backgroundImage;

var gameState=0;
var playCount;

var from,player,game;

function Setup(){
  canvas=createCanvas(400,400);
  database=firebase.database();

  game=new Game();
  game.getState();
  game.start();
}
function draw(){
  
}