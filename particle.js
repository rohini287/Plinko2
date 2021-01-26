class particle{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        //this.r=r;
        this.body=Bodies.circle(this.x,this.y,5,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body)
    }

    display(){
        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS)
        fill(this.color);
         ellipse(0,0,10,10)
        pop();
    }
}