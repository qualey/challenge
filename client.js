$(document).ready(readyNow);

function readyNow(){
    $('#btnGenerate').on('click', generateDiv);
    $(document).on('click', '.deleteBtn', deleteDiv);
    $(document).on('click', '.swapBtn', swapColors);
}

let numClicks = 0;

function generateDiv() {
    numClicks++;
    // console.log('In generateDiv');
    // console.log('In Delete');
    // console.log('In Swap');
    let div = $('#main');
    let output = '<div class="red">';
        output += '<p>' + numClicks + '</p>';
        output += '<button class="swapBtn">Swap</button>';
        output += '<button class="deleteBtn">Delete</button>';
    output += '</div>';
    div.append(output);
}

function deleteDiv() {
    // console.log('In deleteDiv', $(this).parent());
    $(this).parent().remove();
    
}

function swapColors() {
    // console.log('In swapColors', $(this).parent());
    $(this).parent().toggleClass('yellow');
}