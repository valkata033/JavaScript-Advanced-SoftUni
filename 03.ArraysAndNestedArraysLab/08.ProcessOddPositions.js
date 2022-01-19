function solve(array){

    let resultArr = [];

    for (let i = 1; i < array.length; i+= 2){
        resultArr.push(array[i]);
    }
    
    resultArr = resultArr.map(x => x * 2).reverse();
    
    return resultArr;
}

solve([10, 15, 20, 25]);