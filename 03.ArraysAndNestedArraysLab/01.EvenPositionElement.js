function solve(input){

    let output = [];
    for(let i = 0; i < input.length; i+= 2){

        output += input[i] + ' ';
    }

    console.log(output);
}

solve(['20', '30', '40', '50', '60']);