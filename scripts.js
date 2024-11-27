/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}
/*code for colot theme button */
var darkmode="inactive"
var time = new Date().getHours();
var button = document.getElementById("darkmodebutton")



const switchdarkmode =  ()=>{            
    document.getElementById('dmp').style.display = "block"
    document.getElementById('lmp').style.display = "none"
    document.body.style.backgroundColor = "rgb(128,128,128)"
    darkmode= "active"
}
const switchlightmode =  ()=>{
    document.getElementById('dmp').style.display = "none"
    document.getElementById('lmp').style.display = "block"
    document.body.style.backgroundColor = "rgb(255,255,255)"
    darkmode= "inactive"
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("darkmodebutton");

        button.addEventListener("click", () => {
            if (darkmode === "active") {
                switchlightmode();
            } else {
                switchdarkmode();
            }
        });        
    });


/*code for color theme button ends*/
/*code for greeting screen */
document.addEventListener("DOMContentLoaded", () => {
if(time>=0 && time<12){
    document.getElementById("greeting-message").innerText = "Good Morning!"
}
if(time>=12 && time<18){
    document.getElementById("greeting-message").innerText = "Good Afternoon!"
}
if(time>=18 && time<21){
    document.getElementById("greeting-message").innerText = "Good Evening!"
}
else{
    document.getElementById("greeting-message").innerText = "Good Evening!"
}
});
function timeout(){
    setTimeout(()=>{
        document.getElementById("greeting-message").style.opacity = "0"

    },700);
    setTimeout(()=>{
        document.getElementById("greeting-message").style.display = "none"
    },1400);
    
   
}
timeout()

/*code for greeting screen ends*/

