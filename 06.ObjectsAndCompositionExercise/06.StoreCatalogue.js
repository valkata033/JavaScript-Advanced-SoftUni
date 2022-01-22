function solve(input){

    let array = input.sort((a,b) => a.localeCompare(b));
    
    let current = [];
    let firstChar = '';
    
    for(let i = 0; i < array.length; i++){
        current = array[i].split(' : ');

        if(array[i][0] !== firstChar){
            console.log(array[i][0]);
        }

        console.log(`  ${current[0]}: ${current[1]}`);
        firstChar = array[i][0];

    }

}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);