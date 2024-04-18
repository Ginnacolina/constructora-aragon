window.onload = function() {
    let index = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;
    
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
    
    mostrarSlide(index);
};
// Obtener todos los elementos con la clase "team-member-image"
const teamMembers = document.querySelectorAll('.team-member-image');

// Agregar evento clic a cada miembro del equipo
teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        // Obtener la información asociada al miembro del equipo
        const info = member.getAttribute('data-info');
        
        // Crear un elemento de párrafo para mostrar la información
        const infoParagraph = document.createElement('p');
        infoParagraph.innerHTML = info;

        // Verificar si ya hay información mostrada y eliminarla
        const existingInfo = document.querySelector('.member-details');
        if (existingInfo) {
            existingInfo.remove();
        }

        // Crear un contenedor para la información y agregarle la clase "member-details"
        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('member-details');
        detailsContainer.appendChild(infoParagraph);

        // Insertar el contenedor de la información después del miembro del equipo clicado
        member.parentNode.insertBefore(detailsContainer, member.nextSibling);
    });
});
