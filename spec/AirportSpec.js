describe("Airport", function() {
  var airport;
  var plane = jasmine.createSpyObj('plane', ['takeOff', 'land'])
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
    plane.takeOff();
    airport.land(plane);
    expect(airport.hangar()).toContain(plane);
  });

  it("The plane is told to land when stored", function() {
    plane.takeOff();
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("It releases a plane from the hangar when plane takes off", function() {
    plane.takeOff();
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hangar()).not.toContain(plane);
  });

  it("The plane is told to take-off when released", function() {
    plane.takeOff();
    airport.land(plane);
    airport.takeOff(plane);
    expect(plane.takeOff).toHaveBeenCalled();
  })

});
