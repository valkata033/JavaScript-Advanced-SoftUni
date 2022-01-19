function solve(array){

    array.sort((a, b) => a - b);

    let resultArr = [];
    
    while(array.length !== 0){
        let smallestNum = array.shift();
        let biggestNum = array.pop();

        resultArr.push(smallestNum);
        resultArr.push(biggestNum);
    }

    return resultArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);