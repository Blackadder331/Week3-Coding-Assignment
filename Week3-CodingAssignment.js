console.log("Hello");

// 1

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1-a
// subtract the the first element in the array from the last
console.log(ages[ages.length - 1] - ages[0]);
console.log(ages.length);


// 1-b
// add a new age to your array

ages.push(27);
console.log(ages[ages.length - 1] - ages[0]);
console.log(ages.length);


// 1-c
// use a loop to iterate through the array and calculate the average age

console.log(ages); // prints current array

let someOfAges = 0
for(let i = 0; i < ages.length; i++){
    someOfAges += ages[i];
}
console.log(someOfAges / ages.length); // calculates average age


// 2

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];


// 2-a 
// for loop 
// iterate through the array
// calculate the average number of letters per name

let averageLetters = 0;
for(let i = 0; i < names.length; i++){
    console.log(names[i].length); // prints average letters
}


// 2-b 
// concatenate all the names together separated by spaces

const namesWithSpaces = names.join(" ");
console.log(namesWithSpaces); // prints all names separated by spaces


// 3
// Q: How do you access the last element of any array?
// ANSWER: you can access the last element in an array by using array.length - 1
// let lastElement = array[array.length - 1];


// 4
// Q: How do you access the first element of any array?
// ANSWER: you can access the first element in an array by using array[0]
// let firstElement = array[0];


// 5
// Create a new array called nameLengths.
// Write a loop to iterate over the previously created names array 
// and add the length of each name to the nameLengths array.

let nameLengths = [];
for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}

console.log(nameLengths); // logs new array


// 6 
// for loop
// uses a loop to iterate over the nameLengths array
let sumLengths = 0;
for(let i = 0; i < nameLengths.length; i++){
    sumLengths += nameLengths[i];  // calculates the sum of all the elements in the array
}
console.log(sumLengths); 


// 7 
// function that takes two parameters, word and n, as arguments and repeates word n number of times
// for Loop

function repeat(word,n) { // function that takes two parameters, word and n, as arguments
    var output = "";
    for(var i = 0; i < n; i++) { 
        output += word 
    }
    return output; 
}
console.log(repeat("Hello", 3)) // prints result


// 8 
// function that takes two parameters, firstName and lastName, and returns a full name

function makeFullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}

makeFullName("Reynolds", "Sharp"); // runs function and prints full name


// 9
// function that takes an array of numbers
// returns true if the sum of all the numbers in the array is greater than 100

function testOneHundred(myArr) {
    let sumOfNumbers = 0;
    for(let i = 0; i < myArr.length; i++){
        sumOfNumbers += myArr[i];  // calculates the sum of all the elements in the array
    }
    console.log(sumOfNumbers); 

    return (sumOfNumbers > 100)
// returns true if sum of all the numbers in the array is greater than 100
}
console.log(testOneHundred([50, 40, 25]));  // takes an array of numbers and prints


// 10
// function that takes an array of numbers
// returns the average of all the elements in the array

function findAverage(myNewArr) {
    let sumNumbers = 0;
        for(let i = 0; i < myNewArr.length; i++){
            sumNumbers += myNewArr[i];  // calculates the sum of all the elements in the array
        }
    return (sumNumbers / myNewArr.length); // retruns average
}

console.log(findAverage([10, 50, 100]));

// 11
// function that takes two arrays of numbers and returns true 
// if the average of the elements in the first array is 
// greater than the average of the elements in the second array.

function findNewAverage(myFirstArray, mySecondArray) {
    let sumOne = 0;
        for(let i = 0; i < myFirstArray.length; i++){
            sumOne += myFirstArray[i];  // calculates the sum of all the first elements in the array
    }
    let sumTwo = 0;
        for(let i = 0; i < mySecondArray.length; i++){
            sumTwo += mySecondArray[i];  // calculates the sum of all the second elements in the array
    }
return (sumOne / myFirstArray.length) > (sumTwo / mySecondArray.length); // retruns true if 1 greater than 2
}

console.log(findNewAverage([10, 50, 11000],[36, 75, 2000]));

// 12
// function that takes boolean isHotOutside and moneyInPocket
// returns true is it hot outside and moneyInPocket is > 10.50 
function willBuyDrink(isHotOutside, moneyInPocket){
    return (moneyInPocket > 10.50 && isHotOutside); 
}
console.log(willBuyDrink(true, 20.50));


// 13 
// IDEA: RPG healthbar & accrued combat damage -> 
// to determine player health after combat rounds of damage 
// and if/when the character willDie

// damage, damageBonus, playerHealth

function willDie(damage, damageBonus, playerHealth){
    let i = 0;
    let accDmg = 0;
    do {
        accDmg += damage * damageBonus;
        console.log(playerHealth - accDmg);
        i++;
    } while (playerHealth > accDmg)
    if (playerHealth <= accDmg){
        return console.log("You have died");
    } else {
        return console.log("You are alive");
    }
}

willDie(5, 1.25, 30);
