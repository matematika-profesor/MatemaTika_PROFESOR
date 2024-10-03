// Prebacivanje između latinice i ćirilice
const latinButton = document.getElementById('latinButton');
const cyrillicButton = document.getElementById('cyrillicButton');

latinButton.addEventListener('click', function() {
    document.body.classList.remove('cyrillic');
    document.body.classList.add('latin');
    document.querySelectorAll('.cyrillic-text').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.latin-text').forEach(el => el.classList.remove('hidden'));
});

cyrillicButton.addEventListener('click', function() {
    document.body.classList.remove('latin');
    document.body.classList.add('cyrillic');
    document.querySelectorAll('.latin-text').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.cyrillic-text').forEach(el => el.classList.remove('hidden'));
});

// Validacija forme
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validacija unosa
    if (name && email && message) {
        document.getElementById('confirmation').textContent = 'Poruka je uspešno poslata!';
        document.getElementById('confirmation').classList.remove('hidden');
        // Ovde dodajte kod za slanje email-a putem EmailJS
    } else {
        alert('Molimo unesite sve podatke.');
    }
});
