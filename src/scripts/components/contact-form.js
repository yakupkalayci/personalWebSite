export default function contactForm() {
  const form = document.querySelector(".contact-form");

  form.addEventListener("input", (e) => {
    e.target.classList.remove("has-error");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData(form);
      const url = form.getAttribute("action");
      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.classList.add("loading");
      submitBtn.setAttribute("disabled", true);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          const formResponse = form.querySelector(".form-response");
          formResponse.classList.remove("d-none");
          setTimeout(() => {
            formResponse.classList.add("d-none");
          }, 3000);
          if (response.ok) {
            formResponse.classList.add("success");
            formResponse.innerText = "Form submitted successfully.";
          } else {
            formResponse.classList.add("error");
            formResponse.innerText = "Something went wrong!";
          }
        })
        .catch((err) => {
          console.log(err);
          formResponse.classList.add("error");
          formResponse.innerText = "Something went wrong!";
        })
        .finally(() => {
          form.reset();
          submitBtn.classList.remove("loading");
          submitBtn.removeAttribute("disabled");
        });
    }
  });
}

function validateForm() {
  const form = document.querySelector(".contact-form");

  let isValid = true;

  const emptyControls = form.querySelectorAll('[data-valid="empty"]');

  emptyControls.forEach((input) => {
    if (!input.value) {
      isValid = false;
      input.classList.add("has-error");
    }
  });

  return isValid;
}
