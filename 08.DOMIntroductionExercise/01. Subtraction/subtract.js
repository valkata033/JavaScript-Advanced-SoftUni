function subtract() {
    
    let firstElement = document.getElementById('firstNumber').value;
    let secondElement = document.getElementById('secondNumber').value;
    let resultElement = document.getElementById('result');

    let result = Number(firstElement - secondElement);
    resultElement.textContent = result;
}