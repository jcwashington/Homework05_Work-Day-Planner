$( document ).ready(function() {
    // Handler for .ready() called.
    let today = moment().format("MMM Do YY");
    let displayToday = document.getElementById("currentDay");
    displayToday.innerHTML = today;
    // need to know what hour we are in immediately
    currentHr = moment().format("HH");
  });