const themeButton = document.querySelector("#darkModeBtn");
const header = document.querySelector("header");
const mainTitle = document.querySelector(".mainTitle > a");
const projects = document.querySelectorAll(".project");
const projectLinks = document.querySelectorAll(".projectLinks > a");
const articlesContainer = document.querySelector('.articles');
const articles = document.querySelectorAll(".article");

let theme;

const fetchArticles =  async () => {
    const response = await fetch('https://mediumpostsapi.vercel.app/api/ykpklyc18');
    const data = await response.json();
    await addArticles(data.dataMedium);
}

const addArticles = (articlesData) => {
    articlesData.forEach(item => {
        articlesContainer.innerHTML += `<div class="article">
        <div class="articleImg">
          <img src=${item.image} width="300px" height="300px" loading="lazy"/>
        </div>
        <div class="mainArticle">
          <h3>${item.title}</h3>
          <p>${item.description}
            <br /><br /><br />
            <a href=${item.link} target="_blank">Read
              more</a>
          </p>
        </div>
        </div>`
    })
}

document.body.onload = function() {
    fetchArticles();
    if(localStorage.getItem("theme")) {
        theme = JSON.parse(localStorage.getItem("theme"));
        if(theme === "dark") {
            document.body.classList.add("darkMode");
            themeButton.innerHTML = `<i class="fa-sharp fa-solid fa-sun"></i>`
            themeButton.classList.remove("darkMode");
            themeButton.classList.add("lightMode");
            mainTitle.style.color = "rgb(238, 246, 255)";
            changeProjectBackgroundColor("dark");
            changeProjectLinksBackgroundColor("dark");
            changeArticlesBackgroundColor("dark");

        } else if(theme === "light") {
            document.body.classList.remove("darkMode");
            themeButton.innerHTML = `<i class="fa-sharp fa-solid fa-moon"></i>`
            themeButton.classList.add("darkMode");
            themeButton.classList.remove("lightMode");
            document.body.classList.remove("darkMode");
            header.style.borderBottomColor = "rgb(0, 47, 100)";
            mainTitle.style.color = "rgb(0, 47, 100)";
            changeProjectBackgroundColor("light");
            changeProjectLinksBackgroundColor("light");
            changeArticlesBackgroundColor("light");
        }
    } else {
        theme = "light";
        localStorage.setItem("theme", JSON.stringify(theme));
    }
}

const changeTheme = () => {
    if(document.body.classList.contains("darkMode")) {
        themeButton.innerHTML = `<i class="fa-sharp fa-solid fa-moon"></i>`
        themeButton.classList.add("darkMode");
        themeButton.classList.remove("lightMode");
        document.body.classList.remove("darkMode");
        header.style.borderBottomColor = "rgb(0, 47, 100)";
        mainTitle.style.color = "rgb(0, 47, 100)";
        changeProjectBackgroundColor("light");
        changeProjectLinksBackgroundColor("light");
        changeArticlesBackgroundColor("light");

        theme = "light";
        localStorage.setItem("theme", JSON.stringify(theme));

    } else {
        themeButton.innerHTML = `<i class="fa-sharp fa-solid fa-sun"></i>`
        themeButton.classList.remove("darkMode");
        themeButton.classList.add("lightMode");
        document.body.classList.add("darkMode");
        mainTitle.style.color = "rgb(238, 246, 255)";
        changeProjectBackgroundColor("dark");
        changeProjectLinksBackgroundColor("dark");
        changeArticlesBackgroundColor("dark");

        theme = "dark";
        localStorage.setItem("theme", JSON.stringify(theme));

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
    }
    else if(currentMode === "dark") {
        projectLinks.forEach(link => link.classList.add("projectLinksDarkMode"));
    }
}

function changeArticlesBackgroundColor(currentMode) {
    if(currentMode === "light") {
        articles.forEach(article => article.classList.remove("articleDarkMode"));
    }
    else if(currentMode === "dark") {
        articles.forEach(article => article.classList.add("articleDarkMode"));
    }
}

themeButton.addEventListener("click", changeTheme);