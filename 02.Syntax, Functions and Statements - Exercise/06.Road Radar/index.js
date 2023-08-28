function roadRadar(speed,area){
    let speedLimit = 0;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }
    let difference = speed - speedLimit;
    if (difference <= 0) {
        return `Driving ${speed} km/h in a ${speedLimit} zone`;
    }
    else if (difference <= 20) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`;
    }
    else if (difference <= 40) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`;
    }
    else {
        return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`;
    }
    
}
console.log(roadRadar(40, 'city'));
console.log(roadRadar(21, 'residential'));
console.log(roadRadar(120, 'interstate'));
console.log(roadRadar(200, 'motorway'));