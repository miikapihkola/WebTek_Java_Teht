let counter = 0;

window.onload = function () {
    document.getElementById('hide').style.visibility = "hidden";
    document.getElementById('accordionFlushExample').style.visibility = "hidden";
    updateCounter();
}

function getJoke() {
    counter++;
    document.getElementById('hide').style.visibility = "visible"
    $.getJSON("https://api.chucknorris.io/jokes/random", function (response) {
        document.getElementById('hide').style.visibility = "hidden";
        document.getElementById('jokeList').innerHTML = response.value + "<br>";
        addAccordion(response.value);
    })
    updateCounter();
}

function updateCounter() {
    document.getElementById('jokeCounter').innerHTML = "Number of Jokes generated = " + counter;
}

function addAccordion(response) {
    if (counter == 1) { document.getElementById('accordionFlushExample').style.visibility = "visible"; }
    itemId = "flush-collapse" + counter;
    itemName = counter + ". Joke";
    document.getElementById('accordionFlushExample').innerHTML =
        '<div class="accordion-item">' +
        '<h2 class="accordion-header">' +
        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"' +
        'data-bs-target="#' + itemId + '" aria-expanded="false" aria-controls="' + itemId + '">' +
        itemName +
        '</button>' +
        '</h2>' +
        '<div id="' + itemId + '" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">' +
        '<div class="accordion-body accColor">' +
        response +
        '</div>' +
        '</div>' +
        '</div>' +
        document.getElementById('accordionFlushExample').innerHTML;
}