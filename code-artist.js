/*
    (c)2024 by Yusif Mehdiyev
    (c)2024 by Araz Yusubov (the old code, I'll delete it later tho)
    This file contains all of the code about the generation of the code art for the bonus task
    NOTE: DO NOT WRITE ANYTHING SCRIPT RELATED here. Keep your website stuff in scripts.
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

// A function that draws a circle
function drawCircle(center, radius) {
    // Start drawing our path
    cartesianPlane.beginPath();
    // To draw circle, we add bunch of rotated radii to the center position
    // We use trigonometric functions for this purpose
    for (let i = 0; i <= 360; i++) {
        let angle = i * Math.PI / 180;
        let x = center.x + radius * Math.cos(angle);
        let y = center.y + radius * Math.sin(angle);
        // Dunno why but there was a duplicate circle without this if statements
        // Changing above loop inequality to " < " from " <= " did not help too.
        // This if statements fixes it
        if (i === 0) {
            cartesianPlane.moveTo(x, y);
        } else {
            cartesianPlane.lineTo(x, y);
        }
    }
    cartesianPlane.closePath();
    // We draw our path here
    cartesianPlane.stroke();
}


var center = new Point(cartesianPlane.canvas.width / 2, cartesianPlane.canvas.height / 2);
var radius = 150;
cartesianPlane.strokeStyle = `rgb(${0}, ${0}, ${255})`;

for (let j = 0; j <= 24; j++) {
    for (let i = 0; i <= 360; i += 60) {

        let angle = i * Math.PI / 180 + j;
        drawCircle(center, radius);
        center.x = center.x + radius * Math.cos(angle);
        center.y = center.y + radius * Math.sin(angle);
    }
    // The above loop changes the center of the cartesian plane
    // It could be done better, but as a secondary solution,
    // We have to set it back to the original center of the canvas/plane
    center.x = cartesianPlane.canvas.width / 2;
    center.y = cartesianPlane.canvas.height / 2;
}




