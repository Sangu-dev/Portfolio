// Scroll to top on page load/refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Floating Particles Animation
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let animationFrameId;

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.documentElement.scrollHeight;
}

// Particle class
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 0.2 - 0.1;
    this.speedY = Math.random() * 0.2 - 0.1;
    this.opacity = Math.random() * 0.3 + 0.1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around edges
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }

  draw() {
    ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create particles
function initParticles() {
  particles = [];
  const numberOfParticles = Math.floor((canvas.width * canvas.height) / 25000);
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle());
  }
}

// Draw connections between nearby particles
function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        const opacity = (1 - distance / 150) * 0.15;
        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  connectParticles();

  animationFrameId = requestAnimationFrame(animate);
}

// Initialize
resizeCanvas();
initParticles();
animate();

// Resize handler
window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});

// Update canvas height on scroll (for dynamic content)
let resizeTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (canvas.height !== document.documentElement.scrollHeight) {
      canvas.height = document.documentElement.scrollHeight;
    }
  }, 100);
});

// Loading Screen
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    // Remove from DOM after transition
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 800);
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const nav = document.getElementById('nav');

mobileMenuToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    nav.classList.remove('active');
  });
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

const fadeInSections = document.querySelectorAll('.fade-in-section');
fadeInSections.forEach(section => {
  observer.observe(section);
});

// Header background on scroll
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header.style.background = 'rgba(7, 17, 38, 0.95)';
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  } else {
    header.style.background = 'rgba(7, 17, 38, 0.85)';
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Contact form handler with improved feedback
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnLoading = document.getElementById('btn-loading');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Validate
  if (!name || !email || !message) {
    showFormStatus('Please fill in all fields.', 'error');
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline';
  
  // Simulate sending (replace with actual API call if needed)
  setTimeout(() => {
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailto = `mailto:sangamesh123ragam@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mailto
    window.location.href = mailto;
    
    // Reset button state
    submitBtn.disabled = false;
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
    
    // Show success message
    showFormStatus('Your email client has been opened. Please send the message from there!', 'success');
    
    // Reset form
    contactForm.reset();
  }, 1000);
});

function showFormStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = type;
  formStatus.style.display = 'block';
  
  // Hide after 5 seconds
  setTimeout(() => {
    formStatus.style.display = 'none';
  }, 5000);
}

// Accessibility helper - show focus outline when using keyboard
let usingKeyboard = false;

document.body.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    usingKeyboard = true;
    document.body.classList.add('using-keyboard');
  }
});

document.body.addEventListener('mousedown', function() {
  usingKeyboard = false;
  document.body.classList.remove('using-keyboard');
});

// Add dynamic year to footer
const yearElement = document.querySelector('.footer-copyright');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = `© ${currentYear} Sangamesh. All rights reserved.`;
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add hover effect to project cards
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('mouseenter', function() {
    this.style.zIndex = '10';
  });
  project.addEventListener('mouseleave', function() {
    this.style.zIndex = '1';
  });
});

// Animate stats on scroll
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue);
        if (!isNaN(numericValue)) {
          animateValue(stat, 0, numericValue, 1000, finalValue.includes('+'));
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsCard = document.querySelector('.stats-card');
if (statsCard) {
  statsObserver.observe(statsCard);
}

function animateValue(element, start, end, duration, hasPlus) {
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = Math.floor(start + (end - start) * easeOutQuad(progress));
    element.textContent = hasPlus ? current + '+' : current;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

function easeOutQuad(t) {
  return t * (2 - t);
}

// Preload images for better performance
window.addEventListener('load', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.loading !== 'lazy') {
      img.loading = 'eager';
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (nav.classList.contains('active')) {
    if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileMenuToggle.classList.remove('active');
      nav.classList.remove('active');
    }
  }
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
    
    if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active-link'));
      navLink.classList.add('active-link');
    }
  });
}

window.addEventListener('scroll', highlightNavOnScroll);

// Smooth fade-in for hero section after loading
const heroSection = document.querySelector('.hero');
if (heroSection) {
  heroSection.style.opacity = '0';
  heroSection.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    heroSection.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
  }, 900);
}
