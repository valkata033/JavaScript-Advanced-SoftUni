function solve(num) {
    let numType = typeof(num);
    let result;

    if (numType === 'number'){
        result = Math.pow(num, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${numType}.`);
    }
}

solve(5);
solve('name');