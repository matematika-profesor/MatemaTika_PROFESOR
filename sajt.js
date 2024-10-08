// Inicijalizacija EmailJS
(function() {
    emailjs.init("wcqOEJyjlrYsSLiWn");
})();

// Funkcija za slanje poruke
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    emailjs.send("service_w7f0n2a", "template_rt1po5b", data)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("form-response").innerText = "Poruka je uspešno poslata!";
            form.reset();
        }, function(error) {
            console.log("FAILED...", error);
            document.getElementById("form-response").innerText = "Došlo je do greške. Pokušajte ponovo.";
        });
});

// Funkcionalnost za prebacivanje jezika
document.getElementById('latinButton').addEventListener('click', () => {
    document.body.classList.remove('cyrillic');
    document.body.classList.add('latin');
    toggleLanguage(false);
});

document.getElementById('cyrillicButton').addEventListener('click', () => {
    document.body.classList.remove('latin');
    document.body.classList.add('cyrillic');
    toggleLanguage(true);
});

function toggleLanguage(isCyrillic) {
    document.querySelectorAll('.latin-text').forEach(el => el.classList.toggle('hidden', isCyrillic));
    document.querySelectorAll('.cyrillic-text').forEach(el => el.classList.toggle('hidden', !isCyrillic));
}

// Dodatne funkcionalnosti
document.getElementById('showPricesBtn').addEventListener('click', showPrices);
document.getElementById('showPricesBtnCyr').addEventListener('click', showPrices);

function showPrices() {
    document.querySelectorAll('.price').forEach(el => el.classList.toggle('hidden'));
}
