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
});
