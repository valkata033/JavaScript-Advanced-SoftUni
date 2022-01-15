function solve(num1, num2, num3) {
    let result;
    if (num1 > num2){
        result = num1;
    }
    else{
        result = num2;
    }
    if (num3 > result){
        result = num3;
    }
    
    console.log(`The largest number is {result}.`);
    
}

solve(5, -3, 16);
solve(-3, -5, -22.5);