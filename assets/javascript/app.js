// Homework 6 Giphy API

var apiKey = "&api_key=gxiyaUEkAbGhEQDAlA7YWdIKuSnWBhvD"
var limit = 10;
var heroes = ["Spider-Man", "Batman", "Captain America", "Iron Man", "Wonder Woman"];

$(document).ready(function() {

    // Create default buttons
    function defaultButtons() { 
        $("#hero-buttons").empty();
        for (var i = 0; i < heroes.length; i++) {
            var button = $("<button>")
            .attr( {
                "class": "btn btn-secondary mr-3 mb-3 hero", 
                "query-value": heroes[i] })
            button.text(heroes[i]);
            $('#hero-buttons').append(button);
        }
    }

    // Create starting buttons
    defaultButtons();

    // Click event for adding a new hero, couldn't figure out how to submit with Enter press in addition to click
    $("#submit-button").on("click", function() {
        var hero = $("#hero-input").val().trim();
        heroes.push(hero);
        defaultButtons();
        $("#hero-input").val('');
    })

    // Query the API, add Attributes to the images
    function queryAPI() {
        var hero = $(this).attr("query-value");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hero + "&limit=" + limit + apiKey;
        
            $.ajax({
                url: queryURL, 
                method: "GET"
            }).then(function (response) {
                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var gif = $("<img>")
                        .attr({
                            "src": results[i].images.fixed_height_small_still.url,
                            "data-still": results[i].images.fixed_height_small_still.url,
                            "data-state": "still",
                            "data-animate": results[i].images.original.url});
                        gif.addClass("mb-3 mr-3 hero-img");
                    $("#hero-display").append(gif);
                }
            });
    }

    // Display Gifs when clicked
    $(document).on("click", ".hero", queryAPI);

    // Animate those Gifs!
    $(document).on("click", ".hero-img", function() {
        var state = $(this).attr("data-state");
            if (state == "still") {
                $(this).attr("src", $(this).data("animate"));
                $(this).attr("data-state", "animate");
            }
            else {
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
            };
    });

    // Clear images
    $("#clear-button").on("click", function() {
        $("#hero-display").empty();
    })

});