// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Fade-in animations when the section comes into view
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

window.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectContainer = document.querySelector('#projects');
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
                    <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
                    <p>${project.description}</p>
                `;
                projectContainer.appendChild(projectElement);
            });
        });
});

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const fullDescription = button.nextElementSibling;
        if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
            fullDescription.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            fullDescription.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});

    let currentIndex = 0;

    function showSlide(index) {
        const carouselInner = document.querySelector('.carousel-inner');
        const totalItems = document.querySelectorAll('.carousel-item').length;
        if (index >= totalItems) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalItems - 1;
        } else {
            currentIndex = index;
        }
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }


