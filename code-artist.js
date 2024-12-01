/*
    (c)2024 by Yusif Mehdiyev
    (c)2024 by Araz Yusubov 
    This file contains all of the code about the generation of the code art for the bonus task
    NOTE: DO NOT WRITE ANYTHING SCRIPT RELATED here. Keep your website design stuff in scripts.
*/


// Our canvas
var canvas = document.getElementById("art-canvas");
// Our cartesian plane
var cartesianPlane = canvas.getContext("2d");
// A point class representing a point in a cartesian plane.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// Sets the value of the center again, for solving the weird issue below
function updateCenter() {
    center.x = cartesianPlane.canvas.width / 2;
    center.y = cartesianPlane.canvas.height / 2 - 200;
}
// A function that draws a circle
function drawCircle(center, radius) {
    // Start drawing our path
    cartesianPlane.beginPath();
    // To draw circle, we add bunch of rotated radii to the center position, total 360 points
    // We use trigonometric functions for this purpose
    for (let i = 0; i < 360; i++) {
        let angle = i * Math.PI / 180;
        let x = center.x + radius * Math.cos(angle);
        let y = center.y + radius * Math.sin(angle);
        // This saves the point
        cartesianPlane.lineTo(x, y);
    }
    cartesianPlane.closePath();
    // We draw our entire collection of points here
    cartesianPlane.stroke();

}
// Random color generator
// Very self-explanatory, we just take a random number and put in the color values.
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

// This increases contrast each time with i
// It sort of adds shadows
function updateColor(i) {
    i = i / 15;
    r = r + i;
    g = g + i;
    b = b + i;
    return `rgb(${r}, ${g}, ${b})`;
}

// Draws a snow flake looking shape , it is just a rotaiton of circle 5 times in a center.
function drawFlake(center, radius, rotateN) {
    for (let i = 60; i < 360; i += 60) {
        // rotateN draws the flake in a more rotated way
        // We substract by 60 to align it Y axis wise
        let angle = (i - 60 + rotateN) * Math.PI / 180;
        center.x = center.x + radius * Math.cos(angle);
        center.y = center.y + radius * Math.sin(angle);
        drawCircle(center, radius);
    }
    //FIXME:
    // The above loop changes the center of the cartesian plane
    // It could be done better, but as a temporary solution,
    // We have to set it back to the original center of the canvas/plane
    updateCenter();
}

// Repeats drawing the flakes with adding angle "rotate" in loops
function drawFlakeLoop(center, radius, loop, rotate) {
    for (let j = 0; j < loop; j++) {
        drawFlake(center, radius, j + rotate);
        // We use our updateColor function to generate shades(sort of)
        cartesianPlane.strokeStyle = updateColor(j);
    }
}

// The entire purpose of this object is to visualize things better for the author :))
var center = new Point(cartesianPlane.canvas.width / 2, cartesianPlane.canvas.height / 2);
updateCenter();
var radius = 200;
cartesianPlane.strokeStyle = updateColor(0);

drawFlakeLoop(center, radius, 60, 0);






