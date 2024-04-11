// Haetaan lomakkeen elementti DOM:sta
const form = document.querySelector('form');

// Kuunnellaan lomakkeen lähettämistä
form.addEventListener('submit', function(event) {
    // Estetään lomakkeen oletustapahtuma, jotta voimme suorittaa omat toimintamme
    event.preventDefault();

    // Tarkistetaan sähköpostin muoto käyttäen Regular Expressionia
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim(); // Poistetaan ylimääräiset välilyönnit alusta ja lopusta
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        // Jos sähköposti ei ole oikeassa muodossa, näytetään virheviesti
        showError(emailInput, 'Syötä validi sähköpostiosoite.');
        return;
    }

    // Tarkistetaan puhelinnumeron muoto käyttäen Regular Expressionia
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value.trim(); // Poistetaan ylimääräiset välilyönnit alusta ja lopusta
    const phoneRegex = /^\d{10}$/; // Oletetaan, että puhelinnumero on 10 numeroa pitkä

    if (!phoneRegex.test(phoneValue)) {
        // Jos puhelinnumero ei ole oikeassa muodossa, näytetään virheviesti
        showError(phoneInput, 'Syötä validi puhelinnumero (10 numeroinen).');
        return;
    }

    // Haetaan lomakkeen tiedot
  /*  const formData = new FormData(form);

    // Lähetetään lomakkeen tiedot Fetch API:n avulla
    fetch('palvelimen_url', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Virhe lomakkeen lähetyksessä');
        }
        return response.json();
    })
    .then(data => {
        // Käsitellään vastausdata tarvittaessa
        console.log('Lomake lähetetty onnistuneesti:', data);
        // Voit ohjata käyttäjän esimerkiksi kiitos-sivulle
        // window.location.href = 'kiitos.html';
    })
    .catch(error => {
        console.error('Lomakkeen lähettämisessä tapahtui virhe:', error);
        // Voit näyttää käyttäjälle virheilmoituksen
    }); */
});

// Apufunktio virheviestin näyttämiseen
/* function showError(input, message) {
    // Etsitään virheviestielementti (jos sellainen on) tai luodaan sellainen
    let errorElement = input.parentElement.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        input.parentElement.appendChild(errorElement);
    }

    // Asetetaan virheviesti ja näytetään se
    errorElement.innerText = message;
    input.classList.add('error'); // Lisätään input-kentälle virheen ilmaisin tyyliä varten 
} */
