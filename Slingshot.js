class Slingshot {
constructor(object1, object2) {
 var options = {
     bodyA : object1,
     bodyB : object2,
     length : 10,
     stiffness : 0.04
 }
 this.sling = Matter.Constraint.create(options)
 World.add(world, this.sling)
}
 display() {
 var pointA = this.sling.bodyA.position;
 var pointB = this.sling.bodyB.position
 strokeWeight(4)
 line(pointA.x, pointA.y, pointB.x, pointB.y)
 }
}