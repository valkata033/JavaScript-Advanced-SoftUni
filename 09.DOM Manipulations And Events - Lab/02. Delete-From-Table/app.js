function deleteByEmail() {
    let tdElements = Array.from(document.querySelectorAll('tbody td:nth-of-type(2)'));
    let inputElement = document.querySelector('input[name="email"]');
    let resultElement = document.getElementById('result');

    let targetElement = tdElements.find(el => el.textContent === inputElement.value);

    if(targetElement){
        targetElement.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    }
    else{
        resultElement.textContent = 'Not found.';
    }
}