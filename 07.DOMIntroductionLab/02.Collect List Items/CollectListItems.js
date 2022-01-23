function extractText() {
    let ulElements = document.getElementById('items');
    let resultElement = document.getElementById('result');

    resultElement.textContent = ulElements.textContent;
}