var Thermostat = require('../src/thermostat.js');

describe("Thermostat", () => {
  var thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("has a default temperature of 20 degrees", () => {
    expect(thermostat.temperature).toEqual(20);
  });

  it("is by default in power saving mode", () => {
    expect(thermostat.powerSavingMode).toBeTruthy();
  });

  describe(".up", function() {

    it("should increase the temperature by 1", function() {
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it("shouldn't increase above 25 degrees with power saving mode on", () => {
      thermostat.temperature = 25;
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(25);
    });

    it("should increase above 25 degrees without power saving mode on", () => {
      thermostat.temperature = 25;
      thermostat.togglePowerMode();
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(26);
    });

    it("shouldn't increase above 32 degrees without power saving mode on", () => {
      thermostat.temperature = 32;
      thermostat.togglePowerMode();
      thermostat.up(1);
      expect(thermostat.temperature).toEqual(32);
    });

  });

  describe(".down", function() {

    it("should decrease the temperature by 1", function() {
      thermostat.down(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it("should not be able to decrease the temperature below 10 degrees", () => {
      thermostat.temperature = 10;
      thermostat.down(1);
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe(".reset", () => {
    it("should reset the temperature to 20", () => {
      thermostat.temperature = 24;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe(".energyUsage", () => {
    it("should return 'low-usage' if the temperature is below 18 degrees", () => {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it("should return medium usage if the temperature is 18.0 and 25.0 (not inclusive)", () => {
      thermostat.temperature = 18;
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it("should return medium usage if the temperature is 18.0 and 25.0 (not inclusive)", () => {
      thermostat.temperature = 24;
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it("should return high usage if the temperature is 25.0 or greater", () => {
      thermostat.temperature = 25;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });

  });

});
