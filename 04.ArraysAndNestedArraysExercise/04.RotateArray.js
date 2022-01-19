function solve(array, step){

    for(let i = 0; i < step; i++){
        let lastElement = array.pop();
        array.unshift(lastElement);
    }
    console.log(array.join(' '));
}

solve(['1', '2', '3', '4'], 2);