let raining = 100
if(raining == 100) {
    console.log('Use an umbrella')
} else if (!raining){
    console.log("It's a sunny day")
} else {
    console.log("There is a light rain")
}


let age = 10
const message = age == 10 ? 'The age is 10' : 'The age is not 10'
console.log(message)


let numberDay = 3
let dayName = ''
switch (numberDay) {
    case 0:
        dayName = 'Monday'
        break
    case 1:
        dayName = 'Tuesday'
        break
    case 2:
        dayName = 'Wednesday'
        break
    case 3:
        dayName = 'Thursday'
        break
    case 4:
        dayName = 'Friday'
        break
    default:
        console.log('Incorrect number day')
}
console.log(dayName)