import './style.css';
import { fetchData } from './fetch.js';


// haetaan nappi josta haetaan formi ja logataan sisään
// tästä saadaan TOKEN
const loginUser = document.querySelector('.loginuser');

loginUser.addEventListener('click', async (evt) => {
  evt.preventDefault();
  console.log('Nyt logataan sisään');

  // # Login
  // POST http://localhost:3000/api/auth/login
  // content-type: application/json

  // {
  //   "email": "user",
  //   "password": "secret"
  // }

  const url = 'http://localhost:3000/api/auth/login';

  const form = document.querySelector('.login_form');

  const data = {
    username: form.querySelector('input[name=email]').value,
    password: form.querySelector('input[name=password]').value,
  };

  const options = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };


  fetchData(url, options).then((data) => {
    // käsitellään fetchData funktiosta tullut JSON
    console.log(data);
    console.log(data.token);
    localStorage.setItem('token', data.token);
    // jos on token, cpnsole loggaa ett kaikki hyvin
    // jos ei niin console loggaa että tokenia ei ollut
    // TÄSSÄ oieasta kannattaa tehdä niin että
    // fetch.js palauttaa BE puolen validointivirheen
    // joka käsitellään

    if (data.token == undefined) {
      alert('Unauth user: käyttäjänimi tai salasana ei oikein');
      // esim. ottaa esiin piilotettu kenttä
    } else {
      alert(data.message);
      localStorage.setItem('name', data.user.username);
      window.location.href = 'home.html';
    }

    logResponse('loginResponse', `localStorage set with token value: ${data.token}`);
  });
});

// Haetaan nappi josta testataan TOKENIN käyttöä, /auth/me
const meRequest = document.querySelector('#meRequest');
meRequest.addEventListener('click', async () => {
  console.log('Testataan TOKENIA ja haetaan käyttäjän tiedot');

  // # Get user info by token (requires token)
  // GET http://localhost:3000/api/auth/me
  // Authorization: Bearer (put-user-token-here)

  const url = 'http://localhost:3000/api/auth/me';
  const muntokeni = localStorage.getItem('token');
  console.log('Tämä on haettu LocalStoragesta', muntokeni);

  const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      Authorization: 'Bearer: ' + muntokeni,
    },
  };

  console.log(options);

  fetchData(url, options).then((data) => {
    // käsitellään fetchData funktiosta tullut JSON
    console.log(data);
    logResponse('meResponse', `Authorized user info: ${JSON.stringify(data)}`);
  });
});

// Haetaan nappi josta tyhjennetään localStorage
const clear = document.querySelector('#clearButton');
clear.addEventListener('click', clearLocalStorage);

// Apufunktio, kirjoittaa halutin koodiblokin sisään halutun tekstin
function logResponse(codeblock, text) {
  document.getElementById(codeblock).innerText = text;
}

// Apufunktio, Tyhjennä local storage
function clearLocalStorage() {
  localStorage.removeItem('token');
  logResponse('clearResponse', 'localStorage cleared!');
}