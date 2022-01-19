function solve(array){
    array.sort((a,b) => a-b);
    let divider = Math.ceil(array.length / 2);
    array = array.splice(-divider);
    return array;
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);