'use strict'

class Thermostat {

  constructor() {

    this.currentTemperature = 20;
    this.powerSave = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;

  };

  returnsCurrentTemperature() {
    return this.currentTemperature;
  };

  reset() {
    this.currentTemperature = 20;
  }

  up(amount) {
    if ((this.currentTemperature + amount > this.MAX_LIMIT_PSM_ON) && (this.powerSave === true)) {
      throw new Error('Power Saving On! Unable to exceed 25 degrees!');
    } else if ((this.currentTemperature + amount > this.MAX_LIMIT_PSM_OFF) && (this.powerSave === false)) {
      throw new Error('Power Saving Off! Unable to exceed 32 degrees!');
    } else {
      return this.currentTemperature += amount;
    };
  };

  down(amount) {
    if((this.currentTemperature - amount) <= this.MINIMUM_TEMPERATURE) {
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
      console.log('OFF');
      return this.powerSave = false;
    } else { 
      console.log('ON');
      return this.powerSave = true;
  
    };
  };

  currentPowerUsage() {
    if(this.currentTemperature < 18) {
      return 'low-usage';
    } else if(this.currentTemperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };
};

console.log(new Thermostat());