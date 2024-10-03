// Inicijalizacija EmailJS
(function() {
    emailjs.init("wcqOEJyjlrYsSLiWn"); // Tvoj public key
})();

// Prebacivanje između latinice i ćirilice
document.getElementById('latinButton').onclick = function() {
    document.body.classList.add('latin');
    document.body.classList.remove('cyrillic');
    document.querySelectorAll('.latin-text').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.cyrillic-text').forEach(el => el.classList.add('hidden'));
};

document.getElementById('cyrillicButton').onclick = function() {
    document.body.classList.add('cyrillic');
    document.body.classList.remove('latin');
    document.querySelectorAll('.cyrillic-text').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.latin-text').forEach(el => el.classList.add('hidden'));
};

// Slanje forme
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Sprečava slanje forme
    emailjs.sendForm('service_w7f0n2a', 'template_rt1po5b', this) // Tvoj service ID i template ID
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
