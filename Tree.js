class Trees{
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
        this.image = (treeImg);
        World.add(matterWorld, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 500, 500);
    }
}