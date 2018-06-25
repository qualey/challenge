console.log('JS');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#btnGenerate').on('click', handleClick);
}

function handleClick() {
    console.log('click!');
}

function addEventHandlers() {
    $('#btnGenerate').on('click', redDiv);
}

function redDiv() {
    $('#colorSwap').append('<div class="#color One"></div>');
}
