/**
 * Scroll Reveal Animation Script
 * Initializes intersection observer for scroll reveal animations
 */

export function initScrollReveal(): void {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right'
  );

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        element.style.opacity = '1';
        element.style.transform = 'translate(0)';
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Initialize stagger reveal for child elements
 */
export function initStaggerReveal(): void {
  const staggerContainers = document.querySelectorAll('.reveal-stagger');

  staggerContainers.forEach((container) => {
    const children = container.children;
    Array.from(children).forEach((child, index) => {
      if (child instanceof HTMLElement) {
        child.style.opacity = '0';
        child.style.transform = 'translateY(30px)';
        child.style.animation = `reveal 0.6s ease-out forwards`;
        child.style.animationDelay = `${index * 0.1}s`;
      }
    });
  });
}

/**
 * Initialize parallax effect on mouse move
 */
export function initParallax(): void {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length === 0) return;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;

    parallaxElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        const intensity = el.dataset.parallax ? parseInt(el.dataset.parallax) : 30;
        const moveX = (mouseX - 0.5) * intensity;
        const moveY = (mouseY - 0.5) * intensity;
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });
  });
}

/**
 * Initialize scroll-based navbar background effect
 */
export function initNavbarScroll(): void {
  const navbar = document.getElementById('navbar');
  const navBg = document.getElementById('nav-bg');

  if (!navbar || !navBg) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navBg.classList.add('bg-peb-bg/80', 'backdrop-blur-xl', 'border-peb-border');
      navBg.classList.remove('bg-peb-bg/50', 'backdrop-blur-0', 'border-transparent');
    } else {
      navBg.classList.remove('bg-peb-bg/80', 'backdrop-blur-xl', 'border-peb-border');
      navBg.classList.add('bg-peb-bg/50', 'backdrop-blur-0', 'border-transparent');
    }
  });
}

/**
 * Initialize all animations
 */
export function initAllAnimations(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollReveal();
      initStaggerReveal();
      initParallax();
      initNavbarScroll();
    });
  } else {
    initScrollReveal();
    initStaggerReveal();
    initParallax();
    initNavbarScroll();
  }
}

// Auto-initialize on import
initAllAnimations();
