// API key
const API_KEY = 'RGAPI-b9264f8e-f82c-4f2c-8a9d-221d50666ce4';
const version = '13.1.1';
const language = 'es-ES';
var summoner;
var summonerChamps;
var champsName;
var fetchSummoner;
var fetchBestChamps;
var fetchChampNames;
var api2;

// Button Listener
document.getElementById("submitBtn").addEventListener("click", async function () {
  //   let summonerName = document.getElementById("summonerName").value;
  let summonerName = "Haizefüjin";

  // First API
  const api = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`;

  // First call
  fetchSummoner = await fetch(api)
    .then(response => response.json())
    .then(data => {
      summoner = data;
    })
    .catch(error => {
      // Show error message
      summonerInfoDiv.innerHTML = '<p>Error: no se puede obtener la información del invocador</p>';
      console.error(error);
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
  const api3 = `https://ddragon.leagueoflegends.com/cdn/` + version + `/data/es_ES/champion.json`;
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
});
async function showData() {
  //Summoner information
  await fetchSummoner;
  await fetchBestChamps;
  await fetchChampNames;


  let name = document.createElement('p');
  name.textContent = 'Summoner: ' + summoner.name;
  let level = document.createElement('p');
  level.textContent = 'Level: ' + summoner.summonerLevel;
  summonerInfoDiv.appendChild(name);
  summonerInfoDiv.appendChild(level);
  let bestFive = summonerChamps.slice(0, 5);
  bestFive.map(function (champ) {
    let champName = document.createElement('p');
    champName.textContent = 'Id: ' + champ.championId;
    console.log(champsName.find(function (champ) {
      return champ.key === championId;
    }));
    summonerInfoDiv.appendChild(champName);
  })



}

    // .then(response => response.json())
    // .then(summonerChamps => {
    //   var bestFive = summonerChamps.slice(0, 5);
    //   var textChamps = bestFive.map(function (champ) {
    //     summonerInfoDiv.innerHTML += `
    //     <p>Id: ${champ.championId}</p>
    //     <p>Nivel: ${champ.championLevel}</p>
    //     <p>Points: ${champ.championPoints}</p>
    //     <p>Chest Granted: ${champ.chestGranted}</p>
    //   `;
    //   });
    //   console.log(textChamps);

    // })