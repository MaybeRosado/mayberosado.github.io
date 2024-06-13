document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('series-form');
    const table = document.getElementById('series-table').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores de los inputs
        const seriesName = document.getElementById('series-name').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        // Crear una nueva fila
        const newRow = table.insertRow();
        
        // Crear nuevas celdas en la fila
        const nameCell = newRow.insertCell(0);
        const ratingCell = newRow.insertCell(1);
        const reviewCell = newRow.insertCell(2);
        
        // Asignar los valores a las celdas
        nameCell.textContent = seriesName;
        ratingCell.textContent = rating;
        reviewCell.textContent = review;
        
        // Resetear el formulario
        form.reset();
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
