//app starting function
$(document).ready(function() {
    
    //array of starting animals/topics
    var topics = ["panda", "platypus", "armadillo", "fox", "snake", "wolf", "rabbit", "newt", "vulture", "tiger", "shark", "narwhal", "zebra", "bear", "frog", "giraffe", "crab", "rhino", "octopus", "worm", "elephant", "raccoon", "shrimp", "turtle", "kangaroo", "sloth", "bat", "squid", "eagle"];

    //function for displaying buttons
    function renderButtons() {
            
        //no repeat buttons? except you can add twice?
        $("#animalBtns").empty();

        //loop though array 
        for (var i = 0; i < topics.length; i++) {
            //generate a button for each string in the array
            var a = $("<button>");
            //putting those buttons in a like class
            a.addClass("animal");
            //data-attributing those buttons with the values
            //(names) of the strings
            a.attr("data-name", topics[i]);
            //showing that data as text
            a.text(topics[i]);
            //appending the buttons to the html
            $("#animalBtns").append(a);
        }
    }
    //function for making the user input a new button
    //when the "Add an Animal" button is clicked
    $("#add-animal").on("click", function(event) {
            
        //prevent form from trying to submit itself
        //What does that mean?
        event.preventDefault();

        //grabbing text/value from user input w/o white space
        var animal = $("#animal-input").val().trim();
        //adding user input animal to "topics" array
        topics.push(animal);
        //calling the renderButtons function to the values
        //of the input from th #add-animal function
        renderButtons();
    })
    //calling the renderButtons function
    renderButtons();
    //function for when #animalBtns is clicked
    $("#animalBtns").on("click", function() {
            
        var animal = $(this).attr("data-name");
        //applying giphy api url for gifs
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
        topics + "&api_key=8fp1EMhNlTwFaFF9929IkX56PesgsDOf&rating&limit=10";

        //preforming ajax get request from the api
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            //function to deal with response from api
            .then(function(response) {

                console.log(queryURL);
                console.log(response);
                    
                //storing the data from the ajax get request
                //into a new variable
                var results = response.data;
                //looping through the results(or for each button?)
                for (let i = 0; i < results.length; i++) {
                    //creating a div tag for those gifs
                    var gifDiv = $("<div>");
                    //creating a p tag with the responses results of the gifs 
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    //creating an image tag for the gifs to show up
                    var gifImage = $("<img>");
                    //seting an attribute for those images from the results
                    gifImage.attr("src", results[i].images.fixed_height.url);
                    //appending the images and paragraph tags to the gifDiv
                    gifDiv.append(p);
                    gifDiv.append(gifImage);
                    //prepending the gifDiv to the html page in the gifs div
                    $("#gifs").prepend(gifDiv);
                }
       });
    //    //function for pausing gifs
    //    $("gifDiv").on("click", function() {
    //        //allowing me to set the value of any attribute 
    //        var state = $(this).attr("data-state");
    //        //if statement for pausin the gif whan clicked
    //         if (state === "still") {
    //             //when the gif is shown on the page, it is already playing   
    //             $(this).attr("src", $(this).attr("data-animate"));
    //             $(this).attr("data-state", "animate");
    //         //when it is clicked the gif pauses
    //         } else {
    //            $(this).attr("src", $(this).attr("data-still"));
    //            $(this).attr("data-state", "still");           
    //         }
    //    });
    });
});