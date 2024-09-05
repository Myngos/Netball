// script.js
document.addEventListener('DOMContentLoaded', function() {
    const background = document.querySelector('.background');
    let lastScrollY = window.scrollY;

    // Parallax effect for background
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        background.style.backgroundPositionY = -(currentScrollY * 0.5) + 'px';
        lastScrollY = currentScrollY;
    });

    // Scroll animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('focus', () => {
    document.querySelector('.search-bar').style.boxShadow = '0 1px 6px rgba(32,33,36,.28)';
});
searchInput.addEventListener('blur', () => {
    document.querySelector('.search-bar').style.boxShadow = 'none';
});
//news
window.addEventListener("scroll", () => {
    const newsItems = document.querySelectorAll(".news-item");
    const windowHeight = window.innerHeight;

    newsItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight - 50) {
            item.style.opacity = "1";
            item.style.animation = "fadeInUp 0.6s ease-out";
        }
    });
});