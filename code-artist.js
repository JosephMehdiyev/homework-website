/*
    (c)2024 by Yusif Mehdiyev
    (c)2024 by Araz Yusubov (the old code, I'll delete it later tho)
    This file contains all of the code about the generation of the code art for the bonus task
    NOTE: DO NOT WRITE ANYTHING SCRIPT RELATED here. Keep your website stuff in scripts.js
    
*/
// Get reference to the 2D context of the canvas
var canvas = document.getElementById("art-canvas");
var context = canvas.getContext("2d");
// Set the color for drawing lines using red, green and blue components
// context.strokeStyle = 'rgb(255, 0, 0)';

// Global variables for Artist's position and orientation
//

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


// A point class representing a point in a cartesian plane.
class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// A artist class representing our drawing thing/robot/turtle/artist or whatever you call it
class artist {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

context.strokeStyle = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`;
DrawSpiral(context);






