function addItem() {
    let ulElements = document.getElementById('items');
    let newElement = document.createElement('li');
    let resultElement = document.getElementById('newItemText').value;
    newElement.textContent = resultElement;
    ulElements.appendChild(newElement);
}