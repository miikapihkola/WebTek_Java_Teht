window.onload = function () {
    document.getElementById('Field1').value = 1;
    update();
}

$(window).resize(function () {
    if (window.innerWidth <= 900)
        document.getElementById('picCont').className = 'gridList';
    else
        document.getElementById('picCont').className = 'gridCont';
});

function f1neg() {
    Field1 = parseInt(document.getElementById('Field1').value) - 1;
    if (Field1 < 1) { Field1 = 1; }
    document.getElementById('Field1').value = Field1;
    update();
}
function f1pos() {
    Field1 = parseInt(document.getElementById('Field1').value) + 1;
    if (Field1 > 10) { Field1 = 10; }
    document.getElementById('Field1').value = Field1;
    update();
}
/* id list:
pizza; 1 = tropi, 2 = perf, 3 = peppe
valkosipuli
oregano
aurajuusto
kanta
Field1 = määrä
Field2 = hinta output
*/
function valkosipulif() {
    if (document.getElementById('valkosipuli').value == 0) document.getElementById('valkosipuli').value = 1;
    else document.getElementById('valkosipuli').value = 0;
    update();
}
function oreganof() {
    if (document.getElementById('oregano').value == 0) document.getElementById('oregano').value = 1;
    else document.getElementById('oregano').value = 0;
    update();
}
function aurajuustof() {
    if (document.getElementById('aurajuusto').value == 0) document.getElementById('aurajuusto').value = 1;
    else document.getElementById('aurajuusto').value = 0;
    update();
}
let kanta = false;
function kantaf() {
    if (!kanta) kanta = true;
    else kanta = false;
    update();
}
function update() {
    pizza = document.getElementById('pizza').value;
    valkosipuli = document.getElementById('valkosipuli').value;
    oregano = document.getElementById('oregano').value;
    aurajuusto = document.getElementById('aurajuusto').value;
    maara = parseInt(document.getElementById('Field1').value)
    hinta = 0.00;

    if (pizza == '1') hinta = 10;
    else if (pizza == '2') hinta = 12;
    else if (pizza == '3') hinta = 13;

    if (valkosipuli == 1) hinta++;
    if (oregano == 1) hinta++;
    if (aurajuusto == 1) hinta++;

    if (kanta) hinta *= 0.9;

    document.getElementById('Field2').value = (hinta * maara).toFixed(2);
}
function order() {
    alert("Tilaus on vastaan otettu!");
    location.reload();
}

