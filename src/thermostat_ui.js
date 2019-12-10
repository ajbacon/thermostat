var thermostat = new Thermostat();

function setDisplay() {
  $("#temperature-display").text(thermostat.temperature);
  $('#temperature-display').attr('class', thermostat.energyUsage());

  $("#psm-display").text(function() {
    if(thermostat.powerSavingMode) return 'PSM On';
    return 'PSM Off';
  });
}

$(document).ready(function() {
  setDisplay();

  $("#up-btn").click(function(event) {
    thermostat.up(1);
    setDisplay();
  });

  $("#down-btn").click(function(event) {
    thermostat.down(1);
    setDisplay();
  });

  $("#psm-btn").click(function(event) {
    thermostat.togglePowerMode();
    setDisplay();
  });

  $("#reset-btn").click(function(event) {
    thermostat.reset();
    setDisplay();
  });

  $.getJSON("https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=7dca333c2a0290c11d8c820868e8f829", function(data) {
    var items = [];
    items.push("<li>" + data["list"][0]["weather"][0]["description"] + "</li>");
    items.push("<li>" + JSON.stringify(data) + "</li>");

    $("<ul/>", {
      html: items.join("")
    }).appendTo("body");
  });

});
