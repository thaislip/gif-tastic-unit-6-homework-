var movies = ["Star Wars","Aladdin","Saving Private Ryan","The Goonies","James Bond","Lord of The Rings"];

displayButtons();

function displayButtons() {

  $("#movieButtons").empty();

  for (var i = 0; i < movies.length; i++) {

    var button = $("<button>");
    button.addClass("movie");
    button.attr("data-name", movies[i]);
    button.text(movies[i]);
    $("#movieButtons").append(button);
  }
}
$("#add-movie").on("click", function(event){
  event.preventDefault();

  var movieName = $("#movie-input").val();

  movies.push(movieName);

  displayButtons();
})

$(document).on("click", ".movie", function() {
	$('#movies').empty();
	var movie = $(this).attr("data-name");
	console.log(this);
	var noSpace = movie.replace(" ", "_");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + noSpace + "&limit=10&api_key=OaIJAqeTeWEd8NXFbeXwn47vPvukP4ze";
	console.log(movie);
	console.log(noSpace);
	console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response) {
		for (var i = 0; i < 10; i++) {
			var rating = response.data[i].rating;
			var img = $("<img>");
				img.attr({
					'src': response.data[i].images.fixed_height_still.url,
					'data-name': 'still',
					'data-still': response.data[i].images.fixed_height_still.url,
					'data-animate': response.data[i].images.fixed_height.url,
					'width': 200,
					'height': 200
				});
		$('#movies').append(img);
		$('#movies').append("<br>Rated: " + rating + "<br><br>");
		}
	});
});

$(document).on("click", 'img', function(){
	if($(this).attr('data-name') === 'still') {
		$(this).attr('src', $(this).attr('data-animate'));
		$(this).attr('data-name', 'animate');
	}
	else {
		$(this).attr('src', $(this).attr('data-still'));
		$(this).attr('data-name', 'still');
	}
});