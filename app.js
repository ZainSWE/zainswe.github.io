window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("navbar").classList.toggle("active");
  });
});

const toggleBtn = document.getElementById('theme-toggle');

function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = 'Mode: Dark';
  } else {
    document.documentElement.removeAttribute('data-theme');
    toggleBtn.textContent = 'Mode: Light';
  }
  localStorage.setItem('theme', mode);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');

// Toggle on click
toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

window.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => el.classList.add('visible'));
});

const portrait = document.querySelector('.portrait');

portrait.addEventListener('mousemove', (e) => {
  const rect = portrait.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  const rotateX = -y * 30;
  const rotateY = x * 30;
  portrait.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

portrait.addEventListener('mouseleave', () => {
  portrait.style.transform = '';
});
