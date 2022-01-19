function solve(n, k){
    const arr = [1];
    for(let i = 1; i < n; i++){
        let tempArray = arr.slice(-k);
        let sum = 0;
        for(let num of tempArray){
            sum += num;
        }
        arr.push(sum)
    }
    return arr;
}
console.log(solve(6, 3));

