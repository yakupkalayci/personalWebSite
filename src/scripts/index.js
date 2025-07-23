import header from "./common/header.js";
import projectSlider from "./components/projects-slider.js";
import techStackSlider from "./components/techStack-slider.js";
import blogCard from "./components/blog-card.js";
import contactForm from "./components/contact-form.js";
import "../styles/app.scss";

header();

document.addEventListener("DOMContentLoaded", () => {
  projectSlider();
  techStackSlider();
  blogCard();
  contactForm();
});
