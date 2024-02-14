let totCount = 0;

window.onload = function () {
    document.getElementById('Field1').value = getRandomIntInclusive(1, 10);
    document.getElementById('Field2').value = getRandomIntInclusive(1, 10);
}

function f1neg() {
    Field1 = parseInt(document.getElementById('Field1').value) - 1;
    if (Field1 < 1) { Field1 = 1; }
    document.getElementById('Field1').value = Field1;
}
function f1pos() {
    Field1 = parseInt(document.getElementById('Field1').value) + 1;
    if (Field1 > 10) { Field1 = 10; }
    document.getElementById('Field1').value = Field1;
}
function f2neg() {
    Field2 = parseInt(document.getElementById('Field2').value) - 1;
    if (Field2 < 1) { Field2 = 1; }
    document.getElementById('Field2').value = Field2;
}
function f2pos() {
    Field2 = parseInt(document.getElementById('Field2').value) + 1;
    if (Field2 > 10) { Field2 = 10; }
    document.getElementById('Field2').value = Field2;
}

function update() {
    Field1 = parseInt(document.getElementById('Field1').value);
    Field2 = parseInt(document.getElementById('Field2').value);
    output = 0;
    func = '';
    operators = document.getElementById('func');
    switch (operators.options[operators.selectedIndex].text) {
        case '+':
            output = Field1 + Field2;
            func = Field1 + ' + ' + Field2 + ' = ';
            break;
        case '-':
            output = Field1 - Field2;
            func = Field1 + ' - ' + Field2 + ' = ';
            break;
        case '*':
            output = Field1 * Field2;
            func = Field1 + ' * ' + Field2 + ' = ';
            break;
        case '/':
            output = Field1 / Field2;
            func = Field1 + ' / ' + Field2 + ' = ';
            break;
        default:
            output = 'ERROR';
            func = 'ERROR';
            break;
    }
    document.getElementById('output2').innerHTML = func;
    document.getElementById('output1').innerHTML = output;
    document.getElementById('totCount').innerHTML = 'laskutoimituksia: ' + ++totCount + ' kpl';
    document.getElementById('history').insertAdjacentHTML('afterend', func + output + '<br>');
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}