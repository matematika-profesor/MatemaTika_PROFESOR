
document.getElementById('latinButton').addEventListener('click', () => {
    document.body.classList.add('latin');
    document.body.classList.remove('cyrillic');
    toggleLanguage(false);
});

document.getElementById('cyrillicButton').addEventListener('click', () => {
    document.body.classList.add('cyrillic');
    document.body.classList.remove('latin');
    toggleLanguage(true);
});

document.getElementById('showPricesBtn').addEventListener('click', showPrices);
document.getElementById('showPricesBtnCyr').addEventListener('click', showPrices);

function toggleLanguage(isCyrillic) {
    document.querySelectorAll('.latin-text').forEach(el => el.classList.toggle('hidden', isCyrillic));
    document.querySelectorAll('.cyrillic-text').forEach(el => el.classList.toggle('hidden', !isCyrillic));
}

function showPrices() {
    document.querySelectorAll('.price').forEach(el => el.classList.toggle('hidden'));
}
