describe("Airport", function() {
  var weather;
  var plane;
  var airport;
  const defaultCapacity = 97;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather', ['check']);
    plane = jasmine.createSpyObj('plane', ['takeOff', 'land']);
    airport = new Airport(weather);

    weather.check.and.returnValue('good');
  });

  it("On creation - the airport should have a default capacity of 97", function() {
    airport._capacity = defaultCapacity;
    expect(airport.capacity()).toEqual(defaultCapacity);
  });

  it("On creation - has an empty array of planes", function() {
    airport._hanger = [];
    expect(airport.hangar()).toEqual([]);
  });

  it("should be able to change the capacity", function() {
    airport._capacity = defaultCapacity;
    const newCapacity = 15
    airport.changeCapacity(newCapacity);
    expect(airport._capacity).toEqual(newCapacity);
  });

  it("Planes can't land if the weather is bad", function() {
    weather.check.and.returnValue('bad');
    expect(function() {
      airport.land(plane);
    }).toThrowError("Weather bad");
  });

  it("Planes can't land if airport at capacity", function() {
    airport._capacity = 0;
    expect(function() {
      airport.land(plane);
    }).toThrowError('Airport at capacity');
  });

  it("It stores a plane in the hangar when plane lands", function() {
    airport._hangar = [plane]
    expect(airport.hangar()).toContain(plane);
  });

  it("The plane is told to land when stored", function() {
    plane.takeOff();
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("Planes can't take off if weather is bad", function() {
    weather.check.and.returnValue('bad');
    expect(function() {
      airport.takeOff(plane);
    }).toThrowError("Weather bad");
  });

  it("It checks the plane is in the airport before trying to take it off", function() {
    var newPlane;
    expect(function() {
      airport.takeOff(newPlane);
    }).toThrowError("Plane not known to airport")
  });

  it("It releases a plane from the hangar when plane takes off", function() {
    plane.takeOff();
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hangar()).not.toContain(plane);
  });

  it("The plane is told to take-off when released", function() {
    airport._hangar = [plane];
    airport.takeOff(plane);
    expect(plane.takeOff).toHaveBeenCalled();
  });
});
