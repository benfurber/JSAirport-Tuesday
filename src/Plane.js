function Plane() {
  this.flying = false;
};

Plane.prototype.isFlying = function() {
  return this.flying;
};

Plane.prototype.takeOff = function() {
  if (this.flying) {
    throw new Error("Plane already in the sky");
  } else {
    this.flying = true;
  }
};

Plane.prototype.land = function() {
  if (this.isFlying() == false) {
    throw new Error("Plane already landed");
  } else {
    this.flying = false;
  }
};
