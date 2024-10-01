document.getElementById('showPricesBtn').addEventListener('click', function() {
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        const priceValue = price.getAttribute('data-price');
        alert(`Cena za ${price.previousElementSibling.innerText} je ${priceValue} RSD`);
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sprečava osvežavanje stranice

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Ovdje bi obično išao poziv serveru za slanje poruke
    document.getElementById('formResponse').innerText = `Hvala, ${name}! Vaša poruka je poslata.`;
    document.getElementById('formResponse').classList.remove('hidden');

    // Resetuj formu
    document.getElementById('contactForm').reset();
});

// Promena jezika
document.getElementById('latinButton').addEventListener('click', function() {
    document.body.classList.remove('cyrillic');
    document.body.classList.add('latin');
    updateTextToLatin();
});

document.getElementById('cyrillicButton').addEventListener('click', function() {
    document.body.classList.remove('latin');
    document.body.classList.add('cyrillic');
    updateTextToCyrillic();
});

function updateTextToLatin() {
    document.querySelectorAll('.cyrillic-text').forEach(element => {
        element.classList.add('hidden');
    });
    document.querySelectorAll('.latin-text').forEach(element => {
        element.classList.remove('hidden');
    });
}

function updateTextToCyrillic() {
    document.querySelectorAll('.latin-text').forEach(element => {
        element.classList.add('hidden');
    });
    document.querySelectorAll('.cyrillic-text').forEach(element => {
        element.classList.remove('hidden');
    });
}
