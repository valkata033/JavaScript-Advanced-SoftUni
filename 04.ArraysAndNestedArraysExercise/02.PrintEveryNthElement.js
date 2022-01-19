function solve(array, step){

    let arr = [];
    for(let i = 0; i < array.length; i += step){
        arr.push(array[i]);
    }

    return arr;
}

solve(['5', '20', '31', '4', '20'], 2);