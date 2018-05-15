function Airport() {
  this._capacity = 97;
  this._hangar = [];
}

Airport.prototype.capacity = function() {
  return this._capacity;
}

Airport.prototype.hangar = function() {
  return this._hangar;
}

Airport.prototype.land = function(plane) {
  plane.land();
  this._hangar.push(plane);
}

Airport.prototype.takeOff = function(plane) {
  plane.takeOff();
  const index = this._hangar.indexOf(plane);
  this._hangar.splice(index, 1);
}
