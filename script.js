// ===== VARIABLES GLOBALES =====
let isScrolling = false;
let scrollTimeout;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// ===== FUNCIÓN PRINCIPAL DE INICIALIZACIÓN =====
function initializeApp() {
  setupLoader();
  setupNavigation();
  setupScrollEffects();
  setupAnimations();
  setupSkillBars();
  setupMatrixBackground();
  setupFloatingElements();
  setupIntersectionObserver();
}

// ===== LOADER =====
function setupLoader() {
  window.addEventListener('load', function() {
    setTimeout(function(){
      const loader = document.querySelector('.loader');
      if (loader) {
        loader.style.display = 'none';
      }
      document.body.classList.add('loaded');
    }, 2500);
  });
}

// ===== NAVEGACIÓN =====
function setupNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle del menú móvil
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
      
      // Animación del hamburger
      const spans = this.querySelectorAll('span');
      spans.forEach((span, index) => {
        if (this.classList.contains('active')) {
          if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (index === 1) span.style.opacity = '0';
          if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          span.style.transform = 'none';
          span.style.opacity = '1';
        }
      });
    });
  }
  
  // Smooth scrolling para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Cerrar menú móvil si está abierto
        if (navLinks) navLinks.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
        
        // Scroll suave al objetivo
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Efecto de sombra en navbar al hacer scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      }
    });
  }
  
  // Resaltar sección activa en navegación
  highlightActiveSection();
}

// ===== EFECTOS DE SCROLL =====
function setupScrollEffects() {
  window.addEventListener('scroll', function() {
    if (!isScrolling) {
      isScrolling = true;
      document.body.classList.add('scrolling');
    }
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      isScrolling = false;
      document.body.classList.remove('scrolling');
    }, 150);
    
    // Parallax para elementos flotantes
    updateFloatingElements();
  });
}

// ===== ANIMACIONES =====
function setupAnimations() {
  // Animación de entrada para elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observar elementos para animación
  document.querySelectorAll('.about-card, .skill-card, .project-card, .contact-card, .stat-item').forEach(el => {
    observer.observe(el);
  });
}

// ===== BARRAS DE HABILIDADES =====
function setupSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target.getAttribute('data-progress');
        entry.target.style.width = progress + '%';
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => {
    skillObserver.observe(bar);
  });
}

// ===== FONDO MATRIX =====
function setupMatrixBackground() {
  const canvas = document.getElementById('matrix');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Configurar canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }
  
  resizeCanvas();
  
  // Caracteres para el efecto matrix
  const chars = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ∀∂∃∅∆∇∈∉∋∏∑−∓∗√∝∞∠∧∨∩∪∫∴∼≅≈≠≡≤≥⊂⊃⊆⊇⊕⊗⊥⋅€¥¢£$₿฿ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω♔♕♖♗♘♙♚♛♜♝♞♟♠♣♥♦♤♧♢♩♪♫♬♭♮♯01⎈⎉⎊⏣⏤⏥⏦⏧⏨";
  const fontSize = window.innerWidth < 768 ? 16 : 20;
  const columns = Math.floor(window.innerWidth / fontSize);
  const drops = Array(columns).fill(0);
  
  function getMatrixColor() {
    const colors = [
      '#5e35b1',
      '#3949ab',
      '#7e57c2',
      '#4527a0'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
    
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = getMatrixColor();
      
      const x = i * fontSize;
      ctx.fillText(char, x, y);
      
      if (y > canvas.height || Math.random() > 0.975) {
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
  
  // Manejar redimensionamiento
  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    resizeCanvas();
    animate();
  });
}

// ===== ELEMENTOS FLOTANTES =====
function setupFloatingElements() {
  const floatingElements = document.querySelectorAll('.floating-element');
  
  floatingElements.forEach(element => {
    const speed = parseFloat(element.getAttribute('data-speed')) || 1;
    let time = 0;
    
    function animate() {
      time += 0.01 * speed;
      const x = Math.sin(time) * 20;
      const y = Math.cos(time) * 20;
      
      element.style.transform = `translate(${x}px, ${y}px) rotate(${time * 50}deg)`;
      requestAnimationFrame(animate);
    }
    
    animate();
  });
}

// ===== OBSERVADOR DE INTERSECCIÓN =====
function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        
        // Animaciones específicas por tipo de elemento
        if (entry.target.classList.contains('about-card')) {
          entry.target.style.animationDelay = '0.1s';
        }
        if (entry.target.classList.contains('skill-card')) {
          entry.target.style.animationDelay = '0.2s';
        }
        if (entry.target.classList.contains('project-card')) {
          entry.target.style.animationDelay = '0.3s';
        }
      }
    });
  }, observerOptions);
  
  // Observar elementos
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
}

// ===== ACTUALIZAR ELEMENTOS FLOTANTES =====
function updateFloatingElements() {
  const scrolled = window.pageYOffset;
  const parallax = scrolled * 0.5;
  
  document.querySelectorAll('.floating-element').forEach(element => {
    const speed = parseFloat(element.getAttribute('data-speed')) || 1;
    element.style.transform = `translateY(${parallax * speed}px)`;
  });
}

// ===== RESALTAR SECCIÓN ACTIVA =====
function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  
  function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Ejecutar al cargar
}

// ===== EFECTOS DE HOVER AVANZADOS =====
function setupAdvancedHoverEffects() {
  // Efecto de tilt en tarjetas de proyectos
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
  
  // Efecto de partículas en botones
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const particles = 10;
      const rect = this.getBoundingClientRect();
      
      for (let i = 0; i < particles; i++) {
        createParticle(e.clientX - rect.left, e.clientY - rect.top, this);
      }
    });
  });
}

// ===== CREAR PARTÍCULAS =====
function createParticle(x, y, element) {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.background = '#5e35b1';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '1000';
  
  element.style.position = 'relative';
  element.appendChild(particle);
  
  const angle = Math.random() * Math.PI * 2;
  const velocity = Math.random() * 100 + 50;
  const vx = Math.cos(angle) * velocity;
  const vy = Math.sin(angle) * velocity;
  
  let opacity = 1;
  let scale = 1;
  
  function animateParticle() {
    opacity -= 0.02;
    scale -= 0.01;
    
    particle.style.opacity = opacity;
    particle.style.transform = `translate(${vx * (1 - opacity)}px, ${vy * (1 - opacity)}px) scale(${scale})`;
    
    if (opacity > 0) {
      requestAnimationFrame(animateParticle);
    } else {
      particle.remove();
    }
  }
  
  animateParticle();
}

// ===== PREVENIR DOBLE CLICK =====
document.addEventListener('dblclick', function(e) {
  e.preventDefault();
}, { passive: false });

// ===== INICIALIZAR EFECTOS AVANZADOS =====
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    setupAdvancedHoverEffects();
  }, 1000);
});

// ===== UTILIDADES =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===== MANEJADOR DE ERRORES =====
window.addEventListener('error', function(e) {
  console.error('Error en la aplicación:', e.error);
});

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
  window.addEventListener('load', function() {
    setTimeout(function() {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log('Tiempo de carga:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }, 0);
  });
} 