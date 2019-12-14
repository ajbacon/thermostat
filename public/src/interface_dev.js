var thermostat = new Thermostat();

function setDisplay() {
  $("#temperature-display").text(thermostat.temperature);
  $('#temperature-display').attr('class', thermostat.energyUsage());

  if(thermostat.powerSavingMode) {
    $('#leaf2').css("visibility","visible");
  } else {
    $('#leaf2').css("visibility","hidden");
  }

  // $("#psm-display").text(function() {
  //   if(thermostat.powerSavingMode) return 'PSM On';
  //   return 'PSM Off';
  // });
}

function postData() {
  $.ajax({
    type: 'POST',
    url: '/temperature',
    data: {temp: thermostat.temperature, psm: thermostat.powerSavingMode},
    dataType: 'json',
    success: function(data){
    },
    error: function(){
      alert('Error');
    }
  });
}

$(document).ready(function() {

  // $.ajax({
  //   type: 'GET',
  //   url: '/temperature',
  //   success: function(response){
  //     obj = JSON.parse(response)
  //     // console.log(obj.temp);
  //     // console.log(obj.psm)
  //     thermostat.temperature = obj.temp;
  //     while (thermostat.powerSavingMode != JSON.parse(obj.psm)) {
  //       thermostat.togglePowerMode()
  //     }
  //     setDisplay();

  //   },
  //   error: function(){
  //     alert('Error');
  //   }
  // });

  setDisplay()

  $("#up-btn").click(function(event) {
    thermostat.up(1);
    setDisplay();
    // postData();
  });

  $("#down-btn").click(function(event) {
    thermostat.down(1);
    setDisplay();
    // postData();
  });

  $("#psm-btn").click(function(event) {
    thermostat.togglePowerMode();
    setDisplay();
    // postData();
  });

  $("#reset-btn").click(function(event) {
    thermostat.reset();
    setDisplay();
    // postData();
  });

  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&appid=7dca333c2a0290c11d8c820868e8f829", function(data) {
    var items = [];
    $( '#temp' ).text("Outside: " + (data.main.temp - 273.15).toFixed(0) + "°C, " + data.weather[0].description) 
  });

});
