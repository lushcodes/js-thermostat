'use strict'

describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();

  });

  describe('default state', () => {
    it('should start at 20 degrees', () => {
      expect(thermostat.returnsCurrentTemperature()).toEqual(20);
    });
  });

  describe('up', () => {
    it('increases current temperature by the amount input', () => {
      thermostat.up(5);
      expect(thermostat.returnsCurrentTemperature()).toEqual(25);
    });

    it('doesn\'t allow temperature to go over 25 if power saving is on', () => {
      expect(() => {thermostat.up(6)}).toThrowError('Power Saving On! Unable to exceed 25 degrees!');
    });

    it('doesn\'t allow temperature to go over 32 if power saving is off', () => {
      thermostat.changePowerSaving();
      expect(() => {thermostat.up(13)}).toThrowError('Power Saving Off! Unable to exceed 32 degrees!');
    });
  });

  describe('down', () => {
    it('decreases current temperature by the amount input', () => {
      thermostat.down(5);
      expect(thermostat.returnsCurrentTemperature()).toEqual(15);
    });

    it('throws error if asked to go below 10 degrees', () => {
      expect(() => {thermostat.down(30)}).toThrowError('Cannot be set below 10 degrees!');
    });
  });

  describe('isPowerSavingOn', () => {
    it('returns true if power saving is on', () => {
      expect(thermostat.isPowerSavingOn()).toEqual(true);
    });
  });

  describe('changePowerSaving', () => {
    it('changes whether the power saving mode is on or off', () => {
      thermostat.changePowerSaving();
      expect(thermostat.isPowerSavingOn()).toEqual(false);
      thermostat.changePowerSaving();
      expect(thermostat.isPowerSavingOn()).toEqual(true);
    });
  });

  describe('reset', () => {
    it('resets the temperature to 20', () => {
      thermostat.up(5);
      thermostat.reset();
      expect(thermostat.returnsCurrentTemperature()).toEqual(20);
    });
  });

  describe('currentPowerUsage', () => {
    it('should return medium power usage if between 18 and 25', () => {
      expect(thermostat.currentPowerUsage()).toEqual(thermostat.medium-usage);
    });
    it('should return high power usage if over 25', () => {
      thermostat.changePowerSaving();
      thermostat.up(9);
      expect(thermostat.currentPowerUsage()).toEqual(thermostat.high-usage);
    });
    it('should return low power usage if below 18', () => {
      thermostat.down(9);
      expect(thermostat.currentPowerUsage()).toEqual(thermostat.low-usage);
    });
  });
});

