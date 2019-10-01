$(document).ready(function(){

var $input = $('#input');
var $submit = $('#submit');
var apiKey = 'OaIJAqeTeWEd8NXFbeXwn47vPvukP4ze';
var $imgBody = $('.img-body');

$submit.on('click', function (event) {
    event.preventDefault();
    $imgBody.empty();
    var inputVal = $input.val();
    getGiphys(inputVal);
    $input.val('');
});

function getGiphys(inputVal){
    $.get('http://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key=' + apiKey + '&limit=10')
        .done(function(data){
            for (var i = 0; i < 10; i++) {
                var gifImg = data.data[i].images.downsized.url;
                createBox(gifImg);
            }
            
        });
};

function createBox(gifImg){
    var $newImg = $('<img>');
        $newImg.attr('src', gifImg);
        $newImg.addClass('image-box');


    $imgBody.append($newImg);
}


});