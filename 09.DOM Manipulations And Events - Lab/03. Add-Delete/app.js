function addItem() {
    let ulElements = document.getElementById('items');
    let resultElement = document.getElementById('newItemText').value;
    let liElement = document.createElement('li');
    liElement.textContent = resultElement;
    resultElement.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    liElement.appendChild(deleteElement);
    ulElements.appendChild(liElement);
}