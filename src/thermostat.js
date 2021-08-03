'use strict'

class Thermostat {

  constructor() {

    this.currentTemperature = 20;
    this.powerSave = true;

  };

  returnsCurrentTemperature() {
    return this.currentTemperature;
  };

  reset() {
    this.currentTemperature = 20;
  }

  up(amount) {
    if ((this.currentTemperature + amount > 25) && (this.powerSave === true)) {
      throw new Error('Power Saving On! Unable to exceed 25 degrees!');
    } else if ((this.currentTemperature + amount > 32) && (this.powerSave === false)) {
      throw new Error('Power Saving Off! Unable to exceed 32 degrees!');
    } else {
      return this.currentTemperature += amount;
    };
  };

  down(amount) {
    if((this.currentTemperature - amount) <= 10) {
      throw new Error('Cannot be set below 10 degrees!');
    } else {
    return this.currentTemperature -= amount;
    };
  };

  isPowerSavingOn() {
    return this.powerSave;
  };

  changePowerSaving() {
    if (this.powerSave === true) {
      return this.powerSave = false;
    } else { 
      return this.powerSave = true;
    };
  };
};

console.log(new Thermostat());