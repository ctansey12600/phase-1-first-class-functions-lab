const returnFirstTwoDrivers = array => array.slice(0,2)

const returnLastTwoDrivers = array => array.slice((array.length - 2),(array.length + 1))

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function multiply(){
        return integer * integer
    }
}

const fareDoubler = fare => fare * 2

const fareTripler = fare => fare * 3

function selectDifferentDrivers(array, driverFunction){
    if(driverFunction(array) === returnFirstTwoDrivers ){
        return returnFirstTwoDrivers()
    }else if(driverFunction(array) === returnLastTwoDrivers){
        return returnLastTwoDrivers()
    }
}