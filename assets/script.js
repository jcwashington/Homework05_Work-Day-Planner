$( document ).ready(function() {
    // Handler for .ready() called. https://api.jquery.com/ready/#ready-handler
    let today = moment().format('ll');;
    let displayToday = document.getElementById("currentDay");
    displayToday.innerHTML = today;
    // need to know what hour we are in immediately
    var currentHr = moment().format("HH");

    //grabs hour from each time slot and compares it to actual time
    $(".time-block").each(function () {
        var sectionHr = parseInt($(this).attr("id").split("hour")[1]);
        console.log(sectionHr);

        if (currentHr == sectionHr) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
        } else if (currentHr < sectionHr) {
        $(this).removeClass("present");
        $(this).addClass("future");
        } else if (currentHr > sectionHr) {
        $(this).removeClass("future");
        $(this).addClass("past")};
  });
});