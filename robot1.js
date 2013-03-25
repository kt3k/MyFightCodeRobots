
var Robot = function(robot) {
  this.i = 0;
};

var dice = function (n) {
  return Math.floor(Math.random() * n);
};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    /*robot.ahead(10);*/
    //robot.rotateCannon(30);
    /*robot.ahead(10);*/
    if (this.seeing) {
      robot.fire(5);
      this.i += 1;
      robot.log(1);
      //robot.rotateCannon(dice(3) - 2)
      if (this.i > 60) {
        this.i = 0;
        this.seeing = 0;
        robot.turn(30);
        robot.ahead(30);
      }
    } else {
      robot.rotateCannon(-1);
    }
    //robot.rotateCannon(3);
  //robot.fire();
  /*
  var fire = function () {
    robot.fire()
    setTimeout(function () {
      fire();
    }, robot.gunCoolDownTime);
  };
  
  fire();*/

};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    var enemy = ev.scannedRobot;
    this.seeing = 1;
};

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
  this.seeing = 0;
    robot.turn(60); // turn enought to be in a straight
                            // angle with the wall.
};
     
Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
  this.seeing = 0;
    robot.turn(ev.bearing); // Turn to wherever the bullet was fired
                            // so we can see who shot it
};

