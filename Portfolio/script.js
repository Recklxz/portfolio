document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navigation active state management
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Interactive skill and project cards
    const cards = document.querySelectorAll('.skill-category, .project-card, .certification-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        });
    });

    // GitHub Project Link Tooltips
    const githubLinks = document.querySelectorAll('.project-card .btn');
    githubLinks.forEach(link => {
        link.classList.add('tooltip');
        const tooltipSpan = document.createElement('span');
        tooltipSpan.classList.add('tooltiptext');
        tooltipSpan.textContent = 'View Project on GitHub';
        link.appendChild(tooltipSpan);
    });

    // Dynamic Skill Progress (optional)
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        const skills = category.querySelectorAll('li');
        skills.forEach((skill, index) => {
            skill.style.opacity = 0;
            skill.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                skill.style.transition = 'all 0.5s ease';
                skill.style.opacity = 1;
                skill.style.transform = 'translateX(0)';
            }, index * 100);
        });
    });

    // Scroll-triggered animations
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.skill-category, .project-card, .certification-card');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (cardPosition < screenPosition) {
                card.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call
});
