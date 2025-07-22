async function getBlogs() {
  const url = "https://mediumpostsapi.vercel.app/api/ykpklyc18";
  const res = await fetch(url);
  const response = await res.json();
  const data = response.dataMedium;
  return data;
}

function parseDate(date) {
    const datee = new Date(date);
    const parsedDate = datee.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: "long",
        year: 'numeric'
    });

    return parsedDate;
}

function renderCards(data) {
  const root = document.querySelector(".blog-card-wrapper");
  const fragment = document.createDocumentFragment();

  data.forEach((item) => {
    const { title, date, link, image, description, tags } = item;
    const parsedDate = parseDate(date);

    const div = document.createElement("div");
    div.className = "blog-card";

    div.innerHTML = `
        <img src="${image}" alt="" class="blog-card-img">
        <div class="blog-card-info-wrapper">
          <h5 class="blog-card-title">${title}</h5>
          <div class="blog-card-details">
            <div class="blog-card-tags-wrapper">
              ${
                tags.map(item => `<span>${item}</span>`).join('')
              }
            </div>
            <span class="blog-card-date">${parsedDate}</span>
          </div>
          <p class="blog-card-description">
            ${description}
          </p>
          <a href="${link}" class="blog-card-link">Continue to read..</a>
        </div>
        `;
    fragment.appendChild(div);
  });
  root.appendChild(fragment);
}

export default async function blogCard() {
  const data = await getBlogs();

  if (!data.length) return;

  renderCards(data);
}
