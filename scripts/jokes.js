let counter = 0;

window.onload = function () {
    document.getElementById('hide').style.visibility = "hidden";
    updateCounter();
}

function getJoke() {
    document.getElementById('hide').style.visibility = "visible"
    $.getJSON("https://api.chucknorris.io/jokes/random", function (response) {
        document.getElementById('hide').style.visibility = "hidden";
        document.getElementById('jokeList').innerHTML = response.value + "<br>";
    })
    updateCounter();
}

function updateCounter() {
    document.getElementById('jokeCounter').innerHTML = "Number of Jokes generated = " + counter++;
}