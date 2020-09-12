class Paper{

    constructor(x,y,radius){
  
  var options = {
    'isStatic' : false, 
    'restituion' : 1.0,
    'friction' : 0.3
    
    
  }
  
      this.body = Matter.Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      World.add(world,this.body);
  
    }


  display(){
  
  var pos = this.body.position;
  
  ellipse(pos.x,pos.y,this.radius,this.radius);
  
  }
  
}