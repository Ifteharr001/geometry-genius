function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText)

    const area = 0.5 * base * height;

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-widht')
    const widhtValueText = widthField.value;
    const width = parseFloat(widhtValueText);
    
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    const area = width * length;

    const rectangleArea = document.getElementById('ractangle-area');
    rectangleArea.innerText = area;
}

// reusable fanction

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');

    const height = getInputValue('parallelogram-height')

    const area = base * height;
    setElementInnerText('parallelogram-area', area)
}



function calculateEllipseArea(){
    const majorRedius = getInputValue('ellipse-major-redius')
    const mainorRedius = getInputValue('ellipse-minor-redius')
    const area = 3.14 * majorRedius * mainorRedius;
    setElementInnerText('ellipse-area', area)
}

function getInputValue(fieldId) {
    const inputFiled = document.getElementById(fieldId);
    const inputValueText = inputFiled.value;
    const value = parseFloat(inputValueText)
    return value;
}
// reusable set 
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId, area);
    element.innerText = area;
}
