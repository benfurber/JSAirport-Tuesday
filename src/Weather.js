function Weather() {
  this._weatherConditions = ['good', 'good', 'good', 'good', 'good', 'bad']
};
Weather.prototype.check = function() {
  var random_number = Math.floor(Math.random() * this._weatherConditions.length);
  return this._weatherConditions[random_number];
};
