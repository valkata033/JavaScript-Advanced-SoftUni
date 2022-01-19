function solve(array){

    let resultArr = [];
    let biggestElement = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] >= biggestElement){
            biggestElement = array[i];
            resultArr.push(biggestElement);
        }
    }

    return resultArr;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([20, 3, 2, 15,6, 1]);