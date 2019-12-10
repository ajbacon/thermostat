var Thermostat = require('../src/thermostat.js');

describe("Thermostat", () => {
  var thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("has a default temperature of 20 degrees", () => {
    expect(thermostat.temperature).toEqual(20);
  });
});
