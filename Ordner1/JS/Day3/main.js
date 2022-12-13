
// Basic E1
const numarr = [1,7,-3,9,21,52];
let nummax = 0;
for(let i = 0; i< numarr.length; i++) {
    if (numarr[i] > nummax) {
        nummax = numarr[i];
    }
}
console.log(nummax);

// //  Basic E2

const classe = ["Martin",76,"Thomas",85,"Klaus",65,"Mitzi",93,"David",81];
const classmembers = ["Martin", "Thomas", "Klaus", "Mitzi", "David"];


for(let i = 0; i<classmembers.length; i++) {
    // selector
    let selector = classe[i*2+1]
    // console.log(selector)

    if (selector < 60){
        console.log(classmembers[i] + " got with " + selector + " an F")
    }
    else if (selector <70){
        console.log(classmembers[i] + " got with " + selector + " an D")
    }
    else if (selector <80){
        console.log(classmembers[i] + " got with " + selector + " an C")
    }
    else if (selector <90){
        console.log(classmembers[i] + " got with " + selector + " an B")
    }
    else if (selector <100){
        console.log(classmembers[i] + " got with " + selector + " an A")
    }
}

let starlord = 20

for(let i = 0; i < starlord ;i++){
    document.write("*".repeat(i)+"<br>");
}

for(let i = starlord; i > 0 ;i--){
    document.write("*".repeat(i)+"<br>");
}


for (var x = 1; x <= 100; x++) {
    if (x % 15 == 0) document.write("FizzBuzz<br>");
    else if (x % 3 == 0) document.write("Fizz<br>");
    else if (x % 5 == 0) document.write("Buzz<br>");
    else document.write(x + "<br>");
}

