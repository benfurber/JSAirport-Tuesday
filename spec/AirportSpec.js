describe("Airport", function() {
  var airport;
  const defaultCapacity = 97;


  beforeEach(function() {
    airport = new Airport();
  });

  it("On creation - the airport should have a default capacity of 97", function() {
    expect(airport.capacity()).toEqual(defaultCapacity);
  });

  it("On creation - has an empty array of planes", function() {
    expect(airport.hangar()).toEqual([]);
  })

  it("It stores a plane in the hangar when plane lands", function() {
    plane = new Plane();
    plane.takeOff();
    airport.land(plane);
    expect(airport.hangar()).toContain(plane);
  });

  it("It raises an error if plane is not in the air", function() {
    plane = new Plane();
      expect(function() {
        airport.land(plane);
      }).toThrowError("Plane already landed")
  });

  it("It releases a plane from the hangar when plane takes off", function() {
    plane = new Plane();
    plane.takeOff();
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hangar()).not.toContain(plane);
  });
});


//create plane, fly plane, airport - request plane to land, airport expect hangar contin plane
