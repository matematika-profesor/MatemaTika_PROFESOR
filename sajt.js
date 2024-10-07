(function() {
    emailjs.init("wcqOEJyjlrYsSLiWn");
})();

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

// Funkcija za prebacivanje jezika
function toggleLanguage(isCyrillic) {
    document.querySelectorAll('.latin-text').forEach(el => el.classList.toggle('hidden', isCyrillic));
    document.querySelectorAll('.cyrillic-text').forEach(el => el.classList.toggle('hidden', !isCyrillic));
}

// Podešavanje defaultnog stanja
toggleLanguage(false); // Prikazuj latinicu

// Event listener za dugmad
const latinButton = document.getElementById("latinButton");
const cyrillicButton = document.getElementById("cyrillicButton");

latinButton.addEventListener("click", function() {
    toggleLanguage(false); // Prikazuj latinicu
});

cyrillicButton.addEventListener("click", function() {
    toggleLanguage(true); // Prikazuj ćirilicu
});

function showPrices() {
    document.querySelectorAll('.price').forEach(el => el.classList.toggle('hidden'));
}
