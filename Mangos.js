class Mangos{
    constructor(x, y, r){
        var options = {
            isStatic:true,
            restitution:0,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        this.image = (mangoImage);
        World.add(matterWorld, this.body);
    }
    show(){
         imageMode(CENTER);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
}