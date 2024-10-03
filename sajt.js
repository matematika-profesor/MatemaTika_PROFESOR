// Funkcija za promenu pisma
function changeFont(font) {
    document.body.setAttribute('data-font', font);
}

// Slanje emaila putem EmailJS
function sendEmail(event) {
    event.preventDefault(); // Sprečava ponovno učitavanje stranice

    const form = event.target;
    const formData = new FormData(form);

    emailjs.sendForm('service_w7f0n2a', 'template_rt1po5b', formData)
        .then(() => {
            alert('Poruka je uspešno poslata!');
            form.reset(); // Resetuje formu
        }, (error) => {
            alert('Greška: ' + JSON.stringify(error));
        });
}

// Dodavanje event listener-a za slanje emaila
document.getElementById('contactForm').addEventListener('submit', sendEmail);

// Dodavanje funkcionalnosti za izbor jezika
document.getElementById('latinBtn').addEventListener('click', () => changeFont('latin'));
document.getElementById('cyrillicBtn').addEventListener('click', () => changeFont('cyrillic'));

// Prikazivanje geometrijskih oblika u pozadini
function createGeometricShapes() {
    const numShapes = 20; // Broj oblika
    const container = document.querySelector('.geometric-background');

    for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');

        // Postavljanje nasumičnih dimenzija, pozicija i boje
        const size = Math.random() * 100 + 20; // Veličina između 20px i 120px
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
        shape.style.animationDuration = `${Math.random() * 3 + 2}s`; // Trajanje animacije između 2s i 5s

        container.appendChild(shape);
    }
}

// Inicijalizacija geometrijskih oblika na učitavanju
window.onload = createGeometricShapes;
