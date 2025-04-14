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
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionTop = current.offsetTop - 100;
        const sectionHeight = current.offsetHeight;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.menu-links a').forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
