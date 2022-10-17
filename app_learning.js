// let something;
// const amIFat = true;
// const wallet = null;
// console.log(something, amIFat, wallet);



// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", ];

    //get Item from Array

// console.log(daysOfWeek[2]);

    // Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab");

// console.log(toBuy);

// const playerName = "FTE"
// const playerPoints = 1212;
// const playerHandsome = true;
// const playerFat = "Not";

// const player = ["FTE", 1212, true, "Not"];

// console.log(player);

// player[1] = 1234;

// console.log(player);

// const player = {
//     name: "FTE",
//     points:1212,
//     Handsome:true,
// };

// console.log(player);

// console.log(player.name);

// player.name = "FTE0517";

// console.log(player["name"]);

// player.lastName = "Jack";

// player.points = player.points + 2424;

// console.log(player);

// function sayHello(nameOfPerson, age){
//     console.log("Hello my nnameOfPersonme is "+ nameOfPerson +"and I'm " + age);
// }

// sayHello("FTE", 10);
// sayHello("nico", 15);
// sayHello("Lynn", 20);

// function plus(a,b) {
//     console.log(a + b);
// }

// function divide (a, b) {
//     console.log (a/b);
// }

// console.log(a);

// plus(10, 15);
// divide(98, 20);

// const player = {
//     name : "FTE",
//     sayHello: function (otherPersonName) {
//         console.log("Hello" + otherPersonName + "nice to meet you!")
//     },
// };

// console.log(player.name);

// player.sayHello("Lynn");

// function plus (a, b) {
//     console.log(a + b);
// }

// plus (4123421321, 2136546416);

// const calculator = {
//     plus : function(a, b) {
//         console.log(a + b);
//     },
//     minus : function (a, b) {
//          console.log(a - b);
//         },
//     divide : function (a, b) {
//          console.log(a / b);
//     },
//     multi : function (a, b) {
//          console.log(a * b);
//         },
//     crazy : function (a, b) {
//          console.log(a + b - a / b * a * 4 * b *-4);
//     },
// };



// calculator.plus (12, 4);
// calculator.minus (12, 4);
// calculator.crazy (12, 4);


// const calculator = {
//     plus : function(a, b) {
//         return(a + b);
//     },
//     minus : function (a, b) {
//          return(a - b);
//         },
//     divide : function (a, b) {
//          return(a / b);
//     },
//     multi : function (a, b) {
//          return(a * b);
//         },
//     crazy : function (a, b) {
//          return(a + b - a / b * a * 4 * b *-4);
//     },
// };



// const calculateResult_crazy = calculator.crazy(2,8);
// const calculateResult_minus = calculator.minus(calculateResult_crazy,8);
// const calculateResult_multi = calculator.multi(calculateResult_minus,8);
// const calculateResult_divide = calculator.divide(calculateResult_multi,4);
// const calculateResult_plus = calculator.plus(calculateResult_multi,calculateResult_divide);

// const calculateResult_final = {calculateResult_plus};

// console.log(calculateResult_final);




// const age = 88;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }


// const krAge = calculateKrAge(age);

// console.log(krAge);


// true || true === true
// true || false == true
// flase || true === true
// flase || false === false

// true && true === true
// true && false == false
// flase && true === false
// flase && false === false

// const age = parseInt(
//     prompt(
//         "How old are you?"
//         )
//     );


// if(isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// } else if (age < 18) {
//     console.log("Your are too young.");
// } else if (55 > age && age >=18 ) {
//     console.log("You can drink");
// } else if (80 > age && age >= 56) {
//     console.log("Don't drink too much.");
// } else if ( 100> age && age >= 81) {
//     console.log("You can do whatever you want if you can");
// } else if (age === 100) {
//     console.log ("Wow you are wise")
// } else if (age > 100) {
//     console.log ("glad to know your age!!")
// }


// const hellos = document.getElementsByClassName("hello");

// console.log(hellos)

const title = document.querySelector(".hello h1");

title.innerText = "Hello";

console.log(title);