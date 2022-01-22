function solve(input){

    let towns = {};

    for (const info of input) {
        let arr = info.split(' <-> ');
        let town = arr[0];
        let population = Number(arr[1]);

        if (!towns[town]){
            towns[town] = 0;
        }   

        towns[town] += population;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }

}

solve(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000',
       'Washington <-> 2345000','Las Vegas <-> 1000000']);