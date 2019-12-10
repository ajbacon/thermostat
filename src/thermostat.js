const DEFAULT_TEMPERATURE = 20;
const POWER_SAVING_MAX = 25;
const MAX_TEMPERATURE = 32;
const MIN_TEMPERATURE = 10;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.maxTemperature = POWER_SAVING_MAX;
}

Thermostat.prototype.up = function(amount) {
  this.temperature += amount;
  if(this.temperature > this.maxTemperature) this.temperature = this.maxTemperature;
}

Thermostat.prototype.down = function(amount) {
  this.temperature -= amount;
  if(this.temperature < MIN_TEMPERATURE) this.temperature = MIN_TEMPERATURE;
}

Thermostat.prototype.togglePowerMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
  if(this.powerSavingMode) this.maxTemperature = POWER_SAVING_MAX;
  else this.maxTemperature = MAX_TEMPERATURE;
}

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Thermostat
}
