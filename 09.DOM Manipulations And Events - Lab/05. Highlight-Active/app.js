function focused() {

    let divElements = document.getElementsByTagName('div')[0];
    let divElementsArr = Array.from(divElements.children);

    for (const div of divElementsArr) {
        div.children[1].addEventListener('focus', onFocus);
        div.children[1].addEventListener('blur', onBlur);
    }

    function onFocus(e){
        e.target.parentNode.classList.add('focused');
    };

    function onBlur(e){
        e.target.parentNode.classList.remove('focused');
    };
}