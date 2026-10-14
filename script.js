let currentPage = 0;
const pages = document.querySelectorAll('.page-content');

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });

  if (index === pages.length - 1) {
    makeConfetti();
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function restart() {
  currentPage = 0;
  showPage(currentPage);
}

function makeConfetti() {
  const symbols = ['🌻', '✨', '💛', '🌼', '🎉'];
  for (let i = 0; i < 22; i++) {
    const item = document.createElement('span');
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.position = 'fixed';
    item.style.left = Math.random() * 100 + 'vw';
    item.style.top = '-30px';
    item.style.fontSize = (16 + Math.random() * 16) + 'px';
    item.style.zIndex = '20';
    item.style.pointerEvents = 'none';
    item.style.transition = 'transform 3s linear, opacity 3s linear';
    document.body.appendChild(item);

    setTimeout(() => {
      item.style.transform =
        `translate(${(Math.random() - .5) * 180}px, ${window.innerHeight + 80}px) rotate(${Math.random() * 720}deg)`;
      item.style.opacity = '0';
    }, 30);

    setTimeout(() => item.remove(), 3200);
  }
}
