function Plane() {
  this._flying = false;
};

Plane.prototype.isFlying = function() {
  return this._flying;
};

Plane.prototype.takeOff = function() {
  if (this._flying) {
    throw new Error("Plane already in the sky");
  } else {
    this._flying = true;
  }
};

Plane.prototype.land = function() {
  if (this._flying) {
    this._flying = false;
  } else {
    throw new Error("Plane already landed");
  }
};
