function calculator() {
    let input1;
    let input2;
    let resultInput;

    function init(selector1, selector2, resultSelector){
        input1 = document.querySelector(selector1);
        input2 = document.querySelector(selector2);
        resultInput = document.querySelector(resultSelector);
    }

    function add(){
        resultInput.value = Number(input1.value) + Number(input2.value);
    }
    
    function subtract(){
        resultInput.value = Number(input1.value) - Number(input2.value);
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




