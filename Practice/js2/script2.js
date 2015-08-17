// Ameer J. Jackson 8/14/2015 AssignmentName:Expressions

// Expressions - PEMDAS - The Order of Operations

alert("Welcome Bachelor, how may I help you today?")

// Bachelor grocery list
var milk;
var eggs;
var mayonnaise;
var kraftsinglescheese;
var sandwichmeat;
var aquafinabottlewater;
var cereal;
var bread;
var topramennoodles; 
var juice;
var amount;
var salestax;
var totalamount

// prompt
milk = prompt("How many cartons of milk would you like to purchase ($5.00ea.):");
milk = Number(milk) * 5;

// prompt
eggs = prompt("How many cartons of eggs would you like to purchase ($6.00ea.):");
eggs = Number(eggs) * 6;

// prompt
mayonnaise = prompt("How many mayonnaise would you like to purchase ($4.00ea.):");
mayonnaise = Number(mayonnaise) * 4;

// prompt
kraftsinglesslicecheese = prompt("How many packs of Kfraft Singles slice cheese would you like to purchase ($3.00ea.):");
kraftsinglesslicecheese = Number(kraftsinglesslicecheese) * 3;

// prompt
sandwichmeat = prompt("How many packs of sandwich meat would you like to purchase ($6.00ea.):");
sandwichmeat = Number(sandwichmeat) * 6;

// prompt
aquafinabottlewater = prompt("How many cases of Aquafina bottle water would you like to purchase ($6.00ea.):");
aquafinabottlewater = Number(aquafinabottlewater) * 6;

// prompt
cereal = prompt("How many boxes of cereal would you like to purchase ($5.00ea.):");
cereal = Number(cereal) * 5;

// prompt
bread = prompt("How many loaves of bread would you like to purchase ($1.00ea.):");
bread = Number(bread) * 1;

// prompt
topramennoodles = prompt("How many Top Ramen noodles would you like to purchase ($0.17ea.):");
topramennoodles = Number(topramennoodles) * .17;

// prompt
juice = prompt("How many juices would you like to purchase ($2.50ea.):");
juice = Number(juice) * 2.50;

alert("Thank you Bachelor, have a nice day!")

// total grocery bill
amount = Number(milk + eggs + mayonnaise + kraftsinglesslicecheese + sandwichmeat + aquafinabottlewater + cereal + bread + topramennoodles + juice); 

// total sales tax
salestax = Number(amount * 0.075);

// total amount = amount + total salestax
totalamount = Number(amount + salestax);

// outputs
console.log("Milk cost: $" + (milk));
console.log("Egg cost: $" + (eggs));
console.log("Mayonnaise cost: $" + (mayonnaise));
console.log("Kraft Singles slice cheese cost: $" + (kraftsinglesslicecheese));
console.log("Sandwich meat cost: $" + (sandwichmeat));
console.log("Aquafina bottle water cost: $" + (aquafinabottlewater));
console.log("Cereal cost: $" + (cereal));
console.log("Bread cost: $" + (bread));
console.log("Top Ramen Noodles cost: $" + (topramennoodles));
console.log("Juice cost: $" + (juice));
console.log("Amount: $" + (amount));
console.log("Salestax: $" + (salestax));
console.log("Total amount: $" + (totalamount));