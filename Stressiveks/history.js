import { fetchData } from './fetch.js';

// Funktio hakee käyttäjän id:n
async function haeUserId() {
  try {
    const url = 'http://localhost:3000/api/auth/me';
    const muntokeni = localStorage.getItem('token');

    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer: ' + muntokeni,
      },
    };

    const response = await fetchData(url, options);
    return response.user.user_id; // Palauta käyttäjän user_id
  } catch (error) {
    console.error('Virhe käyttäjän id:n hakemisessa:', error);
    return null;
  }
}
const userId = await haeUserId(); // Hae käyttäjän user_id

// Funktio päiväkirjamerkintöjen hakemiseen ja näyttämiseen taulukossa käyttäjän user_id:n perusteella
async function loadEntries(userId) {
  try {
    const url = `http://localhost:3000/api/entries/${userId}`;
    const entries = await fetchData(url);

    const tableBody = document.querySelector('.historia tbody');
    tableBody.innerHTML = ''; // Tyhjennä taulukon sisältö ennen uuden lisäämistä

    entries.forEach((entry) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.entry_date}</td>
        <td>${entry.title}</td>
        <td>${entry.notes}</td>
        <td>${entry.HRVData}</td>
        <td>${entry.mood}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Virhe päiväkirjamerkintöjen hakemisessa:', error);
  }
}

// Kuuntele "Lataa lisää" -painiketta ja hae käyttäjän id ennen päiväkirjamerkintöjen hakemista
document.addEventListener('DOMContentLoaded', async () => {
  const loadMoreButton = document.querySelector('.nap button');
  loadMoreButton.addEventListener('click', async () => {
    const userId = await haeUserId(); // Hae käyttäjän user_id
    if (userId) {
      await loadEntries(userId); // Hae päiväkirjamerkinnät käyttäjän user_id:n perusteella
    } else {
      console.error('Käyttäjän id:tä ei voitu hakea.');
    }
  });

  // Lataa päiväkirjamerkinnät ensimmäisen kerran, kun sivu ladataan
  const userId = await haeUserId(); // Hae käyttäjän user_id
  if (userId) {
    await loadEntries(userId); // Hae päiväkirjamerkinnät käyttäjän user_id:n perusteella
  } else {
    console.error('Käyttäjän id:tä ei voitu hakea.');
  }
});
