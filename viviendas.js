window.onload = function() {
    const carruseles = document.querySelectorAll('.carrusel');
    carruseles.forEach(carrusel => {
        carrusel.addEventListener('click', function() {
            toggleCarruselSize(this); // Al hacer clic, expande o contrae el carrusel
        });
    });

    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;
    let index = 0;

    function mostrarSlide(slideIndex) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[slideIndex].style.display = 'block';
    }

    function siguienteSlide() {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        mostrarSlide(index);
    }

    function anteriorSlide() {
        index--;
        if (index < 0) {
            index = totalSlides - 1;
        }
        mostrarSlide(index);
    }

    setInterval(siguienteSlide, 5000); // Cambia la imagen cada 5 segundos

}
window.onload = function() {
    const carruseles = document.querySelectorAll('.carrusel');
    carruseles.forEach(carrusel => {
        carrusel.addEventListener('click', function() {
            toggleCarruselSize(this); // Al hacer clic, expande o contrae el carrusel
        });
    });
}

function toggleCarruselSize(carrusel) {
    carrusel.classList.toggle('expandido');
}
