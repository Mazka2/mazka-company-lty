// ==== COLOR PALETTES ====
const palettes = [
  {
    id: 'dark',
    vars: {
      '--bg': '#071033',
      '--fg': '#e6eef8',
      '--muted': 'rgba(230,238,248,0.7)',
      '--accent-1': '#7c3aed',
      '--accent-2': '#2563eb',
      '--accent-3': '#ff7a42'
    }
  },
  {
    id: 'light',
    vars: {
      '--bg': '#f6fbff',
      '--fg': '#06223a',
      '--muted': 'rgba(6,34,58,0.6)',
      '--accent-1': '#8ec5ff',
      '--accent-2': '#60a5fa',
      '--accent-3': '#a5b4fc'
    }
  },
  {
    id: 'lux',
    vars: {
      '--bg': '#050404',
      '--fg': '#f8f3e8',
      '--muted': 'rgba(248,243,232,0.6)',
      '--accent-1': '#a1741a',
      '--accent-2': '#ffd166',
      '--accent-3': '#f6b73c'
    }
  },
  {
    id: 'azure',
    vars: {
      '--bg': '#021834',
      '--fg': '#e6f6ff',
      '--muted': 'rgba(230,246,255,0.7)',
      '--accent-1': '#00b4d8',
      '--accent-2': '#0077b6',
      '--accent-3': '#90e0ef'
    }
  },
  {
    id: 'warm',
    vars: {
      '--bg': '#2a0b00',
      '--fg': '#fff7ef',
      '--muted': 'rgba(255,247,239,0.6)',
      '--accent-1': '#ff7a42',
      '--accent-2': '#ffb366',
      '--accent-3': '#ffdfba'
    }
  }
];

let index = 0;
let autoplay = true;
let timer;

// apply palette smoothly
function applyPalette(p) {
  const root = document.documentElement;
  Object.entries(p.vars).forEach(([key, value]) =>
    root.style.setProperty(key, value)
  );

  // animated gradient layers
  const layers = document.querySelectorAll('.bg-gradient .g');
  layers.forEach((layer) => {
    layer.style.background = `linear-gradient(120deg, ${p.vars['--accent-1']}, ${p.vars['--accent-2']} 50%, ${p.vars['--accent-3']})`;
  });
}

function nextPalette() {
  index = (index + 1) % palettes.length;
  applyPalette(palettes[index]);
}

function prevPalette() {
  index = (index - 1 + palettes.length) % palettes.length;
  applyPalette(palettes[index]);
}

function startAuto() {
  autoplay = true;
  clearInterval(timer);
  timer = setInterval(nextPalette, 5200);
  document.getElementById("playPause").textContent = "Pause";
}

function stopAuto() {
  autoplay = false;
  clearInterval(timer);
  document.getElementById("playPause").textContent = "Play";
}

document.getElementById("nextPalette").onclick = () => {
  nextPalette();
  stopAuto();
};
document.getElementById("prevPalette").onclick = () => {
  prevPalette();
  stopAuto();
};
document.getElementById("playPause").onclick = () => {
  autoplay ? stopAuto() : startAuto();
};

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";
  setTimeout(() => {
    this.reset();
    status.textContent = "Sent!";
  }, 800);
});

document.getElementById("year").textContent = new Date().getFullYear();

// start
applyPalette(palettes[index]);
startAuto();

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
        }
