function solve(car){

    let carObj = {};
    let carEngine = {};
    let carCarriage = {};
    carObj.model = car.model;

    if (car.power <= 90){
        carEngine.power = 90;
        carEngine.volume = 1800;
    }
    else if (car.power > 90 && car.power <= 120){
        carEngine.power = 120;
        carEngine.volume = 2400;
    }
    else if (car.power > 120 && car.power <= 200){
        carEngine.power = 200;
        carEngine.volume = 3500;
    }

    carObj.engine = carEngine;

    carCarriage.type = car.carriage;
    carCarriage.color = car.color;

    carObj.carriage = carCarriage;

    if (car.wheelsize % 2 === 0){
        car.wheelsize--;
    }

    carObj.wheels = [car.wheelsize,
                     car.wheelsize,
                     car.wheelsize,
                     car.wheelsize];
     
    return carObj;
}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });