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

  // Matrix Effect with Smooth Falling
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  
  // Configuration for smooth animation
  const config = {
    baseSpeed: 0.4,           // Reduced base speed for smoother fall
    speedVariation: 0.3,       // Slight variation between characters
    smoothness: 0.1,           // Controls movement interpolation
    resetProbability: 0.975,   // Chance to reset a column
    colors: [
      '#5e35b1', '#3949ab', '#7e57c2', '#4527a0'
    ],
    chars: "ｦｧｨｩｪｫｬｭｮｯｰ01{}[]()<>/*+-=%@#$"
  };

  // Initialize
  let fontSize = window.innerWidth < 768 ? 16 : 20;
  let columns = Math.floor(window.innerWidth / fontSize);
  let drops = Array(columns).fill(0);
  let lastFrameTime = 0;
  let animationId;

  // Responsive setup
  function resizeCanvas() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(devicePixelRatio, devicePixelRatio);
    
    // Recalculate on resize
    fontSize = window.innerWidth < 768 ? 16 : 20;
    columns = Math.floor(window.innerWidth / fontSize);
    drops = Array(columns).fill(0);
  }

  // Main animation function
  function draw(timestamp) {
    if (!lastFrameTime) lastFrameTime = timestamp;
    const deltaTime = timestamp - lastFrameTime;
    lastFrameTime = timestamp;
    
    // Normalized speed based on frame rate
    const frameSpeed = Math.min(deltaTime / 16, 2);
    
    // Clear with subtle fade effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set font
    ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
    
    // Draw each column
    drops.forEach((y, i) => {
      const char = config.chars[Math.floor(Math.random() * config.chars.length)];
      ctx.fillStyle = config.colors[Math.floor(Math.random() * config.colors.length)];
      
      // Calculate smooth movement
      const speed = config.baseSpeed + Math.random() * config.speedVariation;
      const targetY = y + (speed * frameSpeed);
      const currentY = y + (targetY - y) * config.smoothness;
      
      // Draw character at interpolated position
      ctx.fillText(char, i * fontSize, currentY * fontSize);
      
      // Reset if out of bounds or randomly
      if (currentY * fontSize > canvas.height * 1.3 || Math.random() > config.resetProbability) {
        drops[i] = 0;
      } else {
        drops[i] = targetY;
      }
    });
    
    animationId = requestAnimationFrame(draw);
  }

  // Start everything
  resizeCanvas();
  animate();

  function animate() {
    animationId = requestAnimationFrame(draw);
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    resizeCanvas();
    animate();
  });
});

// Prevent double-click zoom
document.addEventListener('dblclick', function(e) {
  e.preventDefault();
}, { passive: false });

// Loader animation
window.addEventListener('load', function() {
  setTimeout(function(){
    document.querySelector('.loader').style.display = 'none';
  }, 2500);
});

// Body loaded class
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 2000);
});