//Variables
const api = "https://services.arcgis.com/hkQNLKNeDVYBjvFE/arcgis/rest/services/Alojamientos_turisticos/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&outSR=4326&f=json";
let reserves;
let fetchReserves;

//Functions
async function callAPI() {
    fetchReserves = await fetch(api)
        .then(response => response.json())
        .then(data => {
            reserves = data;
        })
        .catch(error => {
            console.log(error);
        });
    showData();
}

async function showData() {
    let dataManipulate = reserves.features;

    //Create THEAD
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'tbody');
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = "Nombre";
    let th2 = document.createElement('th');
    th2.textContent = "Tipo de alojamiento";
    let th3 = document.createElement('th');
    th3.textContent = "Categoría";
    let th4 = document.createElement('th');
    th4.textContent = "Municipio";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    thead.appendChild(tr);
    tableMain.appendChild(thead);

    dataManipulate.forEach(element => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = element.attributes.NOMBRE;
        let td2 = document.createElement('td');
        td2.textContent = element.attributes.TIPO;
        let td3 = document.createElement('td');
        td3.textContent = element.attributes.Est_LLav;
        let td4 = document.createElement('td');
        td4.textContent = element.attributes.MUNICIPIO;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    });
    tableMain.appendChild(tbody);
}

document.getElementById('btnSubmit').addEventListener('click', filterM);
document.getElementById('inputFind').addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        filterM();
    }
});

console.log(inputFindC.value);
document.getElementById('btnSubmitC').addEventListener('click', filterC);
document.getElementById('inputFindC').addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        filterC();
    }
});

function filterM() {
    let inputUser = inputFind.value[0].toUpperCase() + inputFind.value.substring(1);
    let dataManipulate = reserves.features;
    let dataFiltered;
    deleteNode(tbody);
    dataManipulate.forEach(element => {
        if (dataFiltered = Object.values(element).filter(x => x.MUNICIPIO.includes(inputUser))[0]) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.textContent = dataFiltered.NOMBRE;
            let td2 = document.createElement('td');
            td2.textContent = dataFiltered.TIPO;
            let td3 = document.createElement('td');
            td3.textContent = dataFiltered.Est_LLav;
            let td4 = document.createElement('td');
            td4.textContent = dataFiltered.MUNICIPIO;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);
        }
    });
}
function filterC() {
    let inputUser = inputFindC.value;
    let dataManipulate = reserves.features;
    let dataFiltered;
    deleteNode(tbody);
    dataManipulate.forEach(element => {
        if (dataFiltered = Object.values(element).filter(x => x.Est_LLav == inputUser)[0]) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.textContent = dataFiltered.NOMBRE;
            let td2 = document.createElement('td');
            td2.textContent = dataFiltered.TIPO;
            let td3 = document.createElement('td');
            td3.textContent = dataFiltered.Est_LLav;
            let td4 = document.createElement('td');
            td4.textContent = dataFiltered.MUNICIPIO;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);
        }
    });
}


function deleteNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
window.onload = callAPI();