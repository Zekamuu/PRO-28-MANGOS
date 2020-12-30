class Stones{
    constructor(x, y, w, h){
        var options = {
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.image = (stoneImg)
        World.add(matterWorld, this.body);
    }
    display(){
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, 75, 75);
    }
}