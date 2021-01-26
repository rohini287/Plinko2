class plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        //this.r=r;
        this.body=Bodies.circle(this.x,this.y,10,options);
        World.add(world,this.body)
    }

    display(){
        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS)
      
        fill("white");
        ellipse(0,0,10,10)
        pop();
    }
}