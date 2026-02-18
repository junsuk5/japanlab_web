// Interactions for 日本暮らしLab Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // Add scroll animations or other subtle effects here
    console.log('日本暮らしLab landing page loaded.');
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
