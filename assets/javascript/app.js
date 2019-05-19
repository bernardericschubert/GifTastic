// Homework 6 Giphy API

var apiKey = "gxiyaUEkAbGhEQDAlA7YWdIKuSnWBhvD"
var limit = 10;
var heroes = ["Spider-Man", "Batman", "Captain America", "Iron Man", "Wonder Woman"];

$(document).ready(function() {

// Create default buttons
function defaultButtons(){ 
	$("#hero-buttons").empty();
	for (var i = 0; i < heroes.length; i++){
        var button = $("<button>")
        .attr({"class": "btn btn-secondary mr-3 mb-3", "dataTopic": heroes[i], "btnState": "inactive"})
		button.text(heroes[i]);
		$('#hero-buttons').append(button);
	}
}

defaultButtons();

// CLick event for adding a new hero
$("#submit-button").on("click", function(){
	var hero = $("#hero-input").val().trim();
    heroes.push(hero);
    defaultButtons();
    $("#hero-input").val('');
    return false;
})

});