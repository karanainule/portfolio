 
    // ========== Theme Toggle Functionality ==========
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Default to dark theme if no saved preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // ========== Mobile Menu Toggle ==========
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        });
    });

    // ========== Smooth Scrolling ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Navbar Background on Scroll ==========
    let lastScroll = 0;
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 20px var(--shadow)';
        } else {
            nav.style.boxShadow = '0 2px 10px var(--shadow)';
        }

        lastScroll = currentScroll;
    });

    // ========== Intersection Observer for Animations ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .skill-category, .timeline-item, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========== AUTO CAROUSEL FUNCTIONALITY ==========
    class Carousel {
        constructor(carouselName) {
            this.carouselName = carouselName;
            this.track = document.querySelector(`.carousel-track[data-carousel="${carouselName}"]`);
            this.slides = this.track.querySelectorAll('.carousel-slide');
            this.prevBtn = document.querySelector(`.carousel-prev[data-carousel="${carouselName}"]`);
            this.nextBtn = document.querySelector(`.carousel-next[data-carousel="${carouselName}"]`);
            this.playPauseBtn = document.querySelector(`.carousel-play-pause[data-carousel="${carouselName}"]`);
            this.dotsContainer = document.querySelector(`.carousel-controls[data-carousel="${carouselName}"]`);
            this.counter = document.querySelector(`.carousel-counter[data-counter="${carouselName}"]`);
            
            this.currentIndex = 0;
            this.isPlaying = true;
            this.autoPlayInterval = null;

            this.init();
        }

        init() {
            // Create dots
            this.slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('carousel-dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(index));
                this.dotsContainer.appendChild(dot);
            });

            this.dots = this.dotsContainer.querySelectorAll('.carousel-dot');

            // Event listeners
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());
            this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());

            // Click to open modal
            this.slides.forEach(slide => {
                slide.querySelector('img').addEventListener('click', (e) => {
                    openModal(e.target.src);
                });
            });

            // Start autoplay
            this.startAutoPlay();
        }

        goToSlide(index) {
            this.currentIndex = index;
            this.updateCarousel();
        }

        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            this.updateCarousel();
        }

        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
            this.updateCarousel();
        }

        updateCarousel() {
            const offset = -this.currentIndex * 100;
            this.track.style.transform = `translateX(${offset}%)`;

            // Update dots
            this.dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });

            // Update counter
            if (this.counter) {
                this.counter.textContent = `${this.currentIndex + 1} / ${this.slides.length}`;
            }
        }

        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, 3000);
        }

        stopAutoPlay() {
            clearInterval(this.autoPlayInterval);
        }

        togglePlayPause() {
            if (this.isPlaying) {
                this.stopAutoPlay();
                this.playPauseBtn.textContent = '▶';
            } else {
                this.startAutoPlay();
                this.playPauseBtn.textContent = '⏸';
            }
            this.isPlaying = !this.isPlaying;
        }
    }

    // Initialize carousels
    const bharatAICarousel = new Carousel('bharatai');
    const gffCarousel = new Carousel('gff');

    // ========== Image Modal ==========
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');

    function openModal(imgSrc) {
        modal.classList.add('active');
        modalImg.src = imgSrc;
    }

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
