class Paper {
    constructor(x,y,radius){
        var paper_options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.radius= radius;
        this.image=loadImage("paper.png");

        this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,paper_options);
        World.add(world,this.body);
    }

    display(){
        //var angle = this.body.angle;
        push ();
        translate (this.body.position.x , this.body.position.y);
        //rotate (angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}