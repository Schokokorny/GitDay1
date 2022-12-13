
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


// Advanced
// E1
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

var summe = a+b+c*1+d*1+e;
console.log("summe = " +summe);

let f = '1';
let g = 15;
let h = 8;
let i = "1";

var multi = (f*1)*g*h*(i*1);
console.log("multi = " +multi);
document.write(summe/multi + "<br>");

// E2

let people =["Greg", "Mary", "Devon", "James"];
// remove greg
people.shift();
// add Matt
people.unshift("Matt");
// remove James
people.pop();
// Add me
people.push("Stefan")
console.log(people);
// slice
console.log(people.slice(2));
// Indexof Mary
console.log(people.indexOf("Mary"));
// IndexOf Foo
console.log(people.indexOf("Foo"));
// E2 Part 2
let humans = ["Greg", "Mary", "Devon", "James"];
humans.splice(2,1, "Elizabeth", "Anna");
console.log(humans);
// E3
var multidimensional = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(multidimensional[1][1]+" "+multidimensional[4][2]+" "+multidimensional[5][3]+" "+multidimensional[2][3]+" "+multidimensional[2][1]);

// Challange Exercise

var nicesentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties$flow$down;$actions$flow$up"
var second = nicesentence.replaceAll("$"," ");
document.write(second);