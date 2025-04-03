// Menu Mobile
document.querySelector('.menu-mobile').addEventListener('click', function() {
    document.querySelector('.menu-links').classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-links').classList.remove('active');
    });
});

// Efeito suave ao rolar para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});