

function getRandTemp(min, max){
    let temp =  Math.round((Math.random() * (max - min) + min));
    // let block_temp = document.getElementById("temprature");

    if(temp >= -5 && temp < 10){
        document.write("The temperature is: " + temp + " and it's very cold!");
        document.getElementById("temprature").style.backgroundImage = "url(../jssprites/ice.png)";
        document.getElementById("temprature").style.backgroundSize = "cover";
        document.getElementById("temprature").style.backgroundRepeat = "round";
        document.getElementById("temprature").style.zIndex = "-1";


    }
    
    else if (temp >=10 && temp <25){
        document.write("The temperature is: " + temp + " and it's moderate.");
        document.getElementById("temprature").style.backgroundImage = "url(../jssprites/sun.png)";
        document.getElementById("temprature").style.backgroundSize = "cover";
        document.getElementById("temprature").style.backgroundRepeat = "round";
        document.getElementById("temprature").style.zIndex = "-1";



    }
    
    else {
        document.write ("The tempretature is: " + temp + " and its hot.")
        document.getElementById("temprature").style.backgroundImage = "url(../jssprites/flame.png)";
        document.getElementById("temprature").style.backgroundRepeat = "round";
        document.getElementById("temprature").style.backgroundSize = "cover";
        document.getElementById("temprature").style.zIndex = "-1";


    };

    document.getElementById("topic").innerHTML = "Temprature calculator";
    document.getElementById("temprature").style.border= "1px solid black";
    document.getElementById("temprature").style.maxWidth = "100%";
    document.getElementById("temprature").style.height = "20vh";


} 
getRandTemp(-5,32);

let temp = getRandTemp(min,max);
