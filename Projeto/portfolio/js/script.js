console.log("JavaScript carregado!");

window.addEventListener('scroll', function() {
    const body = document.body;
    const sobreMimSection = document.querySelector('.sobre-mim');
    const position = sobreMimSection.getBoundingClientRect().top;

    // Ativa a classe 'scrolled' quando a seção "Sobre Mim" está visível
    if (position <= window.innerHeight - 50) { // Ajuste o valor conforme necessário
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});
