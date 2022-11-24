export default class Incidencia {

    constructor(date, user, phone, mail, typeIncident, priority, observations, responsible = "sin asignar", state = "tramitado",) {
        this.creationDate = new Date(date);
        this.user = user;
        this.phone = phone;
        this.mail = mail;
        this.responsible = responsible;
        this.typeIncident = typeIncident;
        this.priority = priority;
        this.state = state;
        this.observations = observations;
    }


}