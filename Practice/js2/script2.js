//Ameer J. Jackson 8/14/2015 AssignmentName:Expressions

//Expressions - PEMDAS - The Order of Operations

alert("Welcome Bachelor, how may I help you today?")

//Bachelor grocery list
var vitamindmilk;
var eggs;
var mayonnaise;
var kraftsinglescheese;
var sandwichmeat;
var aquafinabottlewater;
var cereal;
var bread;
var topramennoodles; 
var juice;

//prompt
vitamindmilk = prompt("How many cartons of milk would you like to purchase ($5.00ea.):");

var totalmilk = vitamindmilk * 5;

//prompt
eggs = prompt("How many cartons of eggs would you like to purchase ($6.00ea.):");

var totaleggs = eggs * 6;

//prompt
mayonnaise = prompt("How many mayonnaise would you like to purchase ($4.00ea.):");

var totalmayonnaise = mayonnaise * 4;

//prompt
kraftsinglescheese = prompt("How many packs of Kfraft Singles cheese would you like to purchase ($3.00ea.):");

var totalkraftsinglescheese = kraftsinglescheese * 3;

//prompt
sandwichmeat = prompt("How many packs of sandwich meat would you like to purchase ($6.00ea.):");

var totalsandwichmeat = sandwichmeat * 6;

//prompt
aquafinabottlewater = prompt("How many cases of Aquafina bottle water would you like to purchase ($6.00ea.):");

var totalaquafinabottlewater = aquafinabottlewater * 6;

//prompt
cereal = prompt("How many boxes of cereal would you like to purchase ($5.00ea.):");

var totalcereal = cereal * 5;

//prompt
bread = prompt("How many loaves of bread would you like to purchase ($1.00ea.):");

var totalbread = bread * 1;

//prompt
topramennoodles = prompt("How many Top Ramen noodles would you like to purchase ($0.17ea.):");

var totaltopramennoodles = topramennoodles * .17;

//prompt
juice = prompt("How many juices would you like to purchase ($2.50ea.):");

var totaljuice = juice * 2.50;

alert("Thank you Bachelor, have a nice day!")

//total grocery bill
var amount = totaleggs + totalmilk + totalmayonnaise + totalkraftsinglescheese + totalsandwichmeat + totalaquafinabottlewater + totalcereal + totalbread + totaltopramennoodles + totaljuice; 

//total sales tax
var totalsalestax = (amount) * 0.075;

var totalamount = amount + totalsalestax;

console.log("Milk cost $" + (totalmilk));
console.log("Egg cost $" + (totaleggs));
console.log("Mayonnaise cost $" + (totalmayonnaise));
console.log("Kraft single cheese cost $" + (totalkraftsinglescheese));
console.log("Sandwich meat cost $" + (totalsandwichmeat));
console.log("Aquafina bottle water  cost $" + (totalaquafinabottlewater));
console.log("Cerel cost $" + (totalcereal));
console.log("Bread cost $" + (totalbread));
console.log("Top Ramen Noodles cost $" + (totaltopramennoodles));
console.log("Juice cost $" + (totaljuice));

console.log("Amount $" + (amount));
console.log("Salestax $" + (totalsalestax));
console.log("Total amount $" + (totalamount));