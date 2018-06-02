//array of starting animals
var animals = ["panda", "platypus", "armadillo", "fox", "snake", "wolf", "rabbit", "newt", "vulture", "tiger", "shark", "narwhal", "zebra", "bear", "frog", "giraffe", "crab", "rhino", "octopus", "worm", "elephant", "raccoon", "shrimp", "turtle", "kangaroo", "sloth", "bat", "squid", "eagle"];

//function for displaying buttons
function renderButtons() {
    
    //no repeat buttons
    $("#animalBtns").empty();

    //loop though array 
    for (var i = 0; i < animals.length; i++) {
        //generate a button for each string in the array
        var a = $("<button>");
        //putting those buttons in a like class
        a.addClass("animal");
        //data-attributing those buttons with the values
        //(names) of the strings
        a.attr("data-name", animals[i]);
        //showing that data as text
        a.text(animals[i]);
        //appending the buttons to the DOM?
        $("#animalBtns").append(a);
    }
}
//calling the renderButtons function
renderButtons();
