var thermostat = new Thermostat();

function setDisplay() {
  $("#temperature-display").text(thermostat.temperature);
  $('#temperature-display').attr('class', thermostat.energyUsage());

  $("#psm-display").text(function() {
    if(thermostat.powerSavingMode) return 'PSM On';
    return 'PSM Off';
  });
}

function postData() {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:4567/temperature',
    data: {temp: thermostat.temperature},
    dataType: 'json',
    success: function(data){
    },
    error: function(){
      alert('Error');
    }
  });
}

$(document).ready(function() {

  $.ajax({
    type: 'GET',
    url: 'http://localhost:4567/temperature',
    success: function(response){
      obj = JSON.parse(response)
      console.log(obj.temp);
      thermostat.temperature = obj.temp
      setDisplay();

    },
    error: function(){
      alert('Error');
    }
  });

  $("#up-btn").click(function(event) {
    thermostat.up(1);
    setDisplay();
    postData();
  });

  $("#down-btn").click(function(event) {
    thermostat.down(1);
    setDisplay();
    postData();
  });

  $("#psm-btn").click(function(event) {
    thermostat.togglePowerMode();
    setDisplay();
  });

  $("#reset-btn").click(function(event) {
    thermostat.reset();
    setDisplay();
    postData();
  });


  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&appid=7dca333c2a0290c11d8c820868e8f829", function(data) {
    var items = [];

    $( '#temp' ).text("Weather (" + data.name + "): " + (data.main.temp - 273.15).toFixed(0) + "degC, " + data.weather[0].description) 

    // items.push("<li>" + data["list"][0]["weather"][0]["description"] + "</li>");
    // items.push("<li>" + JSON.stringify(data) + "</li>");

    // $("<ul/>", {
    //   html: items.join("")
    // }).appendTo("body");
  });

});
