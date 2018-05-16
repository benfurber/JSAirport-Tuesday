function Weather() {
  this._weatherConditions = ['good', 'good', 'good', 'good', 'good', 'bad']
};
Weather.prototype.check = function() {
  return this._weatherConditions[Math.floor(Math.random() * this._weatherConditions.length)];
};
