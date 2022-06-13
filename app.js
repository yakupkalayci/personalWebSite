const themeButton = document.querySelector("#darkModeBtn");
const header = document.querySelector("header");
const mainTitle = document.querySelector(".mainTitle > a");

const changeTheme = () => {
    if(document.body.classList.contains("darkMode")) {
        themeButton.textContent = "Dark";
        themeButton.classList.add("darkMode");
        themeButton.classList.remove("lightMode");
        document.body.classList.remove("darkMode");
        header.style.borderBottomColor = "rgb(0, 47, 100)";
        mainTitle.style.color = "rgb(0, 47, 100)";
    } else {
        themeButton.textContent = "Light";
        themeButton.classList.remove("darkMode");
        themeButton.classList.add("lightMode");
        document.body.classList.add("darkMode");
        header.style.borderBottomColor = "rgb(238, 246, 255)";
        mainTitle.style.color = "rgb(238, 246, 255)";
    }
}

themeButton.addEventListener("click", changeTheme);