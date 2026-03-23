document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrossel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.btn-right');
    const prevButton = document.querySelector('.btn-left');
    const verColecaoBtn = document.querySelector('.btn-outline');
    const galeriaSection = document.getElementById('galeria');

    let currentIndex = 0;

    // Função para posicionar e mover o slide
    const updateSlidePosition = (index) => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    // Evento para mostrar a galeria quando clicar em "Ver Coleção"
    if (verColecaoBtn) {
        verColecaoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            galeriaSection.classList.add('mostrar');
            galeriaSection.scrollIntoView({ behavior: 'smooth' });
            updateSlidePosition(currentIndex); // Garante o alinhamento inicial
        });
    }

    // Navegação para a Direita
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition(currentIndex);
    });

    // Navegação para a Esquerda
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition(currentIndex);
    });

    // Ajuste responsivo caso a janela mude de tamanho
    window.addEventListener('resize', () => updateSlidePosition(currentIndex));
});