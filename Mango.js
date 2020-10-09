class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1
         
      }
      this.body = Bodies.circle(x,y,r,options);
      this.width = r;
      this.height = r;
      this.image = loadImage("Images/mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill("yellow");
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
     
      
    }
  };