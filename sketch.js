var slingshot;
var attacker;
var block;
var score = 0;

function setup() {
  createCanvas(800,400);
  
  slingshot = new SlingShot(200, 100, 50, 100);
  attacker = new Attacker(200, 100, 20, 10);
  block = new Blocks(600, 200, 20, 20);

}

function draw() {
  background(0);  
   
  slingshot.display();
  attacker.display();
  block.dislay();
  block.score();

  drawSprites();
}

 async function getTime() {
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJson = await response.json();
var dt = responseJson.datetime;
console.log(dt);
var h = dt.slice(11, 13);
console.log(h);


if(h >= 06 && h <= 19) {
 background("blue");
}
else {
background("black");

}


}