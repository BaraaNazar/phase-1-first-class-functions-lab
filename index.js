// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
return array.slice(0,2)
}
const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (x) => {
    return function (x){
        return x*x
    }

}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier*2
}

const fareTripler = function (fare){
  return fare *3
}

const selectDifferentDrivers = function (arrayOfDrivers, func){
  return func(arrayOfDrivers)
}
