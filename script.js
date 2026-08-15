document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const statusSection = document.getElementById('status');
  const bars = document.getElementById('bars');
  const fillBars = document.querySelectorAll('.bar-fill');
  const revealEls = document.querySelectorAll('.reveal');

  const animateBars = () => {
    fillBars.forEach((bar) => {
      const width = bar.dataset.w || '0';
      requestAnimationFrame(() => {
        bar.style.width = `${width}%`;
      });
    });
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');

      if (entry.target === statusSection || entry.target === bars || entry.target.closest('#status')) {
        animateBars();
      }

      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => revealObserver.observe(el));
});