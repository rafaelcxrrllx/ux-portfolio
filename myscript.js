// function that shows and hides navigation menu
// function showMenu() {
//   var menu = document.getElementById("menu");
//   var nav = document.getElementById("nav");

//   if (menu.style.display === "block") {
//     menu.style.display = "none";
//     nav.style.backgroundColor = ""
//   } else {
//     menu.style.display = "block";
//     nav.style.backgroundColor = "#648D8D"
//   }
// }

function openBio() {
	window.location.href = "Projects.html";
}

function openIndex() {
	window.location.href = "index.html";
}

function openProjects() {
	window.location.href = "Projects.html";
}

function About() {
	window.location.href = "About.html";
}

function txtlead() {
    window.location.href = "txt-design-lead.html";
}

function designUCI() {
    window.location.href = "design-uci.html";
}

function research() {
    window.location.href = "research-assistant.html";
}

function hustle() {
    window.location.href = "hustle-n-code.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const toggleButton = document.querySelector(".hamburger");
    const toggleExit = document.querySelector("#exit-button");

    toggleButton.addEventListener("click", function () {
    	 event.preventDefault();
        if (menu.style.right === "-280px" || !menu.style.right) {
            menu.style.right = "0";
        } else {
            menu.style.right = "-280px";
        }
    });

    toggleExit.addEventListener("click", function () {
    	 event.preventDefault();
        if (menu.style.right === "-280px" || !menu.style.right) {
            menu.style.right = "0";
        } else {
            menu.style.right = "-280px";
        }
    });
    exit.addEventListener("click", function () {
    	 event.preventDefault();
        if (menu.style.right === "-280px" || !menu.style.right) {
            menu.style.right = "0";
        } else {
            menu.style.right = "-280px";
        }
    });
    
});




