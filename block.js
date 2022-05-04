class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.Visibility = 255;
      
    }
    display(){
if (this.body.speed<3) {
  var pos= this.body.position;
  push();
  rectMode(CENTER);
  rect(pos.x,pos.y,this.width, this.height);
  imageMode(CENTER);
  image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
  pop();
} else {
  World.remove(world, this.body);
  push();
  this.Visibility -= 5;
  tint(255, this.Visibility)
  image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
  pop();
}
    }
}