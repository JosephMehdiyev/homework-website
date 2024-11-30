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

/*code for color theme button */
var time = new Date().getHours()
var darkmode = localStorage.getItem("darkmode") 
var button = document.getElementById("darkmodebutton")
var path = window.location.pathname


const switchdarkmode = () => {
    document.getElementById('dmp').style.display = "block"
    document.getElementById('lmp').style.display = "none"
    document.body.style.backgroundColor = "rgb(0,0,0)"
    document.body.style.color = "rgb(230,230,230)"
    localStorage.setItem("darkmode", "active") 
    darkmode = "active"
    if(path==="/team-members.html"){
        const elements = document.querySelectorAll('.card')
        elements.forEach(element => {
            element.style.boxShadow = "rgba(50, 50, 50, 50.05) 0px 4px 20px 7px "; 
          });
    }
    if(path==="/web-project.html"){
        document.getElementById('lightca').style.display = "inline-block"
        document.getElementById('darkca').style.display = "none"
    }

};

const switchlightmode = () => {
    document.getElementById('dmp').style.display = "none"
    document.getElementById('lmp').style.display = "block"
    document.body.style.backgroundColor = "rgb(255,255,255)"
    document.body.style.color = "rgb(0,0,0)"
    localStorage.setItem("darkmode", "inactive")
    darkmode = "inactive" 
    if(path==="/team-members.html"){
        const elements = document.querySelectorAll('.card')
        elements.forEach(element => {
            element.style.boxShadow = " rgba(0, 0, 0, 0.05) 0px 4px 20px 7px "; 
          });
    }
    if(path==="/web-project.html"){
        document.getElementById('lightca').style.display = "none"
        document.getElementById('darkca').style.display = "inline-block"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    if (darkmode === "active") {
        switchdarkmode()
    } else {
        switchlightmode()
    }

    const button = document.getElementById("darkmodebutton");
    button.addEventListener("click", () => {
        if (darkmode === "active") {
            switchlightmode()
        } else {
            switchdarkmode()
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
    if (time >= 21 && time <= 23){
        document.getElementById("greeting-message").innerText = "Good Night!"
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

