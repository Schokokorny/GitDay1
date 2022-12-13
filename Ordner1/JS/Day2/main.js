// // Basic E1

// function temprature (tempmin, tempmax) {
//     let curtemp = Math.random()*(tempmin-tempmax)+tempmin;
//     let roucurtemp = Math.round(curtemp);
//     return roucurtemp;
// }         

// let temp_var = temprature(-5,25)
// console.log(typeof(temp_var));
// console.log(temp_var);
// // if temprature <= 10 {
// //     console.log("Its cold outside")
// // } else {
// //     console.log("Its morderate outside")
// // }


// let min = -5, max = 25;

// function getRandTemp(min, max){
//     return Math.round((Math.random() * (max - min) + min));
// }

// let temp = getRandTemp(min,max);

// if(temp >= -5 && temp <= 10){
//     console.log("The temperature is: " + temp + " and it's very cold!");
// }

// else{
//     console.log("The temperature is: " + temp + " and it's moderate.");
// }



// // E2

// let food = ["pizza", "hamburger", "ice cream", "chocolate","Shootapparate"];
// let howman = food.length;

// function randomFood(){
//     return console.log ("Today my fav food is " + food[Math.round((Math.random()*10)-howman)]);
// }

// randomFood();

// // console.log(howman);
// // console.log(typeof(randomFood));
// // console.log(randomFood);
// // console.log("Today my favourite Food is +" + food[randomFood]);

// // E3

// function crystalGazer(number_of_children,partnerName,geographic_location,job_title){
//     return console.log("You will be a " + job_title + " in " + geographic_location + " and married to " + partnerName + " and will have " +number_of_children + " children");
// }

// crystalGazer(4,"Sandra","Ilz","Nurse");

// // E5

// function agecalculator(year_of_birth,date) {
//     let birthday = date-year_of_birth
//     return console.log("You are " + (birthday) + " or " + (birthday+1) + " years old!")
// }

// agecalculator(1995,2022);


// // E6

// function radian(degrees){
//     return console.log(degrees*(Math.PI/180))
// }

// radian(90);

// //  Volume - Area

// function boxarea(box_with,box_height,box_depth){
//     let area = box_with * box_height;
//     let vulume= box_depth * box_height * box_with;
//     return console.log("The box got an Volume of: " + vulume + " and an area of: " + area);
// }

// boxarea(3,7,15)

// Intermediate
const i_am = "i am a developer";
const what_i_am = (function(){
    return console.log(i_am.charAt(0).toUpperCase() + i_am.slice(1));
}());

//  Grades

let english = 5;
let math = 4;
let physics = 3;

function grading (){
    let summerian = english+math+physics;
    let average = summerian/3;
    return console.log("Sum:" + summerian + " The average is " + average);
}

grading();

//  Advanced

function minutestohours (totalminutes){
    const hour = Math.floor(totalminutes/60);
    const minuten = totalminutes %60;
    return {hour,minuten}; 
}

console.log(minutestohours(200));

// ATM
document.getElementById("maiu")
user_money = 500;