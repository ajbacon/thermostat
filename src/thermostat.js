function Thermostat() {
  this.default_temperature = 20;
  this.temperature = this.default_temperature;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function(amount) {
  this.temperature += amount;
}

Thermostat.prototype.down = function(amount) {
  this.temperature -= amount;
  if(this.temperature < 10) this.temperature = 10;
}

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Thermostat
}
