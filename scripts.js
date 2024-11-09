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
