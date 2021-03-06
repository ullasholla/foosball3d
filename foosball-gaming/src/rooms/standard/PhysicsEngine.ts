import {World, Vec3, Body, Plane, Sphere} from "cannon";

export default class PhysicsEngine {
  world: World;
  ballShape : Sphere;
  ballBody : Body;

  groundShape: Plane;
  groundBody:Body;

  constructor() {
    this.world = new World();
    this.world.gravity = new Vec3(0, -9.82, 0);

    this.ballShape = new Sphere(1);
    this.ballBody = new Body({
      shape: this.ballShape,
      mass: 5,
      position: new Vec3(0, 5, 0)
    });
  
    this.groundShape = new Plane();
    this.groundBody = new Body({
      shape: this.groundShape,
      mass: 0
    });
    this.groundBody.quaternion.setFromAxisAngle(new Vec3(1,0,0), -Math.PI/2);

    this.world.addBody(this.ballBody);
    this.world.addBody(this.groundBody);
  }

  start() {
    for (var i = 0; i < 60; ++i) {
      this.world.step(1/60);
      console.log(
        this.ballBody.position.x,
        this.ballBody.position.y,
        this.ballBody.position.z
      );
    }
  }

  stop() {}
}
