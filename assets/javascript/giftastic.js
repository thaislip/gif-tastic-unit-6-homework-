let buttons = ['cats', 'dogs', 'lions'];


function loadButtons() {
    const listButtons = JSON.parse(localStorage.getItem('buttons'));

    buttons = listButtons;
}


function renderButtons() {

    $('.recent-search').empty();

    for (let i = 0; i < buttons.length; i++) {
        const buttonName = buttons[i];

        const button = `
        <div class="wrap-buttons">
        <button class = "btn btn-search" data-name="${buttonName}">${buttonName}</button>
        <button data-name="${buttonName}"data-index="${i}" class="btn btn-delete fas fa-skull"></button>
        </div>`;

        $('.recent-search').append(button);
    }

    localStorage.setItem('buttons', JSON.stringify(buttons));
}

loadButtons();
renderButtons();

function removeButton(){
    const buttonIndex = $(this).attr('data-index');

    buttons.splice(buttonIndex, 1);

    console.log('buttons: ',buttons);

    renderButtons();

    console.log('Button Index:', buttonIndex);
}

function addButton(value){
    buttons.push(value);

    renderButtons();
}

function searchGiphy(event){
    event.preventDefault();

    const value = $('#search').val();
    addButton(value);

    console.log('vaule: ', value);
};

$(document).on('click', '.btn-delete', removeButton);

$('#submit-button').on('click', searchGiphy);