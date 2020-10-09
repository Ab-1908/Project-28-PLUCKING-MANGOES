class slingShot{

    constructor(bodyA,pointB){
          var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffnes:0.04,
            length: 10
    
         }
          this.pointB = pointB
         this.sling = Constraint.create(options);
         World.add(World,this.sling)
    
    }
    
       display(){
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(4)
          line(pointA.x, pointA.y, pointB.x, pointB.y);
    
       }
    
    }