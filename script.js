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

  // Matrix Effect with Scroll Optimization
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  
  // Enhanced configuration
  const config = {
    baseSpeed: 0.4,
    speedVariation: 0.2,
    smoothness: 0.08,
    resetProbability: 0.98,
    colors: ['#5e35b1', '#3949ab', '#7e57c2', '#4527a0'],
    chars: "01{}[]()<>/*+-=%@#$",
    fontSize: {
      mobile: 14,
      desktop: 18
    }
  };

  // State variables
  let fontSize, columns, drops;
  let lastFrameTime = 0;
  let animationId;
  let isScrolling = false;
  let lastScrollTime = 0;
  const scrollDebounceTime = 100;

  // Initialize matrix
  function initMatrix() {
    fontSize = window.innerWidth < 768 ? config.fontSize.mobile : config.fontSize.desktop;
    columns = Math.floor(window.innerWidth / fontSize);
    drops = Array(columns).fill(0);
    resizeCanvas();
    animate();
  }

  // Responsive canvas setup
  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
    
    // Recalculate on resize
    fontSize = window.innerWidth < 768 ? config.fontSize.mobile : config.fontSize.desktop;
    columns = Math.floor(window.innerWidth / fontSize);
    drops = Array(columns).fill(0);
  }

  // Main drawing function
  function draw(timestamp) {
    if (!lastFrameTime) lastFrameTime = timestamp;
    const deltaTime = timestamp - lastFrameTime;
    lastFrameTime = timestamp;
    
    // Frame rate adjustment
    const frameSpeed = Math.min(deltaTime / 16, 2);
    
    // Clear with fade effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Set font
    ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
    
    // Draw each column
    for (let i = 0; i < columns; i++) {
      const char = config.chars[Math.floor(Math.random() * config.chars.length)];
      ctx.fillStyle = config.colors[Math.floor(Math.random() * config.colors.length)];
      
      // Smooth movement calculation
      const speed = config.baseSpeed + Math.random() * config.speedVariation;
      const targetY = drops[i] + (speed * frameSpeed);
      const currentY = drops[i] + (targetY - drops[i]) * config.smoothness;
      
      // Draw character
      ctx.fillText(char, i * fontSize, currentY * fontSize);
      
      // Reset conditions
      if (currentY * fontSize > canvas.height * 1.5 || Math.random() > config.resetProbability) {
        drops[i] = 0;
      } else {
        drops[i] = targetY;
      }
    }
    
    animationId = requestAnimationFrame(draw);
  }

  // Animation loop
  function animate() {
    if (!animationId) {
      animationId = requestAnimationFrame(draw);
    }
  }

  // Scroll detection for mobile optimization
  window.addEventListener('scroll', function() {
    isScrolling = true;
    lastScrollTime = Date.now();
    
    // Force redraw on scroll for mobile
    if (window.innerWidth < 768) {
      cancelAnimationFrame(animationId);
      draw(performance.now());
      animate();
    }
  }, { passive: true });

  // Check if scrolling has stopped
  function checkScrollEnd() {
    if (Date.now() - lastScrollTime > scrollDebounceTime) {
      isScrolling = false;
    }
    requestAnimationFrame(checkScrollEnd);
  }
  checkScrollEnd();

  // Handle window resize
  window.addEventListener('resize', function() {
    cancelAnimationFrame(animationId);
    resizeCanvas();
    animate();
  });

  // Initialize matrix effect
  initMatrix();
});

// Prevent double-click zoom
document.addEventListener('dblclick', function(e) {
  e.preventDefault();
}, { passive: false });

// Loader animation
window.addEventListener('load', function() {
  setTimeout(function(){
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'none';
  }, 2500);
});

// Body loaded class
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 2000);
});