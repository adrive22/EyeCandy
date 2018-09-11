$(document).ready(function() {



    var visuals=["geometry","illustration","morph","psychedelic","photography","pixel"];
    
    function displayButtons(){
    $(".buttons-view").empty();
    for (var i=0;i < visuals.length;i++){
                var a = $("<button>");
                a.addClass("visuals-btn ui inverted grey button");
                a.attr("data-name", visuals[i]);
                a.text(visuals[i]);
                $(".buttons-view").append(a);
            }
    
    
    
    
        $(".visuals-btn").on("click",function(){
            var element = $(this).attr("data-name");
            console.log(element);
            $(".visualGifs").empty();
              var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=CXhjyrWbdlyW0yK15huu9Hcd54cSaZK5&q=" + element +"&limit=12&offset=0&rating=G&lang=en";
    
             $.ajax({
             url:queryURL,
             method: "GET"
             }).then(function(response){
             console.log(response);
             var results=response.data;
             for(var i = 0; i < results.length; i++){
                 var visualDiv = $("<div>");
                 var visualImage = $("<img class='ui medium rounded image'>");
                 visualImage.attr("src", results[i].images.original_still.url);
                 visualImage.attr("data-still", results[i].images.original_still.url);
                 visualImage.attr("data-animate", results[i].images.original.url);
                 visualImage.attr("data-state", "still");
                 visualDiv.append(visualImage);
                 $(".visualGifs").prepend(visualDiv);
                 $(".gifText").show();
    
             }
    
             $(".visualGifs img").on("click",function(){
             var state = $(this).attr("data-state");
             console.log(state);
             if(state==="still"){
                 $(this).attr("src", $(this).attr("data-animate"));
                 $(this).attr("data-state","animate");
                
                 }else {
                $(this).attr("src", $(this).attr("data-still"));
                   $(this).attr("data-state", "still");
               }
               })
    
             
    
          
          })
        })
    }
    
         displayButtons();
         
    
         
    
       
    
    
var addedBtns = [];

function displayAddedButtons(){
    
    $(".added-buttons-view").empty();
    for (var i=0;i < addedBtns.length;i++){
                var a = $("<button>");
                a.addClass("added-visuals-btn ui inverted grey button");
                a.attr("data-name", addedBtns[i]);
                a.text(addedBtns[i]);
                $(".added-buttons-view").append(a);
            }
    
    
    
    
        $(".added-visuals-btn").on("click",function(){
            var element = $(this).attr("data-name");
            console.log(element);
            $(".visualGifs").empty();
              var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=CXhjyrWbdlyW0yK15huu9Hcd54cSaZK5&q=" + element +"&limit=12&offset=0&rating=G&lang=en";
    
             $.ajax({
             url:queryURL,
             method: "GET"
             }).then(function(response){
             console.log(response);
             var results=response.data;
             for(var i = 0; i < results.length; i++){
                 var visualDiv = $("<div>");
                 var visualImage = $("<img class='ui medium rounded image'>");
                 visualImage.attr("src", results[i].images.original_still.url);
                 visualImage.attr("data-still", results[i].images.original_still.url);
                 visualImage.attr("data-animate", results[i].images.original.url);
                 visualImage.attr("data-state", "still");
                 visualDiv.append(visualImage);
                 $(".visualGifs").prepend(visualDiv);
                 $(".gifText").show();
             }
    
             $(".visualGifs img").on("click",function(){
                 
             var state = $(this).attr("data-state");
             console.log(state);
             if(state==="still"){
                 $(this).attr("src", $(this).attr("data-animate"));
                 $(this).attr("data-state","animate");
                
                 }else {
                $(this).attr("src", $(this).attr("data-still"));
                   $(this).attr("data-state", "still");
               }
               })

            
          
          })
        })
    }
    
         displayAddedButtons();
         
    
         
    
        $(".searchBtn").on("click", function(event){
            event.preventDefault();
            var newArt = $(".searchBox").val();
            console.log(newArt);
            addedBtns.push(newArt);
            console.log(visuals);
            displayAddedButtons();
            

         })

         
         
         
    })
    