import { fetchData } from './fetch.js';

const allButton = document.querySelector('.haeEntryt');
allButton.addEventListener('click', getEntries);

async function getEntries() {
    console.log('Haetaan päiväkirjamerkinnät');
    const url = 'http://127.0.0.1:3000/api/entries/5';
    let token = localStorage.getItem('token');
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer: ' + token,
      },
    };
  
    fetchData(url, options).then((data) => {
      createTable(data);
    });

    function createTable(merkinnat) {
        console.log(merkinnat);
      
        // etitään tbody elementti
        const tbody = document.querySelector('.tbody');
        tbody.innerHTML = '';
      
        // loopissa luodaan jokaiselle tietoriville oikeat elementit
        // elementtien sisään pistetään oikeat tiedot
      
        merkinnat.forEach((rivi) => {
          console.log(rivi.entry_date, rivi.title, rivi.notes, rivi.HRVData, rivi.mood);
      
          // Luodaan jokaiselle riville ensin TR elementti alkuun
          const tr = document.createElement('tr');
      
          // Luodaan soluja mihihin tiedot
          const td1 = document.createElement('td');
          td1.innerText = rivi.entry_date;
      
          // Luodaan soluja mihihin tiedot
          const td2 = document.createElement('td');
          td2.innerText = rivi.title;
      
          const td3 = document.createElement('td');
          td3.innerText = rivi.notes;
      
          // td4
          const td4 = document.createElement('td');
          td4.innerText = rivi.HRVData;
      
          // td5
          var td5 = document.createElement('td');
          td5.innerText = rivi.mood;
      
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tbody.appendChild(tr);
        });
      }}