// haetaan nappi josta lähetetään formi ja luodaan käyttäjä
const lisaaMerkinta = document.querySelector('.tallenna');

lisaaMerkinta.addEventListener('click', async (evt) => {
  evt.preventDefault();
  console.log('Nyt lisätään päiväkirjamerkintä');

  const url = 'http://127.0.0.1:3000/api/entries';

  // # Create user
  // POST http://127.0.0.1:3000/api/users
  // content-type: application/json

  const form = document.querySelector('.paivakirjamerkinta');

  // Validointi, jos päällä niin tutkitaan onko kentät kunnossa

  // Check if the form is valid
  if (!form.checkValidity()) {
    // If the form is not valid, show the validation messages
    form.reportValidity();
    return; // Exit function if form is not valid
  }

  console.log('Tiedot valideja, jatketaan');

  const selectedEmotion = form.querySelector('input[name=emotion]:checked');
  const emotion = selectedEmotion ? selectedEmotion.value : '';

  const data = {
    date: form.querySelector('input[name=date]').value,
    title: form.querySelector('input[name=ots]').value,
    text: form.querySelector('input[name=message]').value,
    hrvData: form.querySelector('input[name=hrv]').value,
    emotion: emotion,
  };

  const options = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
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
});
