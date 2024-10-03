document.getElementById('showPricesBtn').addEventListener('click', function() {
    // Prikaz cena na latinici
    document.querySelectorAll('.price.latin-text').forEach(function(el) {
        el.classList.remove('hidden');
    });
    document.querySelectorAll('.price.cyrillic-text').forEach(function(el) {
        el.classList.add('hidden');
    });
});

document.getElementById('showPricesBtnCyr').addEventListener('click', function() {
    // Prikaz cena na ćirilici
    document.querySelectorAll('.price.cyrillic-text').forEach(function(el) {
        el.classList.remove('hidden');
    });
    document.querySelectorAll('.price.latin-text').forEach(function(el) {
        el.classList.add('hidden');
    });
});

document.getElementById('latinButton').addEventListener('click', function() {
    document.querySelectorAll('.latin-text').forEach(function(el) {
        el.classList.remove('hidden');
    });
    document.querySelectorAll('.cyrillic-text').forEach(function(el) {
        el.classList.add('hidden');
    });
});

document.getElementById('cyrillicButton').addEventListener('click', function() {
    document.querySelectorAll('.cyrillic-text').forEach(function(el) {
        el.classList.remove('hidden');
    });
    document.querySelectorAll('.latin-text').forEach(function(el) {
        el.classList.add('hidden');
    });
});
