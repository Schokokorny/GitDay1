
// Hello World E1
const e_dee = "Hello from the consol External";
const e_deebr= "Hello from the Browser External<br>";
console.log(e_dee);
document.write(e_deebr);

// E3 I am
const first_name = "Stefan";
const second_name = "Konrad";
const current_age = 28;
console.log("Hello my name is " + first_name + " " +second_name + " and i am " +current_age + " Years old");
document.write("Hello my name is " + first_name + " " +second_name + " and i am " +current_age + " Years old<br>");

// E4 Players

const players =["Martin", "Thomas", "Peter", "Mathias", "Niki"]
console.log("The most valuable player of the match is " + players[3] )

// Intermediate
// E1

const cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari", "Mini"]
console.log(cars.sort());

// E2 #1

const fruits = ["apple","banana","kiwi"];
console.log(fruits)
fruits.push("orange");
console.log(fruits);

// E2 #2

const animals = ["monkey", "horse", "dog"];
console.log(animals);
animals.unshift("cat");
console.log(animals);

// E3
const more_fruits = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
cut_fruits = new Array();
cut_fruits = more_fruits.split('/');
document.write(cut_fruits[1]+"<br>");
document.write(cut_fruits[2]+"<br>");
document.write(cut_fruits[3]+"<br>");
document.write(cut_fruits[4]+"<br>");
document.write(cut_fruits[5]+"<br>");
document.write(cut_fruits[6]+"<br>");
document.write(cut_fruits[7]+"<br>");
document.write(cut_fruits[8]+"<br>");
