function solve(array){

    array = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    for (let word of array) {
        console.log(word);
    }
    
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);