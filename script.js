let restaurants = ['dennys', 'brio', 'jack in the box'];
let transportation = ['uber', 'lyft', 'bus'];
let destination = ['bali', 'bora bora', 'st thomas'];
let entertainment = ['movie', 'amusement park', 'concert'];



function getRandomElementFromArray(array){
//return a random element to the function caller

let randomDecimalNumber = Math.random() * array.length;
let wholeNumber = Math.floor(randomDecimalNumber);
return array[wholeNumber]

}
let randomRestaurant = getRandomElementFromArray(restaurants);
let randomTransportation = getRandomElementFromArray(transportation);
let randomDestination = getRandomElementFromArray(destination);
let randomEntertainment = getRandomElementFromArray(entertainment);

console.log(randomRestaurant);
console.log(randomTransportation);
console.log(randomDestination);
console.log(randomEntertainment);


let satisfied = false
while(satisfied == false){
    let userConfirm = prompt("Are you satisfied with this trip?")
    if (userConfirm === "no") {
        randomRestaurant = getRandomElementFromArray(restaurants);
        randomTransportation = getRandomElementFromArray(transportation);
        randomDestination = getRandomElementFromArray(destination);
        randomEntertainment = getRandomElementFromArray(entertainment);
        console.log(randomRestaurant +", " + randomEntertainment +", " + randomDestination +", " + randomTransportation);
        
    }
    else{
        satisfied = true;
        console.log("Congrats! You are going to "+ randomDestination +" "+ "taking the " + randomTransportation +" " + "to eat at " + randomRestaurant +" "+ "and then you will enjoy a nice night at " + randomEntertainment + "!!")
    }
}















// let placeToEat = ['monzu', 'pizza hut', 'sushi'];
// let places = placeToEat[Math.floor(Math.random()*placeToEat.length)];
// console.log(places);


// // let getRestaurant = getRandomElementFromArray(restaurants);
// // let getRandomRestaurant = Math.random() * 3;
// // getRandomRestaurant = Math.floor(getRandomRestaurant) + 1;

// // console.log(getRandomRestaurant);

// let number = Math.random() * 3;
// let randomEats = Math.floor(number);
// // console.log(restaurants);
// //var things = ['Rock', 'Paper', 'Scissor'];
// //var thing = things[Math.floor(Math.random()*things.length)];
// //alert('The computer chose:' + thing);