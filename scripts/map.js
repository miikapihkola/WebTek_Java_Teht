let address;
window.onload = function () {
    let frame = document.getElementById("mapFrame");
    frame.src = 'https://www.google.com/maps?q=' + 'Valtakatu 55' + 'Lappeenranta' + '&output=embed'
}
function search() {
    address1 = document.getElementById("addressField1").value.replace(" ", "");
    address2 = document.getElementById("addressField2").value;
    let frame = document.getElementById("mapFrame");
    frame.src = 'https://www.google.com/maps?q=' + address1 + address2 + '&output=embed';
    console.log("osoite kentässä: " + address);
}