'use strict'

document.addEventListener("DOMContentLoaded", () => {

  // HOW TO GET API AND USE PROMISES 
  
  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
  
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      })
  }

  displayWeather('London');

  document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;
  
    displayWeather(city);
  })

  // ABOVE CODE GETS WEATHER BY CITY





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