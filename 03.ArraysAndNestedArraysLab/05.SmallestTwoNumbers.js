function solve(array){
    array = array.sort((a, b) => a - b);
    let resultArr = array.slice(0, 2);
    console.log(resultArr.join(' '));
}

solve([30, 15, 50, 5]);