/*
    Please write all of your website related scripts in this file. DO NOT write anything script related in code-artist.js
*/


/* Scripts related to the navigaton var*/
const navButtons = document.getElementsByClassName('nav-buttons');
const currentPath = window.location.href;
for (let i = 0; i < navButtons.length; i++) {
    const link = navButtons[i].href;

    if (link === currentPath) {
        navButtons[i].style.color = 'red';
    }
}
/* Navigation script ends here*/

/*code for colot theme button */

var darkmode = "inactive"
var time = new Date().getHours();
var button = document.getElementById("darkmodebutton")



const switchdarkmode = () => {
    document.getElementById('dmp').style.display = "block"
    document.getElementById('lmp').style.display = "none"
    document.body.style.backgroundColor = "rgb(128,128,128)"
    darkmode = "active"
}
const switchlightmode = () => {
    document.getElementById('dmp').style.display = "none"
    document.getElementById('lmp').style.display = "block"
    document.body.style.backgroundColor = "rgb(255,255,255)"
    darkmode = "inactive"
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
    if (time >= 0 && time < 12) {
        document.getElementById("greeting-message").innerText = "Good Morning!"
    }
    if (time >= 12 && time < 18) {
        document.getElementById("greeting-message").innerText = "Good Afternoon!"
    }
    if (time >= 18 && time < 21) {
        document.getElementById("greeting-message").innerText = "Good Evening!"
    }
    else {
        document.getElementById("greeting-message").innerText = "Good Evening!"
    }
});
function timeout() {
    setTimeout(() => {
        document.getElementById("greeting-message").style.opacity = "0"

    }, 700);
    setTimeout(() => {
        document.getElementById("greeting-message").style.display = "none"
    }, 1400);


}
timeout()

/*code for greeting screen ends*/

