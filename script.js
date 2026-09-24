/**
 * PulseAI Analytics - Interactions & Scripting
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('navHamburger');
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');

    hamburger?.addEventListener('click', () => {
        navbar.classList.toggle('open');
        hamburger.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navbar.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });

    // 2. Active Scroll Spy
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.navbar a[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                targetLink?.classList.add('active');
            } else {
                targetLink?.classList.remove('active');
            }
        });
    });

    // 3. Dynamic Mockup Chart Animation
    const bars = document.querySelectorAll('.bar-col');
    if (bars.length > 0) {
        setInterval(() => {
            bars.forEach(bar => {
                const randomHeight = Math.floor(Math.random() * 65) + 35;
                bar.style.height = `${randomHeight}%`;
            });
        }, 3000);
    }

    // 4. Contact / Trial Form
    const form = document.getElementById('startupContactForm');
    const feedback = document.getElementById('trialFeedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            feedback.style.display = 'block';
            feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, <strong>${name}</strong>! Your 14-day PulseAI trial environment is being provisioned. Check your inbox for activation details.`;
            form.reset();
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 6000);
        });
    }
});
