function solve(n, m){

    while (n !== m){
        if (n > m){
            n -= m;
        }
        else{
            m -= n;
        }
    }

    console.log(n);
}

solve(15, 5);