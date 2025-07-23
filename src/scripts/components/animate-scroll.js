export default function animateScroll() {
  window.addEventListener("scroll", handleScroll);
}

function handleScroll() {
  const scrollElements = document.querySelectorAll(".animate-scroll");

  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      display(el);
    } else {
      hide(el);
    }
  });
}

function elementInView(el) {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function display(el) {
  el.classList.add("scrolled");
}

function hide(el) {
  el.classList.remove("scrolled");
}
