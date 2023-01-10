function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue)
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}


function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination) * 264)
    
}

function calculatesFarePrice(start, destination) {
    let x
    let y
    if (distanceTravelledInFeet(start, destination) <= 400) {
        x = 0
        return x
    }

    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        y = distanceTravelledInFeet(start, destination)
        x = (y - 400) * .02
        return x
    }

    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        x = 25
        return x
    }

    else if (distanceTravelledInFeet(start, destination) > 2500) {
        x = 'cannot travel that far'
        return x
    }
}

