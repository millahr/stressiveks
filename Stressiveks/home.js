import { fetchData } from './fetch.js';
const lisaaMerkinta = document.querySelector('.submit');

 async function haeId(){
  console.log('Testataan TOKENIA ja haetaan käyttäjän id');


  const url = 'http://localhost:3000/api/auth/me';
  const muntokeni = localStorage.getItem('token');
  console.log('Tämä on haettu LocalStoragesta', muntokeni);

  const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      Authorization: 'Bearer: ' + muntokeni,
    },
  };

  try {
    const data = await fetchData(url, options);
    console.log(data);
    return data.user.user_id;
  } catch (error) {
    console.error('Virhe haettaessa käyttäjätietoja', error);
    return null; // Voit käsitellä virhetilanteen haluamallasi tavalla
  }
};



/* lisaaMerkinta.addEventListener('click', async (evt) => {
  evt.preventDefault();
  console.log('Nyt lisätään päiväkirjamerkintä');

 

  const url = 'http://127.0.0.1:3000/api/entries';
  let token = localStorage.getItem('token');

  const form = document.querySelector('.paivakirjamerkinta');

  // Validointi, jos päällä niin tutkitaan onko kentät kunnossa

  // Check if the form is valid
  if (!form.checkValidity()) {
    // If the form is not valid, show the validation messages
    form.reportValidity();
    return; // Exit function if form is not valid
  }

  console.log('Tiedot valideja, jatketaan');

  const messageTextarea = document.querySelector('textarea[name="message"]');
  const messageValue = messageTextarea.value;
  const selectedEmotion = form.querySelector('input[name=emotion]:checked');
  const emotion = selectedEmotion ? selectedEmotion.value : '';
 

  const data = {
    user_id: id,
    entry_date: form.querySelector('input[name=date]').value,
    title: form.querySelector('input[name=ots]').value,
    notes: messageValue,
    HRVData: form.querySelector('input[name=hrv]').value,
    mood: emotion,
  };

  const options = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer: ' + token,
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };

  // fetchData(url, options).then((data) => {
  //   // käsitellään fetchData funktiosta tullut JSON
  //   console.log(data);
  // });

  // parempi ehkä käyttää samaa muotoilua
  try {
    const responseData = await fetchData(url, options);
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}); */
lisaaMerkinta.addEventListener('click', async (evt) => {
    evt.preventDefault();
    console.log('Nyt lisätään päiväkirjamerkintä');
  
    try {
      const id = await haeId(); // Haetaan user_id asynkronisesti
  
      const url = 'http://127.0.0.1:3000/api/entries';
      const token = localStorage.getItem('token');
      const form = document.querySelector('.paivakirjamerkinta');
  
      // Validointi, jos päällä niin tutkitaan onko kentät kunnossa
      if (!form.checkValidity()) {
        form.reportValidity();
        return; // Lopeta funktio, jos lomake ei ole kelvollinen
      }
  
      console.log('Tiedot valideja, jatketaan');
  
      const messageTextarea = document.querySelector('textarea[name="message"]');
      const messageValue = messageTextarea.value;
      const selectedEmotion = form.querySelector('input[name=emotion]:checked');
      const emotion = selectedEmotion ? selectedEmotion.value : '';
  
      const data = {
        user_id: id, // Lisätään haettu user_id
        entry_date: form.querySelector('input[name=date]').value,
        title: form.querySelector('input[name=ots]').value,
        notes: messageValue,
        HRVData: form.querySelector('input[name=hrv]').value,
        mood: emotion,
      };
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token, // Korjattu Authorization-header
        },
        body: JSON.stringify(data),
      };
  
      const responseData = await fetchData(url, options); // Suoritetaan POST-pyyntö
      console.log(responseData);
    } catch (error) {
      console.error('Virhe päiväkirjamerkinnän lisäämisessä:', error);
    }
  });
  
