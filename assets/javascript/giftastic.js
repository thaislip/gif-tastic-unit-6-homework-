let buttons = ['Star Wars', 'The Matrix', 'The Dark Crystal','Pulp Fuction']
const api_key = 'OaIJAqeTeWEd8NXFbeXwn47vPvukP4ze';
const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=OaIJAqeTeWEd8NXFbeXwn47vPvukP4ze&limit=10';


function loadButtons(){
    const listButtons = JSON.parse(localStorage.getItem('buttons'));

    buttons = listButtons;
}

function renderButtons(){

    $('.recent-search').empty();

    for (let i = 0; i < buttons.length; i++){
        const buttonName = buttons[i];

        const button = `
        <div class="wrap-buttons">
            <button
             class="btn btn-search"
             data-name="${buttonName}"
             >${buttonName}</button>
            <button
                data-name="${buttonName}"
                data-index="${i}"
                class="btn btn-delete fas fa-skull-crossbones"
            ></button>
        </div>
        `;

        $('.recent-search').append(button);
    }

    localStorage.setItem('buttons', JSON.stringify(buttons));

}
loadButtons();
renderButtons();




function removeButton(){
    const buttonIndex = $(this).attr('data-index');

    buttons.splice(buttonIndex, 1);

    console.log('buttons', buttons)
    
    renderButtons();
  
    console.log('button-index', buttonIndex);
}

function addButton(value){
    buttons.push(value);

    renderButtons();
}

function renderGiphys(giphys){

    for (let i = 0; i < giphys.length; i ++){
        const giphy = giphys[i];

        const giphyTemplate =`
            
        `;
    }

}

function fetchGiphy(value){
    const url = endpoint + '&q=' + value;

    $.ajax({ url })
        .then(function(response){

            const giphys = response.data;

            renderGiphys();
            console.log('data', data)
        })
        .catch(function(error){
            console.log('error',error)
        });
}



function searchGiphy(event){
    event.preventDefault();

    const value = $('#search').val();
    addButton(value);
    fetchGiphy(value);
  
     console.log('value: ', value);
}

//events
$(document).on('click', '.btn-delete', removeButton);
$('#submit-button').on('click', searchGiphy);

