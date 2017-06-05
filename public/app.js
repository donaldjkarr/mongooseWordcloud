$(document).ready(function() {


    function renderCloud() {
        //create cloud using showcloud class
    }

    function renderButton() {
        var newText = $("#input").val().trim();
        var a = $("<button>");
        a.addClass("btn btn-success btn-lg showcloud");
        a.attr("data-cloud");
        a.text(newText);

        $(".appendbutton").append(a);

        console.log(newText);
    }


    $("#addbutton").on("click", function(event) {
        event.preventDefault();
        renderButton();
    });

    $(document).on("click", ".showcloud", function() {
        alert("message");
        renderCloud(); 
    });

});