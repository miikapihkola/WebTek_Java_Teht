let index = 0;
let playing = false;
let playInterval;

window.onload = function () {
    if (localStorage.hasOwnProperty('index')) {
        index = localStorage.getItem('index');
    }
    updateInfo();
    play();
}

function prev() {
    index = validIndex(--index);
    updateInfo();
    localStorage.setItem('index', index);
}

function next() {
    index = validIndex(++index);
    updateInfo();
    localStorage.setItem('index', index);

}

function play() {
    if (playing) {
        playing = false;
        document.getElementById('playbtn').className = "bi bi-play-circle-fill";
        window.clearInterval(playInterval)
    }
    else {
        playing = true;
        document.getElementById('playbtn').className = "bi bi-pause-circle-fill";
        playInterval = window.setInterval(next, 3000)
    }
}

function updateInfo() {
    console.log(pics_array[index].src);
    document.getElementById('picId').src = pics_array[index].src;
    document.getElementById('picId').alt = pics_array[index].info;
    document.getElementById('infobox').innerHTML = pics_array[index].info;
}

function validIndex(int = index) {
    if (index >= pics_array.length) {
        index = 0;
    }
    else if (index < 0) {
        index = pics_array.length - 1;
    }
    return index;
}

let pics_array = [
    {
        'info': 'Merirosvo',
        'src': 'images/Merirosvo.png'
    },
    {
        'info': 'Arktinen',
        'src': 'images/Arktinen.png'
    },
    {
        'info': 'Fullmoon',
        'src': 'images/Fullmoon.png'
    }
]
/*
{
    'info': '',
    'src': ''
},
*/