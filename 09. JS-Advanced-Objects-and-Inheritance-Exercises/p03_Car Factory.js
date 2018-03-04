function carFactory(requirementsObj) {
    let assembledCar = {};
    let requiredModel = requirementsObj.model;
    let requiredPower = requirementsObj.power;
    let requiredColor = requirementsObj.color;
    let requiredCarriage = requirementsObj.carriage;
    let requiredWheelSize = requirementsObj.wheelsize;

    assembledCar.model = requiredModel;

    let engineObj = {
        'Small engine': {power: 90, volume: 1800},
        'Normal engine': {power: 120, volume: 2400},
        'Monster engine': {power: 200, volume: 3500}
    };

    let carriageObj = {
        Hatchback: {type: 'hatchback', color: requiredColor},
        Coupe: {type: 'coupe', color: requiredColor}
    };

    if (requiredPower > 120) {
        assembledCar.engine = engineObj['Monster engine'];
    } else if (requiredPower > 90) {
        assembledCar.engine = engineObj['Normal engine'];
    } else {
        assembledCar.engine = engineObj['Small engine'];
    }

    if (requiredCarriage === 'hatchback') {
        assembledCar.carriage = carriageObj['Hatchback'];
        assembledCar.carriage.color = requiredColor;
    }else{
        assembledCar.carriage = carriageObj['Coupe'];
    }


    function roundDownToOdd(wheelSize) {
        return 2 * Math.floor(wheelSize / 2) - 1;
    }

    let roundedWheelSize = requiredWheelSize;
    if(requiredWheelSize % 2 === 0){
        roundedWheelSize  = roundDownToOdd(requiredWheelSize);
    }

    assembledCar.wheels = [roundedWheelSize, roundedWheelSize, roundedWheelSize, roundedWheelSize];

    return assembledCar

}

console.log(carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log(carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));
