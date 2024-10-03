// Funkcionalnost za prebacivanje između latinice i ćirilice
document.getElementById('latinButton').addEventListener('click', function() {
    document.body.classList.remove('cyrillic');
    document.body.classList.add('latin');
    document.querySelectorAll('.latin-text').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.cyrillic-text').forEach(el => el.classList.add('hidden'));
});

document.getElementById('cyrillicButton').addEventListener('click', function() {
    document.body.classList.remove('latin');
    document.body.classList.add('cyrillic');
    document.querySelectorAll('.cyrillic-text').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.latin-text').forEach(el => el.classList.add('hidden'));
});

// Inicijalizacija EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Zameni sa svojim public key
})();

// Slanje forme
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Sprečava slanje forme
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('formResponse').textContent = "Poruka je uspešno poslata!";
            document.getElementById('formResponse').classList.remove('hidden');
            form.reset(); // Resetovanje forme
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('formResponse').textContent = "Došlo je do greške, pokušajte ponovo.";
            document.getElementById('formResponse').classList.remove('hidden');
        });
});
