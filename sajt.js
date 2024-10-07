document.addEventListener('DOMContentLoaded', function () {
    const latinButton = document.getElementById('latinButton');
    const cyrillicButton = document.getElementById('cyrillicButton');

    // Inicijalno prikazivanje latinice
    showLatinText();

    latinButton.addEventListener('click', showLatinText);
    cyrillicButton.addEventListener('click', showCyrillicText);
});

function showLatinText() {
    const latinElements = document.querySelectorAll('.latin-text');
    const cyrillicElements = document.querySelectorAll('.cyrillic-text');

    latinElements.forEach(el => el.classList.remove('hidden'));
    cyrillicElements.forEach(el => el.classList.add('hidden'));
}

function showCyrillicText() {
    const latinElements = document.querySelectorAll('.latin-text');
    const cyrillicElements = document.querySelectorAll('.cyrillic-text');

    latinElements.forEach(el => el.classList.add('hidden'));
    cyrillicElements.forEach(el => el.classList.remove('hidden'));
}
