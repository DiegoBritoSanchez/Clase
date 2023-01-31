//* Si la API_KEY no funciona, entrar en la siguiente direccion https://developer.riotgames.com/
//* registrarse en caso de no estarlo y obtener una nueva key.
//* estoy a la espera de que RIOT me conceda un key permanente para mi proyecto
// API key
const API_KEY = 'RGAPI-3839e780-5189-4ea3-9d0c-080ce61b0eb5';

//Version and language
const version = '13.1.1';
const language = 'es_ES';

//Local variables to work
var summoner;
var summonerChamps;
var champsName;
var fetchSummoner;
var fetchBestChamps;
var fetchChampNames;
var api2;


// Button Listener
document.getElementById("submitBtn").addEventListener("click", search);
document.getElementById("summonerName").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    search();
  }
});

document.getElementById("summonerName").value = localStorage.getItem("summonerName") || "";

// Button Listener
async function search() {
  let summonerName = document.getElementById("summonerName").value;

  localStorage.setItem("summonerName", summonerName);

  // First API
  const api = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`;

  // First call
  fetchSummoner = await fetch(api)
    .then(response => {
      if (response.status_code == "400") {
        console.log("xd");
      } else {
        return response.json();
      }
    })
    .then(data => {
      summoner = data;
    })
    .catch(error => {
      console.log(error.status_code);
      // Show error message
      summonerInfoDiv.innerHTML = '<p>Error: no se puede obtener la información del invocador</p>';
    });
  const api2 = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summoner.id}?api_key=${API_KEY}`;
  ''
  fetchBestChamps = await fetch(api2)
    .then(response => response.json())
    .then(data => {
      summonerChamps = data;
    })
    .catch(error => {
      // Show error message
      summonerInfoDiv.innerHTML = '<p>Error: no se puede obtener la información del invocador</p>';
      console.error(error);
    });
  const api3 = `https://ddragon.leagueoflegends.com/cdn/` + version + `/data/` + language + `/champion.json`;
  fetchChampNames = await fetch(api3)
    .then(response => response.json())
    .then(data => {
      champsName = data;
    })
    .catch(error => {
      // Show error message
      summonerInfoDiv.innerHTML = '<p>Error: no se puede obtener la información del invocador</p>';
      console.error(error);
    });

  showData();
};
async function showData() {
  //Clean Tables
  cleanNodes(bestsChamps);

  //Summoner information
  await fetchSummoner;
  await fetchBestChamps;
  await fetchChampNames;

  // Create table element
  let champsTable = document.createElement('table');
  champsTable.setAttribute("id", "champsTable");
  champsTable.classList.add('table', 'table-striped');
  //Sumomner Info
  level.textContent = summoner.summonerLevel;

  let iconUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${summoner.profileIconId}.png`;
  //Clean icon
  cleanNodes(icon);
  let iconImg = document.createElement('img');
  iconImg.setAttribute('width', '52');
  iconImg.setAttribute('height', '52');
  iconImg.setAttribute('class', 'img-fluid rounded');
  iconImg.src = iconUrl;
  icon.appendChild(iconImg);

  // Create table bests champs
  let title = document.createElement('h2');
  title.setAttribute('class', 'text-center');
  title.textContent = "Best Champs";
  bestsChamps.appendChild(title);
  let champsTableHead = document.createElement('thead');
  let champsTableHeadRow = document.createElement('tr');
  let th1 = document.createElement('th');
  th1.textContent = 'Champion';
  let th2 = document.createElement('th');
  th2.textContent = 'Points';
  let th3 = document.createElement('th');
  th3.textContent = 'Chest';
  champsTableHeadRow.appendChild(th1);
  champsTableHeadRow.appendChild(th2);
  champsTableHeadRow.appendChild(th3);
  champsTableHead.appendChild(champsTableHeadRow);
  champsTable.appendChild(champsTableHead);

  // Create table body
  let champsTableBody = document.createElement('tbody');
  let bestFive = summonerChamps.slice(0, 5);
  bestFive.map(function (champ) {
    let champData = Object.values(champsName.data).filter(x => x.key == champ.championId)[0];
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = champData.name;
    let td2 = document.createElement('td');
    td2.textContent = champ.championPoints;
    let td3 = document.createElement('td');
    td3.textContent = champ.chestGranted ? 'Yes' : 'No';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    champsTableBody.appendChild(tr);
  });
  champsTable.appendChild(champsTableBody);


  //Champ searcher
  cleanNodes(searcher);
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = "Find a champ:";
  let td2 = document.createElement('td');
  let input = document.createElement('input');
  input.setAttribute('class', 'form-control');
  input.setAttribute('style', 'width: auto;');
  input.setAttribute('id', 'ChampFinder');
  let button = document.createElement('button');
  button.setAttribute('class', 'btn btn-block');
  button.setAttribute('id', 'submitFinder');
  button.textContent = "Find";
  tr.appendChild(th);
  td2.appendChild(input);
  td2.appendChild(button);
  tr.appendChild(td2);
  searcher.appendChild(tr);
  searchButtons();

  // Add table to the DOM
  bestsChamps.appendChild(champsTable);
  cleanNodes(ownChamps);
}
//Function to clean nodes
function cleanNodes(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
function searchButtons() {
  document.getElementById("submitFinder").addEventListener("click", searchChamps);
  document.getElementById("ChampFinder").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      searchChamps();
    }
  });
}
function searchChamps() {
  //Clean the nodes
  cleanNodes(ownChamps);
  //Get the values with the first uppercase letter
  let champSearching = document.getElementById("ChampFinder").value[0].toUpperCase() + document.getElementById("ChampFinder").value.substring(1);
  //Find the champion key by the name
  let champData = Object.values(champsName.data).find(x => x.name == champSearching);
  //Iterate for the Champions array to find the data
  let champFinded;
  for (let i = 0; i < summonerChamps.length; i++) {
    if (champData.key == summonerChamps[i].championId) {
      champFinded = summonerChamps[i];
    }
  }


  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.textContent = champSearching;
  let td2 = document.createElement('td');
  td2.textContent = champFinded.championPoints;
  let td3 = document.createElement('td');
  td3.textContent = champFinded.chestGranted ? 'Yes' : 'No';
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  // Create table element
  let champTable = document.createElement('table');
  champTable.setAttribute("id", "champTable");
  champTable.classList.add('table', 'table-striped');
  // //Table tittle
  // let title2 = document.createElement('h2');
  // title2.setAttribute('class', 'text-center');
  // title2.textContent = "Find your own champion";
  // ownChamps.appendChild(title2);
  //Table elements
  let champTableHead = document.createElement('thead');
  let champTableHeadRow = document.createElement('tr');
  let th4 = document.createElement('th');
  th4.textContent = 'Champion';
  let th5 = document.createElement('th');
  th5.textContent = 'Points';
  let th6 = document.createElement('th');
  th6.textContent = 'Chest';
  champTableHeadRow.appendChild(th4);
  champTableHeadRow.appendChild(th5);
  champTableHeadRow.appendChild(th6);
  champTableHead.appendChild(champTableHeadRow);
  champTable.appendChild(champTableHead);
  champTable.appendChild(tr);
  //Add the table to the DOM
  ownChamps.appendChild(champTable);
}