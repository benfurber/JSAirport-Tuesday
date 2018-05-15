describe("Plane", function () {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("On creation - plane is not flying (you can't make a plane in the air, duh)", function() {
    expect(plane.isFlying()).toEqual(false);
  });

  it("Should be able to fly", function() {
    plane.takeOff();
    expect(plane.isFlying()).toEqual(true);
  });

  it("Should return an error if already flying", function() {
    plane.takeOff();
    expect(function() {
      plane.takeOff();
    }).toThrowError("Plane already in the sky")
  });

  it("Should be able to land", function(){
    plane.takeOff();
    plane.land();
    expect(plane.isFlying()).toEqual(false);
  });

  it("Should return an error if already not in the air", function() {
    expect(function() {
      plane.land();
    }).toThrowError("Plane already landed")
  });

})
