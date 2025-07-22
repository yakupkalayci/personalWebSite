import header from "./common/header.js";
import projectSlider from "./components/projects-slider.js";
import blogCard from "./components/blog-card.js";
import '../styles/app.scss';

header();

document.addEventListener('DOMContentLoaded', () => {
    projectSlider();
    blogCard();
});