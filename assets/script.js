$( document ).ready(function() {
    // Handler for .ready() called. https://api.jquery.com/ready/#ready-handler
    let today = moment().format('ll');;
    let displayToday = document.getElementById("currentDay");
    displayToday.innerHTML = today;
    // need to know what hour we are in immediately
    var currentHr = moment().format("HH");

    // retreive tasks from localStorage and put them in the correct places
    $("#hour08 .description").val(localStorage.getItem("08"));
    $("#hour09 .description").val(localStorage.getItem("09"));
    $("#hour10 .description").val(localStorage.getItem("10"));
    $("#hour11 .description").val(localStorage.getItem("11"));
    $("#hour12 .description").val(localStorage.getItem("12"));
    $("#hour13 .description").val(localStorage.getItem("13"));
    $("#hour14 .description").val(localStorage.getItem("14"));
    $("#hour15 .description").val(localStorage.getItem("15"));
    $("#hour16 .description").val(localStorage.getItem("16"));
    $("#hour17 .description").val(localStorage.getItem("17"));
    $("#hour18 .description").val(localStorage.getItem("18"));

    //compares hour from each time slot and compares it currentHr to determine block color
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

    //save text input to localStorage https://api.jquery.com/click/
    //$( "#target" ).click(function() {
    //  alert( "Handler for .click() called." );
    //});
    
    $( ".saveBtn").click( function(event) {
        event.preventDefault(); // prevent the default refresh
        var taskText = $(this).siblings(".description").val();
        var taskTime = $(this).parent().attr("id").split("hour")[1];
        console.log(taskText, taskTime); 
        localStorage.setItem(taskTime, taskText);
    })


});