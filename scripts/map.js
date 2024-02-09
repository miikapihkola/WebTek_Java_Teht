let address;
window.onload = function () {
    let frame = document.getElementById("mapFrame");
    frame.src = 'https://www.google.com/maps?q=' + 'Valtakatu 55' + 'Lappeenranta' + '&output=embed'
}
function search() {
    address = document.getElementById("addressField").value;
    let frame = document.getElementById("mapFrame");
    frame.src = 'https://www.google.com/maps?q=' + address + '&output=embed';
    console.log("osoite kentässä: " + address);
}