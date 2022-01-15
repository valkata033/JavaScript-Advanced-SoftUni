function solve(input){

    let inputNumber = input.toString();
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < inputNumber.length; i++){
        
        sum += Number(inputNumber[i]);

        if (inputNumber[i] !== inputNumber[0]){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222222);