//Ameer J. Jackson 8/13/2015 AssignmentName:Expressions

//Expressions - PEMDAS - The Order of Operations

alert("Give me an A, I did my best!")

//Grocery list

var vitamindmilk = 3;
var eggs  = 6;
var bestfoodsmayonnaise = 4;
var kraftsinglescheese = 3;
var sandwhichmeat = 6;
var aquafinabottlewater = 6;

//two boxes of cereal
var cereal = 5;

//two loafs of bread
var bread = 1;

//top ramon noodles come in a 12 pack or .17 cent each
var topramonnoodles = [.17, .17 * 12];  

//lemonade is 2 for $5.00
var juice = [2.50, 2.50 * 2]; 


var sum = vitamindmilk + cereal * 2 + eggs + bread * 2 + bestfoodsmayonnaise + kraftsinglescheese + sandwhichmeat + topramonnoodles [1] + aquafinabottlewater + juice [1];


//california sales tax is 7.5% 
var salestax = 0.075
var total = sum * salestax + sum;
console.log(total);
