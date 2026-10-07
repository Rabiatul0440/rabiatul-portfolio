/* ============================================
   PORTFOLIO — RABIATUL ADAWIYAH
   PINK BARBIE PRO 💖
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  console.log('💖 Barbie Pro Portfolio — Rabiatul Adawiyah');

  /* ============ PRELOADER ============ */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 900);
  });

  /* ============ CUSTOM CURSOR ============ */
  const cursor = document.getElementById('customCursor');
  const cursorDot = document.getElementById('customCursorDot');
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effect on interactive elements
  document.querySelectorAll('a, button, .project-card, .service-card, .stat-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorDot.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorDot.classList.remove('hover');
    });
  });

  /* ============ SCROLL PROGRESS ============ */
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = percent + '%';
  });

  /* ============ BACK TO TOP ============ */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============ DARK MODE TOGGLE ============ */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    }
  });

  /* ============ TYPING EFFECT ============ */
  const typingText = document.getElementById('typingText');
  const phrases = [
    'IT Professional & UI/UX Enthusiast',
    'Frontend Developer',
    'Business Analyst',
    'Project Coordinator',
    'Problem Solver 💖'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentPhrase.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 400;
    }
    setTimeout(typeEffect, speed);
  }
  typeEffect();

  /* ============ STATS COUNTER ============ */
  const statNumbers = document.querySelectorAll('.stat-number');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target + '+';
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current);
          }
        }, 30);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(n => statObserver.observe(n));

  /* ============ PROGRESS BARS ============ */
  const progressFills = document.querySelectorAll('.progress-fill');
  progressFills.forEach(fill => {
    const originalWidth = fill.style.width || '0%';
    fill.dataset.targetWidth = originalWidth;
    fill.style.width = '0%';
  });

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const targetWidth = fill.dataset.targetWidth;
        fill.style.transition = 'width 1.4s cubic-bezier(0.22, 1, 0.36, 1)';
        fill.style.width = targetWidth;
        progressObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });
  progressFills.forEach(fill => progressObserver.observe(fill));

  /* ============ SMOOTH SCROLL ============ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ============ FADE-IN CARDS ============ */
  const cards = document.querySelectorAll(
    '.experience-card, .project-card, .soft-card, .service-card, .cert-card, .stat-card, .timeline-item'
  );
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 80);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(card => cardObserver.observe(card));

  /* ============ CURSOR SPARKLES ============ */
  const sparkleColors = ['#ff1493', '#ff69b4', '#ffc0e0', '#ffffff'];
  const sparkleIcons = ['✦', '✧', '💖', '⋆'];
  let sparkleCount = 0;

  document.addEventListener('mousemove', (e) => {
    if (sparkleCount % 6 !== 0) { sparkleCount++; return; }
    sparkleCount++;

    const sparkle = document.createElement('div');
    sparkle.textContent = sparkleIcons[Math.floor(Math.random() * sparkleIcons.length)];
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
    sparkle.style.fontSize = (Math.random() * 12 + 8) + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '99999';
    sparkle.style.transition = 'all 1s ease-out';
    sparkle.style.opacity = '0.9';
    sparkle.style.textShadow = '0 0 10px #ff1493';
    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {
      sparkle.style.transform = `translate(${(Math.random() - 0.5) * 60}px, ${-Math.random() * 60 - 20}px) scale(0) rotate(${Math.random() * 360}deg)`;
      sparkle.style.opacity = '0';
    });
    setTimeout(() => sparkle.remove(), 1000);
  });

  /* ============ CONTACT FORM — UPDATED FOR FORMSPREE ============ */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Set _replyto hidden field to user's email
      const emailInput = contactForm.querySelector('input[name="email"]');
      const replyToInput = contactForm.querySelector('input[name="_replyto"]');
      if (emailInput && replyToInput) {
        replyToInput.value = emailInput.value;
      }

      formStatus.textContent = '💌 Sending...';
      formStatus.style.color = '#ff1493';

      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formStatus.textContent = '💖 Message sent! I will get back to you soon.';
          formStatus.style.color = '#10b981';
          contactForm.reset();
        } else {
          // Try to get error details from Formspree
          const data = await response.json().catch(() => ({}));
          const errorMsg = data.errors 
            ? data.errors.map(err => err.message).join(', ') 
            : 'Something went wrong';
          formStatus.textContent = `❌ ${errorMsg}. Try email instead.`;
          formStatus.style.color = '#ef4444';
          console.error('Formspree error:', data);
        }
      } catch (err) {
        console.error('Network error:', err);
        formStatus.textContent = '❌ Network error. Please email me directly at rubyzawawi26@gmail.com';
        formStatus.style.color = '#ef4444';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  /* ============ PLAYVIEW GALLERY ============ */
  const galleries = {
    gofelda: {
      title: 'Go-FELDA Vehicle Booking',
      images: [
        { src: 'images/development.jpg',    caption: '💻 Development — building the system interface' },
        { src: 'images/user interface.jpg', caption: '🎨 User Interface — final design of the booking system' },
        { src: 'images/testing 1.jpg',      caption: '🧪 Testing 1 — functional testing session' },
        { src: 'images/testing 2.jpg',      caption: '✨ Testing 2 — user acceptance testing & feedback' }
      ]
    }
  };

  const modal       = document.getElementById('playviewModal');
  const modalImg    = document.getElementById('playviewImage');
  const modalCaption= document.getElementById('playviewCaption');
  const modalThumbs = document.getElementById('playviewThumbs');
  const modalCounter= document.getElementById('playviewCounter');
  const btnPrev     = document.getElementById('playviewPrev');
  const btnNext     = document.getElementById('playviewNext');

  let currentGallery = null;
  let currentIndex = 0;

  function openGallery(key) {
    const gallery = galleries[key];
    if (!gallery) return;
    currentGallery = gallery;
    currentIndex = 0;
    renderGallery();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderGallery() {
    if (!currentGallery) return;
    const img = currentGallery.images[currentIndex];

    modalImg.style.opacity = '0';
    setTimeout(() => {
      modalImg.src = img.src;
      modalImg.alt = img.caption;
      modalCaption.textContent = img.caption;
      modalImg.style.opacity = '1';
    }, 120);

    modalCounter.textContent = `${currentIndex + 1} / ${currentGallery.images.length}`;

    modalThumbs.innerHTML = '';
    currentGallery.images.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.className = 'playview-thumb' + (idx === currentIndex ? ' active' : '');
      btn.type = 'button';
      btn.setAttribute('aria-label', `View ${item.caption}`);
      btn.innerHTML = `<img src="${item.src}" alt="">`;
      btn.addEventListener('click', () => {
        currentIndex = idx;
        renderGallery();
      });
      modalThumbs.appendChild(btn);
    });
  }

  function nextImage() {
    if (!currentGallery) return;
    currentIndex = (currentIndex + 1) % currentGallery.images.length;
    renderGallery();
  }
  function prevImage() {
    if (!currentGallery) return;
    currentIndex = (currentIndex - 1 + currentGallery.images.length) % currentGallery.images.length;
    renderGallery();
  }

  document.querySelectorAll('.playview-btn').forEach(btn => {
    btn.addEventListener('click', () => openGallery(btn.dataset.project));
  });
  modal.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeGallery);
  });
  btnNext.addEventListener('click', nextImage);
  btnPrev.addEventListener('click', prevImage);

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
});
