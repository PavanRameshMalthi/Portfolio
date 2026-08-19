/**
 * Portfolio Interactive JavaScript
 * Premium, performant interactivity and animations
 */

(function () {
    'use strict';

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    
    // Linear Interpolation for smooth animations
    const lerp = (start, end, factor) => start + (end - start) * factor;

    // Easing function for counters
    const easeOutQuad = (t) => t * (2 - t);

    // Check for touch device
    const isTouchDevice = () => {
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    };

    // DOM Elements Cache
    const DOM = {};

    
    // ==========================================
    // X. HERO TERMINAL ANIMATION
    // ==========================================
    function initHeroTerminal() {
        const terminal = document.getElementById('hero-terminal');
        if (!terminal) return;

        const terminalContent = [
            { text: '$ python portfolio.py --subject="visitor"', type: 'command', delay: 800 },
            { text: '', type: 'empty', delay: 200 },
            { text: '[INIT] Portfolio session started', type: 'info', delay: 600 },
            { text: '', type: 'empty', delay: 200 },
            { text: '[DATA] Loading dataset: pavan_ramesh_malthi.json', type: 'info', delay: 800 },
            { text: '', type: 'empty', delay: 200 },
            { text: 'Epoch 1/6 - About <span class="text-[#27c93f]">✔</span>', type: 'epoch', delay: 600 },
            { text: ' └─ <span class="text-gray-500">Loaded:</span> <span class="text-[#ffbd2e]">Passionate Full Stack Developer building responsive and modern web applications.</span>', type: 'data', delay: 400 },
            { text: '', type: 'empty', delay: 200 },
            { text: 'Epoch 2/6 - Projects <span class="text-[#27c93f]">✔</span>', type: 'epoch', delay: 600 },
            { text: ' └─ <span class="text-gray-500">Loaded:</span> <span class="text-[#ffbd2e]">AI-Powered Mock Interview, Resume Builder, Weather Tracker & CGPA Calculator.</span>', type: 'data', delay: 400 },
            { text: '', type: 'empty', delay: 200 },
            { text: 'Epoch 3/6 - Skills <span class="text-[#27c93f]">✔</span>', type: 'epoch', delay: 600 },
            { text: ' └─ <span class="text-gray-500">Loaded:</span>', type: 'data', delay: 300 },
            { text: '    <span class="text-[#ffbd2e]">C, Python, Java, JavaScript,</span>', type: 'data', delay: 200 },
            { text: '    <span class="text-[#ffbd2e]">HTML5, CSS3, React.js,</span>', type: 'data', delay: 200 },
            { text: '    <span class="text-[#ffbd2e]">Node.js, Express.js,</span>', type: 'data', delay: 200 },
            { text: '    <span class="text-[#ffbd2e]">MongoDB, PostgreSQL,</span>', type: 'data', delay: 200 },
            { text: '    <span class="text-[#ffbd2e]">SQL, Git, GitHub.</span>', type: 'data', delay: 200 },
            { text: '', type: 'empty', delay: 200 },
            { text: 'Epoch 4/6 - Experience <span class="text-[#27c93f]">✔</span>', type: 'epoch', delay: 600 },
            { text: ' └─ <span class="text-gray-500">Loaded:</span> <span class="text-[#ffbd2e]">Successfully completed a 45-Day MERN Stack Development Internship at Adhoc Network Tech.</span>', type: 'data', delay: 400 },
            { text: '', type: 'empty', delay: 200 },
            { text: 'Epoch 5/6 - Learning <span class="text-[#27c93f]">✔</span>', type: 'epoch', delay: 600 },
            { text: ' └─ <span class="text-gray-500">Loaded:</span> <span class="text-[#ffbd2e]">AI Integration, Prompt Engineering, REST APIs and Modern Web Development.</span>', type: 'data', delay: 400 },
            { text: '', type: 'empty', delay: 200 },
            { text: 'Epoch 6/6 - Contact <span class="text-[#27c93f]">✔</span>', type: 'epoch', delay: 600 },
            { text: ' └─ <span class="text-gray-500">Loaded:</span> <span class="text-[#ffbd2e]">GitHub, LinkedIn and Email are ready for connection.</span>', type: 'data', delay: 400 },
            { text: '', type: 'empty', delay: 200 },
            { text: '[RESULT] Portfolio successfully loaded for Pavan Ramesh Malthi <span class="text-[#27c93f]">✔</span>', type: 'success', delay: 1000 }
        ];

        let i = 0;
        let htmlContent = '';
        terminal.innerHTML = '<span class="animate-pulse text-[#00e5ff]">█</span>';

        function typeCommand(text, index, callback) {
            if (index < text.length) {
                const currentText = text.substring(0, index + 1);
                terminal.innerHTML = '<div class="text-[#27c93f] whitespace-nowrap overflow-hidden">' + currentText + '<span class="animate-pulse text-[#00e5ff]">█</span></div>';
                setTimeout(() => typeCommand(text, index + 1, callback), 50);
            } else {
                htmlContent += '<div class="text-[#27c93f]">' + text + '</div>';
                terminal.innerHTML = htmlContent + '<div class="mt-1"><span class="animate-pulse text-[#00e5ff]">█</span></div>';
                setTimeout(callback, 200);
            }
        }

        function renderNextLine() {
            if (i >= terminalContent.length) {
                terminal.innerHTML = htmlContent + '<div class="mt-1 text-[#00e5ff] animate-pulse">█</div>';
                return;
            }

            const line = terminalContent[i];
            i++;

            if (line.type === 'command') {
                typeCommand(line.text, 0, renderNextLine);
                return;
            }

            let lineHtml = '';
            switch (line.type) {
                case 'info':
                    lineHtml = '<div class="text-[#00e5ff] opacity-0 animate-[fadeIn_0.3s_ease_forwards]">' + line.text + '</div>';
                    break;
                case 'epoch':
                    lineHtml = '<div class="text-white opacity-0 animate-[fadeIn_0.3s_ease_forwards]">' + line.text + '</div>';
                    break;
                case 'data':
                    lineHtml = '<div class="opacity-0 animate-[fadeIn_0.3s_ease_forwards] whitespace-pre-wrap pl-1">' + line.text + '</div>';
                    break;
                case 'success':
                    lineHtml = '<div class="text-[#27c93f] font-bold opacity-0 animate-[fadeIn_0.3s_ease_forwards] mt-2">' + line.text + '</div>';
                    break;
                case 'empty':
                    lineHtml = '<div class="h-4"></div>';
                    break;
            }

            htmlContent += lineHtml;
            terminal.innerHTML = htmlContent + '<div class="mt-1"><span class="animate-pulse text-[#00e5ff]">█</span></div>';
            
            terminal.scrollTop = terminal.scrollHeight;

            setTimeout(renderNextLine, line.delay);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(renderNextLine, 500);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(terminal);
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Initialize DOM Elements
        DOM.loader = document.getElementById('loader');
        DOM.scrollProgress = document.getElementById('scroll-progress');
        DOM.cursorDot = document.querySelector('.cursor-dot');
        DOM.cursorRing = document.querySelector('.cursor-ring');
        DOM.navbar = document.querySelector('.navbar');
        DOM.menuBtn = document.getElementById('menu-btn');
        DOM.mobileMenu = document.getElementById('mobile-menu');
        DOM.typedText = document.getElementById('typed-text');
        DOM.currentYear = document.getElementById('current-year');
        DOM.footerYear = document.getElementById('footer-year');
        DOM.mouseGlow = document.querySelector('.mouse-glow') || createMouseGlow();
        DOM.heroBlobs = document.querySelectorAll('.hero-blob, .blob');

        // Initialize features
        initLucideIcons();
        initCurrentYear();
        initPageLoader();
        initScrollProgress();
        if (!isTouchDevice()) {
            initCursorFollower();
            initProjectTilt();
            initMouseGlow();
            initParallax();
        }
        initNavbar();
        initMobileMenu();
        initTypingEffect();
        initScrollAnimations();
        initHeroTerminal();
        initCounters();
        initSmoothScroll();
        initRippleEffect();
        initKeyboardNavigation();

        window.addEventListener('resize', () => {
            // Close mobile menu on resize to desktop
            if (window.innerWidth >= 768 && DOM.mobileMenu && DOM.mobileMenu.classList.contains('active')) {
                DOM.mobileMenu.classList.remove('active');
                if (DOM.menuBtn) {
                    DOM.menuBtn.setAttribute('aria-expanded', 'false');
                    const menuIcon = DOM.menuBtn.querySelector('.menu-icon');
                    const closeIcon = DOM.menuBtn.querySelector('.x-icon');
                    if (menuIcon) menuIcon.classList.remove('hidden');
                    if (closeIcon) closeIcon.classList.add('hidden');
                }
                document.body.style.overflow = '';
            }
        }, { passive: true });
    });

    // ==========================================
    // 1. PAGE LOADER
    // ==========================================
    function initPageLoader() {
        if (!DOM.loader) return;
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                DOM.loader.classList.add('loader-hidden');
                
                // Remove from DOM after transition
                DOM.loader.addEventListener('transitionend', () => {
                    DOM.loader.style.display = 'none';
                }, { once: true });
            }, 1500);
        });
    }

    // ==========================================
    // 2. SCROLL PROGRESS BAR
    // ==========================================
    function initScrollProgress() {
        if (!DOM.scrollProgress) return;

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
                    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrolled = (scrollPx / winHeightPx) * 100;
                    
                    DOM.scrollProgress.style.width = `${scrolled}%`;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ==========================================
    // 3. CURSOR FOLLOWER
    // ==========================================
    function initCursorFollower() {
        if (!DOM.cursorDot || !DOM.cursorRing) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let isHovering = false;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Move dot immediately
            DOM.cursorDot.style.left = `${mouseX}px`;
            DOM.cursorDot.style.top = `${mouseY}px`;
        }, { passive: true });

        // Hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .interactive');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                isHovering = true;
                DOM.cursorRing.classList.add('hover');
                DOM.cursorDot.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                isHovering = false;
                DOM.cursorRing.classList.remove('hover');
                DOM.cursorDot.classList.remove('hover');
            });
        });

        // Smooth ring follow using rAF and lerp
        function renderCursor() {
            ringX = lerp(ringX, mouseX, 0.15);
            ringY = lerp(ringY, mouseY, 0.15);
            
            DOM.cursorRing.style.left = `${ringX}px`;
            DOM.cursorRing.style.top = `${ringY}px`;
            DOM.cursorRing.style.transform = `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`;
            
            requestAnimationFrame(renderCursor);
        }
        
        requestAnimationFrame(renderCursor);
    }

    // ==========================================
    // 4. NAVBAR & ACTIVE SECTIONS
    // ==========================================
    function initNavbar() {
        if (!DOM.navbar) return;

        let ticking = false;

        // Scrolled Class and Hide/Show on Scroll
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    
                    if (currentScrollY > 50) {
                        DOM.navbar.classList.add('scrolled');
                    } else {
                        DOM.navbar.classList.remove('scrolled');
                    }
                    
                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Active Section Detection
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        if (sections.length === 0 || navLinks.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-section') === id || link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    // ==========================================
    // 5. MOBILE MENU
    // ==========================================
    function initMobileMenu() {
        if (!DOM.menuBtn || !DOM.mobileMenu) return;

        const toggleMenu = () => {
            const isOpen = DOM.mobileMenu.classList.toggle('active');
            
            // Toggle hamburger / close icon
            const menuIcon = DOM.menuBtn.querySelector('.menu-icon');
            const closeIcon = DOM.menuBtn.querySelector('.x-icon');
            if (menuIcon && closeIcon) {
                menuIcon.classList.toggle('hidden', isOpen);
                closeIcon.classList.toggle('hidden', !isOpen);
            }
            
            // Update aria-expanded
            DOM.menuBtn.setAttribute('aria-expanded', isOpen);
            
            // Prevent body scroll
            document.body.style.overflow = isOpen ? 'hidden' : '';
        };

        DOM.menuBtn.addEventListener('click', toggleMenu);

        // Close on nav link click
        const mobileLinks = DOM.mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (DOM.mobileMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

    // ==========================================
    // 6. TYPING EFFECT
    // ==========================================
    function initTypingEffect() {
        if (!DOM.typedText) return;

        const words = ['Full Stack Developer', 'AI Enthusiast'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                DOM.typedText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                DOM.typedText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 80;

            if (!isDeleting && charIndex === currentWord.length) {
                // Pause at end of word
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing new word
            }

            setTimeout(type, typeSpeed);
        }

        setTimeout(type, 1000); // Initial delay
    }

    // ==========================================
    // 7. SCROLL ANIMATIONS (Intersection Observer)
    // ==========================================
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        if (animatedElements.length === 0) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve after animating once
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-50px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // ==========================================
    // 8. ANIMATED COUNTERS
    // ==========================================
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number, .counter');
        if (counters.length === 0) return;

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const startTime = performance.now();
            // Use data attribute instead of parent text content to avoid duplicate plus signs
            const hasPlus = counter.hasAttribute('data-plus');

            const updateCounter = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const easedProgress = easeOutQuad(progress);
                
                const currentValue = Math.floor(easedProgress * target);
                // Plus sign appears ONLY after counter finishes
                counter.textContent = currentValue;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + (hasPlus ? '+' : '');
                }
            };

            requestAnimationFrame(updateCounter);
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // ==========================================
    // 10. PROJECT CARD TILT EFFECT
    // ==========================================
    function initProjectTilt() {
        const cards = document.querySelectorAll('.project-card');
        if (cards.length === 0) return;

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                
                // Calculate cursor position relative to the center of the card
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Max tilt is 5 degrees
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                requestAnimationFrame(() => {
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
            });

            card.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                    card.style.transition = 'transform 0.5s ease';
                });
            });

            card.addEventListener('mouseenter', () => {
                card.style.transition = 'none'; // Remove transition for smooth immediate tracking
            });
        });
    }

    // ==========================================
    // 12. MOUSE GLOW EFFECT
    // ==========================================
    function createMouseGlow() {
        const glow = document.createElement('div');
        glow.className = 'mouse-glow';
        document.body.appendChild(glow);
        return glow;
    }

    function initMouseGlow() {
        if (!DOM.mouseGlow) return;

        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });

        function animateGlow() {
            glowX = lerp(glowX, mouseX, 0.08);
            glowY = lerp(glowY, mouseY, 0.08);
            
            DOM.mouseGlow.style.left = `${glowX}px`;
            DOM.mouseGlow.style.top = `${glowY}px`;
            
            requestAnimationFrame(animateGlow);
        }
        
        requestAnimationFrame(animateGlow);
    }

    // ==========================================
    // 14. SMOOTH SCROLL FOR ALL ANCHORS
    // ==========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const navbarHeight = DOM.navbar ? DOM.navbar.offsetHeight : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==========================================
    // 15. CURRENT YEAR
    // ==========================================
    function initCurrentYear() {
        const year = new Date().getFullYear();
        if (DOM.currentYear) DOM.currentYear.textContent = year;
        if (DOM.footerYear) DOM.footerYear.textContent = year;
    }

    // ==========================================
    // 16. LUCIDE ICONS
    // ==========================================
    function initLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // ==========================================
    // 17. PARALLAX EFFECT
    // ==========================================
    function initParallax() {
        if (DOM.heroBlobs.length === 0) return;

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            requestAnimationFrame(() => {
                DOM.heroBlobs.forEach((blob, index) => {
                    const depth = (index + 1) * 15;
                    // Use margin offset instead of transform to avoid conflicting with CSS animations
                    blob.style.marginLeft = `${x * depth}px`;
                    blob.style.marginTop = `${y * depth}px`;
                });
            });
        }, { passive: true });
    }

    // ==========================================
    // 18. RIPPLE BUTTON EFFECT
    // ==========================================
    function initRippleEffect() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-outline');

        buttons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                
                // Style the ripple
                Object.assign(ripple.style, {
                    position: 'absolute',
                    top: `${y}px`,
                    left: `${x}px`,
                    width: '10px',
                    height: '10px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%) scale(0)',
                    pointerEvents: 'none',
                    animation: 'ripple-animation 0.6s linear'
                });

                // Ensure button is positioned relatively and hidden overflow
                if (window.getComputedStyle(btn).position === 'static') {
                    btn.style.position = 'relative';
                }
                btn.style.overflow = 'hidden';

                btn.appendChild(ripple);

                // Add keyframes dynamically if not present
                if (!document.getElementById('ripple-keyframes')) {
                    const style = document.createElement('style');
                    style.id = 'ripple-keyframes';
                    style.innerHTML = `
                        @keyframes ripple-animation {
                            to {
                                transform: translate(-50%, -50%) scale(30);
                                opacity: 0;
                            }
                        }
                    `;
                    document.head.appendChild(style);
                }

                ripple.addEventListener('animationend', () => {
                    ripple.remove();
                });
            });
        });
    }

    // ==========================================
    // 19. KEYBOARD NAVIGATION
    // ==========================================
    function initKeyboardNavigation() {
        window.addEventListener('keydown', (e) => {
            // Close mobile menu on Escape
            if (e.key === 'Escape' && DOM.mobileMenu && DOM.mobileMenu.classList.contains('active')) {
                DOM.mobileMenu.classList.remove('active');
                if (DOM.menuBtn) {
                    DOM.menuBtn.classList.remove('active');
                    DOM.menuBtn.setAttribute('aria-expanded', 'false');
                    const menuIcon = DOM.menuBtn.querySelector('.menu-icon');
                    const closeIcon = DOM.menuBtn.querySelector('.x-icon');
                    if (menuIcon) menuIcon.classList.remove('hidden');
                    if (closeIcon) closeIcon.classList.add('hidden');
                }
                document.body.style.overflow = '';
            }
        });
        
        // Tab navigation focus styles are generally handled via CSS (:focus-visible)
        // But we ensure the DOM is setup properly for accessibility.
    }

})();

