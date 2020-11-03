class box{
    constructor(){
        var option={
            'restitution':0.8
        }
        this.body=Bodies.rectangle(200,300,50,50,option)
        this.width=50
        this.height=50
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        //var angle=this.body.angle
        fill("blue")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}