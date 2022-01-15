function solve(speed, area){

    let status;

    if (area === 'residential'){

        const limit = 20;

        if (speed <= limit){

            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else{

            let diff = speed - limit;

            if (diff <= 20){

                status = 'speeding';
            }
            else if (diff > 20 && diff <= 40){

                status = 'excessive speeding';
            }
            else {

                status = 'reckless driving';
            }

            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }

    if (area === 'city'){

        const limit = 50;

        if (speed <= limit){

            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else{

            let diff = speed - limit;

            if (diff <= 20){

                status = 'speeding';
            }
            else if (diff > 20 && diff <= 40){

                status = 'excessive speeding';
            }
            else {

                status = 'reckless driving';
            }

            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }

    if (area === 'interstate'){
    
        const limit = 90;

        if (speed <= limit){

            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else{

            let diff = speed - limit;

            if (diff <= 20){

                status = 'speeding';
            }
            else if (diff > 20 && diff <= 40){

                status = 'excessive speeding';
            }
            else {

                status = 'reckless driving';
            }

            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }

    if (area === 'motorway'){

        const limit = 130;

        if (speed <= limit){
            
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
        else{

            let diff = speed - limit;

            if (diff <= 20){

                status = 'speeding';
            }
            else if (diff > 20 && diff <= 40){

                status = 'excessive speeding';
            }
            else {

                status = 'reckless driving';
            }
            
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
    
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');