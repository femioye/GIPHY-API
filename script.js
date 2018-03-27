"use strict";


    $( document ).ready(function() {

    var shows = ["Dear White People", "Master of None", "Stranger Things", " Unbreakable Kimmy Schmidt", "The Good Place"];
    function displayTVShow() { $("#gifs-display").empty();
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${show}&limit=${limit}&lang=en`;
    var show = $(this).attr("data-name");
    show=show.replace(/ /g,"_");
    var apiKey = "dc6zaTOxFJmzC"; 
    var limit = 12;
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) { for (var i = 0; i <=response.data.length;i++) {
        var src = JSON.stringify(response.data[i].images.fixed_height_downsampled.url);
        $("#gifs-display").append(`<img src=${src}>`);
     };
       renderButtons();   
    });
  }

      function renderButtons() { $("#gifs-view").empty();
          for (var i = 0; i < shows.length; i++) {
          var a = $("<button>");
          a.addClass("show");
          a.attr("data-name", shows[i]);
          a.text(shows[i]);
          $("#gifs-view").append(a);  
        }
      }

      $("#add-show").on("click", function(event) { event.preventDefault();
        var show = $("#show-input").val().trim(); 
        shows.push(show); 
        renderButtons(); 
      });
    
     $(document).on("click", ".show", displayTVShow);
     $("#clear").on("click",function(event2){
        event2.preventDefault();
        $("#gifs-display").empty();
    })
       renderButtons(); 
    });