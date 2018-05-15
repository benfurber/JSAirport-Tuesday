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
