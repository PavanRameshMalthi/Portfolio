/**
 * Pavan Ramesh Malthi - Portfolio JavaScript
 * Tech Stack: Pure Vanilla JavaScript (ES6+)
 * Performance & Polish: 60fps animations, zero-dependency, Apple-grade minimalism
 */

(function () {
  'use strict';

  // DOM Elements Cache
  const DOM = {
    navbar: document.querySelector('.navbar'),
    navLinks: document.querySelectorAll('.nav-item, .mobile-nav-link'),
    sections: document.querySelectorAll('section[id]'),
    mobileToggle: document.querySelector('.mobile-toggle'),
    mobileOverlay: document.querySelector('.mobile-menu-overlay'),
    currentYearSpan: document.getElementById('current-year'),
    backToTopBtn: document.getElementById('btn-back-top'),
  };

  /**
   * 1. Initialize Dynamic Year
   */
  function initYear() {
    if (DOM.currentYearSpan) {
      DOM.currentYearSpan.textContent = new Date().getFullYear();
    }
  }

  /**
   * 2. Navbar Scroll Style & Active Link Highlight
   */
  function initNavbar() {
    if (!DOM.navbar) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            DOM.navbar.classList.add('scrolled');
          } else {
            DOM.navbar.classList.remove('scrolled');
          }

          // Active Section Tracking
          const scrollPosition = window.scrollY + 200;

          DOM.sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              DOM.navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                  link.classList.add('active');
                }
              });
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /**
   * 3. Mobile Menu Overlay Toggle
   */
  function initMobileMenu() {
    if (!DOM.mobileToggle || !DOM.mobileOverlay) return;

    const toggleMenu = () => {
      const isOpen = DOM.mobileOverlay.classList.toggle('active');
      DOM.mobileToggle.setAttribute('aria-expanded', isOpen);
      DOM.mobileToggle.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`;

      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    DOM.mobileToggle.addEventListener('click', toggleMenu);

    // Close when clicking any link inside mobile overlay
    DOM.mobileOverlay.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (DOM.mobileOverlay.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.mobileOverlay.classList.contains('active')) {
        toggleMenu();
      }
    });
  }

  /**
   * 4. Scroll Intersection Observer for Subtle Fade-Up Animations
   */
  function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-up');
    if (!fadeElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      fadeElements.forEach((el) => observer.observe(el));
    } else {
      // Fallback for older browsers
      fadeElements.forEach((el) => el.classList.add('visible'));
    }
  }

  /**
   * 5. Smooth Scroll for Back to Top and Internal Anchors
   */
  function initSmoothScroll() {
    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }
  }

  /**
   * 6. VS Code PowerShell Terminal Sequence Animation
   */
  function initTerminalAnimation() {
    const termCommand = document.getElementById('term-command');
    const termCursorCmd = document.getElementById('term-cursor-cmd');
    const stepStarting = document.getElementById('term-step-starting');
    const stepLoaded = document.getElementById('term-step-loaded');
    const stepDeveloper = document.getElementById('term-step-developer');
    const stepStatus = document.getElementById('term-step-status');
    const stepEnd = document.getElementById('term-step-end');

    if (!termCommand) return;

    const commandText = 'npm run portfolio';
    let charIndex = 0;

    function showStep(element) {
      if (!element) return;
      element.classList.remove('hidden');
      element.classList.add('visible');
    }

    function typeCommand() {
      if (charIndex < commandText.length) {
        termCommand.textContent += commandText.charAt(charIndex);
        charIndex++;
        // Natural human-like keystroke cadence
        const typingDelay = 55 + Math.random() * 45;
        setTimeout(typeCommand, typingDelay);
      } else {
        // Command completed, pause before execution output
        setTimeout(() => {
          if (termCursorCmd) termCursorCmd.style.display = 'none';

          // Step 1: Starting...
          showStep(stepStarting);

          // Step 2: Portfolio Loaded
          setTimeout(() => {
            showStep(stepLoaded);

            // Step 3: Developer
            setTimeout(() => {
              showStep(stepDeveloper);

              // Step 4: Status
              setTimeout(() => {
                showStep(stepStatus);

                // Step 5: Final PS Prompt with blinking cursor
                setTimeout(() => {
                  showStep(stepEnd);
                }, 400);
              }, 400);
            }, 450);
          }, 500);
        }, 350);
      }
    }

    // Begin sequence after initial viewport entrance
    setTimeout(typeCommand, 600);
  }

  /**
   * 7. App Initialization
   */
  document.addEventListener('DOMContentLoaded', () => {
    initYear();
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    initTerminalAnimation();
  });
})();
