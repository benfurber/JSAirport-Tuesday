describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("should return 'good' when the weather is fine", function() {
    weather._weatherConditions = ['good'];
    expect(weather.check()).toEqual('good');
  });

  it("should return 'bad' when the weather is not fine", function() {
    weather._weatherConditions = ['bad'];
    expect(weather.check()).toEqual('bad');
  });
})
