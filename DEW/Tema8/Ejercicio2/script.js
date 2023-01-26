// API key
const API_KEY = 'RGAPI-90f5d06e-dec9-4a77-8d97-ee8e43b724a4';

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
// ColorThief Library import
const colorThief = new ColorThief();

// Button Listener
document.getElementById("submitBtn").addEventListener("click", search);
document.getElementById("summonerName").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    search();
  }
});

// Button Listener
async function search() {
  //Receive the summoner's name
  let summonerName = document.getElementById("summonerName").value;
  //let summonerName = "Haizefüjin";

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
  // console.log(summoner);
  // console.log(summonerChamps);
  // console.log(champsName);

  // Create table element
  let champsTable = document.createElement('table');
  champsTable.setAttribute("id", "champsTable");
  champsTable.classList.add('table', 'table-striped');
  //Sumomner Info
  level.textContent = summoner.summonerLevel;

  let iconUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${summoner.profileIconId}.png`;
  //Clean icon
  cleanNodes(icon)
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
    let champData = Object.values(champsName.data).find(x => x.key == champ.championId);
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

  // Add table to the DOM
  bestsChamps.appendChild(champsTable);
  setBackgroundColor(iconUrl);
  //setBackgroundIcon(iconUrl)
}
//Function to clean nodes
function cleanNodes(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
// function setBackgroundIcon(iconUrl) {
//   document.body.style.backgroundImage = "url(" + iconUrl + ")";
//   document.body.style.backgroundSize = "cover";
//   document.body.style.backgroundRepeat = "no-repeat";
// }

// Crear una función para asignar el color de fondo
async function setBackgroundColor(iconUrl) {
  // Crea un canvas en el HTML
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  // Carga la imagen del icono de invocador en el canvas
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = iconUrl;
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    var imageData = ctx.getImageData(0, 0, img.width, img.height);

    // Utiliza la librería Canvas para analizar los colores dominantes de la imagen
    var colorThief = new ColorThief();
    var dominantColor = colorThief.getColor(imageData);

    // Establece el color dominante como el color de fondo del HTML
    document.body.style.backgroundColor = "rgb(" + dominantColor[0] + "," + dominantColor[1] + "," + dominantColor[2] + ")";
  };

}
