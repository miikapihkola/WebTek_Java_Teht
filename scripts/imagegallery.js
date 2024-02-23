window.onload = function () {
}

function toGrid() {
    if (document.getElementById('picCont').classList.contains('listCont')) {
        document.getElementById('picCont').classList.remove('listCont');
        document.getElementById('picCont').classList.add('gridCont');
    }
}

function toVert() {
    if (document.getElementById('picCont').classList.contains('gridCont')) {
        document.getElementById('picCont').classList.remove('gridCont');
        document.getElementById('picCont').classList.add('listCont');
    }
}