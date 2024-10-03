// Prebacivanje jezika
document.getElementById('latinButton').addEventListener('click', function() {
    document.body.classList.remove('cyrillic');
    document.body.classList.add('latin');
    toggleLanguage(true);
});

document.getElementById('cyrillicButton').addEventListener('click', function() {
    document.body.classList.remove('latin');
    document.body.classList.add('cyrillic');
    toggleLanguage(false);
});

// Funkcija za prebacivanje jezika
function toggleLanguage(isLatin) {
    const latinElements = document.querySelectorAll('.latin-text');
    const cyrillicElements = document.querySelectorAll('.cyrillic-text');

    latinElements.forEach(el => el.classList.toggle('hidden', !isLatin));
    cyrillicElements.forEach(el => el.classList.toggle('hidden', isLatin));
}

// Prikaz cena
document.getElementById('showPricesBtn').addEventListener('click', function() {
    document.querySelectorAll('.price.latin-text').forEach(el => el.classList.toggle('hidden'));
});

document.getElementById('showPricesBtnCyr').addEventListener('click', function() {
    document.querySelectorAll('.price.cyrillic-text').forEach(el => el.classList.toggle('hidden'));
});

// Validacija kontakt forme
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Sprečavanje slanja forme
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulacija uspešnog slanja forme
        document.getElementById('formResponse').textContent = "Poruka je uspešno poslata!";
        document.getElementById('formResponse').classList.remove('hidden');
        this.reset(); // Resetovanje polja forme
    } else {
        document.getElementById('formResponse').textContent = "Molimo vas popunite sva polja.";
        document.getElementById('formResponse').classList.remove('hidden');
    }
});
