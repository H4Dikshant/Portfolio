document.addEventListener('DOMContentLoaded', () => {
  const fillBars = document.querySelectorAll('.bar-fill');

  fillBars.forEach((bar) => {
    const width = bar.dataset.w || '0';
    requestAnimationFrame(() => {
      bar.style.width = `${width}%`;
    });
  });

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});