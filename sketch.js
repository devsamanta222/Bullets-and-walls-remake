var wall,thickness
var bullet,speed,weight
















function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,25)
  wall=createSprite(1200,200,thickness,height/2)
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  
}

function draw() {
  background(255,255,255);  

  bullet.velocityX=speed;
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(weight<32&& speed<223&& thickness<70){
      bullet.shapeColor=color(255,0,0);
    }
    if(weight>32&& speed>233&& thickness>40){
      bullet.shapeColor=color(255,0,0);
    }
   
    
  


  drawSprites();
  }
}
