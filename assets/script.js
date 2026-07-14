document.getElementById("year").textContent = new Date().getFullYear();

async function renderWork() {
  const grid = document.getElementById("work-grid");
  let items = [];
  try {
    const res = await fetch("data/work.json");
    items = await res.json();
  } catch (err) {
    console.error("Could not load work.json", err);
    return;
  }

  grid.innerHTML = items
    .map(
      (item) => `
      <article class="work-card">
        <div class="video-frame">
          <iframe
            src="https://drive.google.com/file/d/${item.id}/preview"
            allow="autoplay"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
        <div class="meta">
          <span class="tag">${item.tag}</span>
          <div class="title">${item.title}</div>
        </div>
      </article>
    `
    )
    .join("");
}

renderWork();
