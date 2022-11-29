var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');
for (let h = 0; h < 3; h++) {

}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);
    var nombre = 2;
    datos.append("nombre", nombre);

    fetch('post.php', {
        method: 'POST',
        body: datos
    })
        .then(res => res.json())
        .then(data => {
            let keys;
            data.forEach(element => {
                keys = Object.keys(element);
            });
            for (let e = 0; e < data.length; e++) {
                let option = document.createElement("option");
                option.setAttribute("value", data[e][keys[0]]);
                let optionTxt = document.createTextNode(data[e][keys[1]]);
                option.appendChild(optionTxt);
                select.appendChild(option);
            }
        })
});

function createInputs(data) {
    for (let i = 0; i < data.length; i++) {
        const element = array[i];
        
    }
}