function addItem() {
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;
    
    let option = document.createElement('option');
    option.value = newValue;
    option.textContent = newText;

    let menuElement = document.getElementById('menu');
    if(newText !== '' && newValue !== ''){
        menuElement.appendChild(option);
    }
    
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}