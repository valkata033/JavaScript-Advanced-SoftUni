function validate() {
    
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', error);

    function error(e) {

        if(!(/\w+@\w+\.\w+/.test(inputElement.value))){
            e.target.classList.add('error');
        }
        else{
            e.target.classList.remove('error');
        }
    }
}