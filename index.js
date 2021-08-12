const returnFirstTwoDrivers = array => array.slice(0,2)

const returnLastTwoDrivers = array => array.slice((array.length - 2),(array.length + 1))

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, f){
    return f(array)
}