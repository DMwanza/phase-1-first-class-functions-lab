// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
// function returnFirstTwoDrivers(){
//     return drivers.slice(0,drivers.length-2)
// }
// function returnLastTwoDrivers(){
//     return drivers.slice(2)
// }

// function createFareMultiplier(multiplier){
    //     return function (fare) {
//         return fare * multiplier
// }}

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
const createFareMultiplier=(multiplier)=>{
    return function (fare){
        return fare*multiplier
    }
}
const fareDoubler = createFareMultiplier(2);
fareDoubler(29)

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,selectorTwoDrivers){
    return selectorTwoDrivers(drivers)
    
}


////////////
// const returnFirstTwoDrivers = function(drivers) {
//     return drivers.slice(0, 2);
// };

// const returnLastTwoDrivers = function(drivers) {
//     return drivers.slice(-2);
// };

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = function(integer) {
//     return function(fare) {
//         return fare * integer;
//     };
// };

// const fareDoubler = createFareMultiplier(2);

// const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function(drivers, selectionFunction) {
//     return selectionFunction(drivers);
// };




























