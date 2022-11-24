import Incidencia from "./incidencia.js";

window.onload = init;

var incidentsList = Array();

function init() {

    form.addEventListener("submit", validate);
    show.addEventListener("click", showTable);

}

function validate(event) {
    event.preventDefault();
    validar();
}

function validar() {
    var date = document.getElementById("date").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var phone = document.getElementById("tel").value;
    var typeIncident = document.getElementById("typeIncident").value;
    var priority = document.querySelector("input[name=prio]:checked").value;

    var observations = document.getElementById("obs").value;

    var incidencia = new Incidencia(date, name, phone, email, typeIncident, priority, observations);
    console.log(incidencia);
    orderIncidents(incidencia);

    return true;
}

function showTable() {
    table.innerHTML = "<tr><th>Fecha</th><th>Nombre</th><th>Correo</th><th>Teléfono</th><th>Tipo de incidencia</th><th>Prioridad</th><th>Observaciones</th><th>Responsable</th>" +
        "<th>Estado</th></tr>";
    incidentsList.forEach(element => {
        table.innerHTML += "<tr><td>" + element.creationDate.toDateString() + "</td><td>" + element.user + "</td><td>" + element.mail + "</td><td>" + element.phone + "</td><td>" + element.typeIncident + "</td><td>" + element.priority +
            "</td><td>" + element.observations + "</td><td>" + element.responsible + "</td><td>" + element.state + "</td></tr>";
    });
}


function orderIncidents(object) {
    if (incidentsList.length > 0) {
        let lastIncident = incidentsList[incidentsList.length - 1];

        let newDate = object;
        let oldDate = lastIncident.creationDate;

        let oldDateAux = addPriority(lastIncident);
        let newDateAux = addPriority(object);

        if (newDateAux > oldDateAux) {
            incidentsList.push(object);
        } else {
            incidentsList.unshift(object);
        }

    } else {
        incidentsList.push(object);
    }

    function addPriority(object) {
        let dateAux;
        if (object.priority == "grave") {
            return dateAux = object.creationDate.getDate() + 1;
        } else if (object.priority == "medio") {
            return dateAux = object.creationDate.getDate() + 2;
        } else {
            return dateAux = object.creationDate.getDate() + 7;
        }
    }

}