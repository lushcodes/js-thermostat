'use strict'

document.addEventListener("DOMContentLoaded", () => {

  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.currentTemperature;
    document.querySelector('#power-usage').className = thermostat.currentPowerUsage();
    const power = document.querySelector('h3');
    };


  const thermostat = new Thermostat();
  updateTemperature();
  
  document.querySelector('#up').addEventListener('click', () => { 
    thermostat.up(1);
    updateTemperature();
  })

  document.querySelector('#down').addEventListener('click', () => {
    thermostat.down(1);
    updateTemperature();
  });

  document.querySelector('#reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector('#reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  const checkbox = document.querySelector('#psm');
  const power = document.querySelector('h3'); 
  checkbox.checked = true;
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      thermostat.changePowerSaving();
      power.innerText = 'Power Saving On'
    } else {
      thermostat.changePowerSaving();
      power.innerText = 'Power Saving Off'    
    };
  });

  


});