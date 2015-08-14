//Ameer J. Jackson 8/13/2015 AssignmentName:Expressions

//Expressions - PEMDAS - The Order of Operations

alert("Give me an A, I did my best!")

//Bachelor grocery list

var vitaminDmilk = 3;
var eggs  = 6;
var bestfoodsmayonnaise = 4;
var kraftsinglescheese = 3;
var sandwhichmeat = 6;
var aquafinabottlewater = 6;

//two boxes of cereal
var cereal = [5, 5 * 2];

//two loafs of bread
var bread = [1, 1 * 2];

//top ramon noodles come in a 12 pack or .17 cent each
var topramennoodles = [.17 * 0, .17 * 1, .17 * 2, .17 * 3, .17 * 4, .17 * 5, .17 * 6, .17 * 7, .17 * 8, .17 * 9, .17 * 10, .17 * 11, .17 * 12];  

//lemonade is 2 for $5.00
var juice = [2.50, 2.50 * 2]; 


var sum = vitamindmilk + cereal [0] + eggs + bread [1] + bestfoodsmayonnaise + kraftsinglescheese + sandwhichmeat + topramennoodles [12] + aquafinabottlewater + juice [1];


//california sales tax is 7.5% 
var salestax = 0.075
var total = sum * salestax + sum;
console.log(total);

//If your purchace everything your total will be $50.193
//If you purchase everything, with one box of cereal your total will be $45.193
//If you purchase everything, with one loaf of bread your total will be $49.493
//If you purchase everything, with one topramennoodle your total will be $48.55775
//If you purchase everything, with one lemonade your total will be $47.8805
