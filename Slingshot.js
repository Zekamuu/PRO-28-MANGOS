class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.2,
            length:5
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(matterWorld, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB =  this.pointB;
            push();
            line(pointA, pointB);
            pop();
        }
    }
   
}