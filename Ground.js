class Grounds{
    constructor(x, y, w, h){
        var options = {
            restitution:0.4,
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(matterWorld, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("GREEN");
        rect(pos.x, pos.y, this.width, this.height);
    }
}