/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function testBar0() {
    const element = document.querySelector('progress-bar:not([motif])');
    element.setAttribute('load', 46);
    element.setAttribute('buffer', 56);
}

function testBar1() {
    const element = document.querySelector('progress-bar[motif="magenta"]');
    element.setAttribute('load', 64);
    element.setAttribute('buffer', 66);
}

function testBar2() {
    const element = document.querySelector('progress-bar[motif="purple"]');
    element.setAttribute('load', 56);
    element.setAttribute('buffer', 76);
}

function testBar3() {
    const element = document.querySelector('progress-bar[motif="grey"]');
    element.setAttribute('load', 66);
    element.setAttribute('buffer', 86);
}

updateColor = e => {
    const redElement = document.querySelector('rgb-color[id="red"]').$('.input-cont');
    const greenElement = document.querySelector('rgb-color[id="green"]').$('.input-cont');
    const blueElement = document.querySelector('rgb-color[id="blue"]').$('.input-cont');
    let redValue = redElement.value.length <= 3 ? redElement.value : redElement.value.slice(0, 3);
    let greenValue = greenElement.value <= 3 ? greenElement.value : greenElement.value.slice(0, 3);
    let blueValue = blueElement.value <= 3 ? blueElement.value : blueElement.value.slice(0, 3);
    redValue = redValue > 255 ? 255 : redValue;
    greenValue = greenValue > 255 ? 255 : greenValue;
    blueValue = blueValue > 255 ? 255 : blueValue;
    redValue = redValue === '' ? 0 : redValue;
    greenValue = greenValue === '' ? 0 : greenValue;
    blueValue = blueValue === '' ? 0 : blueValue;
    const rgbValue = redValue + '-' + greenValue +'-' + blueValue;
    const outputElement = document.querySelector('rgb-color[id="output"]');
    outputElement.setAttribute('input', rgbValue);
    redElement.value = redValue;
    greenElement.value = greenValue;
    blueElement.value = blueValue;
}