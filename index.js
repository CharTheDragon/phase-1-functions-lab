function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}



function calculatesFarePrice(start, destination) {
    let fare
    const trip = Math.abs(start - destination) * 264;
    if (trip < 400) {
        fare = 0
    }
    else if (trip >=400, trip <2000) {
        fare = (trip - 400) * .02
    }
    else if (trip >=2000, trip <2500) {
        fare = 25
    }
    else fare = `cannot travel that far`
    return fare;
}