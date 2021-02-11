class Box{
    constructor(x,y){
        var options={
            'resitution':0.8,
            'friction':1.0,
            'density':0.04
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("orange");
        fill("blue");
        rect(0,0,50,50);
        pop();
    }
}