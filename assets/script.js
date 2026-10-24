document.getElementById("year").textContent = new Date().getFullYear();

async function renderWork(gridId, dataUrl) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  let items = [];
  try {
    const res = await fetch(dataUrl);
    items = await res.json();
  } catch (err) {
    console.error(`Could not load ${dataUrl}`, err);
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
        </div>
      </article>
    `
    )
    .join("");
}

renderWork("winners-grid", "data/winners.json");
renderWork("work-grid", "data/work.json");
