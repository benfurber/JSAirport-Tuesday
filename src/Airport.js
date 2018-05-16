function Airport(weather) {
  this._capacity = 97;
  this._hangar = [];
  this._weather = weather;
};

// Functions to return the above variables

Airport.prototype.capacity = function() {
  return this._capacity;
};

Airport.prototype.hangar = function() {
  return this._hangar;
};

Airport.prototype.changeCapacity = function(number) {
  this._capacity = number;
};

// The main public functions

Airport.prototype.land = function(plane) {
  this._checkWeather();
  this._checkCapacity();
  plane.land();
  this._hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this._checkWeather();
  const index = this._findPlane(plane);
  plane.takeOff();
  this._hangar.splice(index, 1);
};

// 'Private' functions

Airport.prototype._checkWeather = function() {
  if (this._weather.check() == 'bad') {
    throw new Error('Weather bad');
  }
};

Airport.prototype._checkCapacity = function() {
  if (this._hangar.length == this._capacity) {
    throw new Error('Airport at capacity');
  }
};

Airport.prototype._findPlane = function(plane) {
  var index = this._hangar.indexOf(plane)
  if (index == -1) {
    throw new Error('Plane not known to airport');
  } else {
    return index;
  }
};
