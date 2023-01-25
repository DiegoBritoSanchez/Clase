const API_KEY = 'RGAPI-b9264f8e-f82c-4f2c-8a9d-221d50666ce4';
const VERSION = '13.1.1';
const LANGUAGE = 'es-ES';

document.getElementById("submitBtn").addEventListener("click", function () {
    let summonerName = document.getElementById("summonerName").value;
    let url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let summonerId = data.id;
            let url = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${API_KEY}`
            return fetch(url)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var count = 0;
            fetch("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/es_ES/champion.json")
                .then(response => response.json())
                .then(dataChampion => {
                    for (let champion of data) {
                        let championId = champion.championId;
                        console.log(typeof dataChampion.data['Aatrox']);
                        //console.log(`Nombre: ${dataChampion.data[championId].name} - Nivel: ${champion.championLevel} - Puntos: ${champion.championPoints}`);
                        count++;
                        if (count >= 1) break;
                    }
                })
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))
});

