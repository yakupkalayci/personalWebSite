export default function scrollUp() {
  const btn = document.querySelector(".scroll-up");

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      btn.classList.add("active");
    } else {
        btn.classList.remove('active');
    }
  });
}
