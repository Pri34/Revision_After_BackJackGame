// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name : "Prisha",
    age : 19 ,
    country  : "India" 
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()


let age = 75

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if(age< 6){
    console.log("You get a free pass")
}
else if (age >= 6 && age<=17) {
    console.log("You get Child discount")
} 
else if (age>=18 && age <=26) {
    console.log("U get student discount")
}
else if(age>=27 && age <=66) {
    console.log("You have to pay full price")
}
else {
    console.log("You get senior citizen discount")
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

console.log("The 5 largest countries in the world:")
for(let i = 0 ; i<largeCountries.length ; i++) {
    console.log("- " + largeCountries[i])
}


let largeCountries1 = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries1.pop()
largeCountries1.push("Pakistan")

largeCountries1.shift()
largeCountries1.unshift("China")

for(let i = 0 ; i<largeCountries1.length ; i++) {
    console.log("- " + largeCountries1[i])
}



let dayOfMonth = 14
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if(dayOfMonth === 13 && weekday ==="Friday") {
    console.log("😱")
}



let hands = ["rock", "paper", "scissor"]
// Create a function that returns a random item from the array

function game() {
    console.log(hands[Math.floor(Math.random()*hands.length)])
}
game()

// function getHand() {
//     let randomIndex = Math.floor( Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log( getHand() )


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruit () {
for(let i=0 ; i<fruit.length ; i++){
    if(fruit[i] === "🍎") {
        appleShelf.textContent += "🍎"
    }
    else {
        orangeShelf.textContent += "🍊"
    }
}
}

sortFruit()


