function sumTable() {
    let rowsElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let arr = Array.from(rowsElements);
    
    let sumElement = document.getElementById('sum');

    sumElement.textContent = arr.reduce((a, x) => {
        return a += Number(x.textContent);
    },0);
    
}