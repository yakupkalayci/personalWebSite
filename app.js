const themeButton = document.querySelector("#darkModeBtn");
const header = document.querySelector("header");
const mainTitle = document.querySelector(".mainTitle > a");
const projects = document.querySelectorAll(".project");
const projectLinks = document.querySelectorAll(".projectLinks > a");

const changeTheme = () => {
    if(document.body.classList.contains("darkMode")) {
        themeButton.textContent = "Dark";
        themeButton.classList.add("darkMode");
        themeButton.classList.remove("lightMode");
        document.body.classList.remove("darkMode");
        header.style.borderBottomColor = "rgb(0, 47, 100)";
        mainTitle.style.color = "rgb(0, 47, 100)";
        changeProjectBackgroundColor("light");
        changeProjectLinksBackgroundColor("light");
    } else {
        themeButton.textContent = "Light";
        themeButton.classList.remove("darkMode");
        themeButton.classList.add("lightMode");
        document.body.classList.add("darkMode");
        header.style.borderBottomColor = "rgb(238, 246, 255)";
        mainTitle.style.color = "rgb(238, 246, 255)";
        changeProjectBackgroundColor("dark");
        changeProjectLinksBackgroundColor("dark");
    }
}

function changeProjectBackgroundColor(currentMode) {
    if(currentMode === "light") {
        projects.forEach(project => project.classList.remove("projectDarkMode"));
    }
    else if(currentMode === "dark") {
        projects.forEach(project => project.classList.add("projectDarkMode"));
    }
}

function changeProjectLinksBackgroundColor(currentMode) {
    if(currentMode === "light") {
        projectLinks.forEach(link => link.classList.remove("projectLinksDarkMode"));
        console.log("çalıştı");
    }
    else if(currentMode === "dark") {
        projectLinks.forEach(link => link.classList.add("projectLinksDarkMode"));
    }
}

themeButton.addEventListener("click", changeTheme);