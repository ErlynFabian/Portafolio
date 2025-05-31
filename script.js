document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
        
        // Scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add shadow to navbar on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
});

document.addEventListener('dblclick', function(e) {
  e.preventDefault();
}, { passive: false });

window.addEventListener('load', function() {
  setTimeout(function(){
    document.querySelector('.loader').style.display = 'none';
  }, 2500);
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 2000);
});

// Matrix effect with fixed position
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Make canvas fixed position
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1'; // Ensure it stays behind other content

function resizeCanvas() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.scale(devicePixelRatio, devicePixelRatio);
}
resizeCanvas();

const chars = "ｦｧｨｩｪｫｬｭｮｯｰ01{}[]()<>/*+-=%@#$";
const fontSize = window.innerWidth < 768 ? 16 : 20;
const columns = Math.floor(window.innerWidth / fontSize);
const drops = Array(columns).fill(0);

function getMatrixColor() {
  const colors = [
    '#5e35b1', /* Morado principal */
    '#3949ab', /* Azul/morado */
    '#7e57c2', /* Morado claro */
    '#4527a0'  /* Morado oscuro */
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function draw() {
  // Clear with semi-transparent background for trail effect
  ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
  
  drops.forEach((y, i) => {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillStyle = getMatrixColor();
    
    // Calculate x position considering device pixel ratio
    const x = i * fontSize * devicePixelRatio;
    const adjustedY = y * fontSize * devicePixelRatio;
    
    ctx.fillText(char, x, adjustedY);
    
    if (adjustedY > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i] += 1 + Math.random() * 0.5;
  });
}

let animationId;
function animate() {
  draw();
  animationId = requestAnimationFrame(animate);
}
animate();

// Handle resize properly
window.addEventListener('resize', () => {
  cancelAnimationFrame(animationId);
  resizeCanvas();
  animate();
});