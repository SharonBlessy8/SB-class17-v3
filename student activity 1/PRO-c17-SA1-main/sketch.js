var box1;

function setup() 
{
  createCanvas(400, 400);
box1= new Box(100,200,10,10,2,2);
}

function draw() 
{
  background(220);
  rect(this.x, this.y,this.w,this.h,this.vx,this.vy)
box1.move();
  box1.show();
box1.bounce();
}
