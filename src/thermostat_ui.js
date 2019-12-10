var thermostat = new Thermostat();

function setDisplay() {
    $( "#temperature-display" ).text(function() {
        return thermostat.temperature;
    });

    $( "#psm-display" ).text(function() {
        if(thermostat.powerSavingMode) return 'PSM On';
        return 'PSM Off';
    });
}

$( document ).ready(function() {
    setDisplay();

    $( "#up-btn" ).click(function( event ) {
        thermostat.up(1);
        setDisplay();
    });

    $( "#down-btn" ).click(function( event ) {
        thermostat.down(1);
        setDisplay();
    });

    $( "#psm-btn" ).click(function( event ) {
        thermostat.togglePowerMode();
        setDisplay();
    });

    $( "#reset-btn" ).click(function( event ) {
        thermostat.reset();
        setDisplay();
    });

});