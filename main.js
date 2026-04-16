document.addEventListener('DOMContentLoaded', () => {
    // --- Basic Page Animations ---
    const scrollElements = document.querySelectorAll('.scroll-animate');
    const elementInView = (el, dividend = 1) => el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    const displayScrollElement = (element) => element.classList.add('is-visible');

    const skillsSection = document.querySelector('#skills');
    let skillsAnimated = false;

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
                if (el.id === 'skills' && !skillsAnimated) {
                    animateSkillBars();
                    skillsAnimated = true;
                }
            }
        });
    };

    const animateSkillBars = () => {
        document.querySelectorAll('.skill').forEach(skill => {
            const level = skill.getAttribute('data-level');
            skill.querySelector('.skill-bar-inner').style.width = level;
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
