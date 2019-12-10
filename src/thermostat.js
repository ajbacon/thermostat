function Thermostat() {
  this.default_temperature = 20;
  this.temperature = this.default_temperature;
}

Thermostat.prototype.up = function(amount) {
  this.temperature += amount;
}

Thermostat.prototype.down = function(amount) {
  this.temperature -= amount;
}

module.exports = Thermostat
