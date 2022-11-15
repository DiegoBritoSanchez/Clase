// * <span><img src="icons/icons8-done-48.png" alt="" style="width: 36px; "></span>
// todo pasar a un array todos los input del html
var questions = document.querySelectorAll("#pregunta input[type=radio]");
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", comprobar);
}

function comprobar() {
    var newElement = document.createElement("span");
    var id = 0;
    newElement.setAttribute('id', 'span' + id++);
    var radioButton = [...document.querySelectorAll("input[type=radio]")];
    var label = [...document.querySelectorAll("label")];
    var options = ["Si", "No", "Ns"];
    var control = Math.floor(Math.random() * options.length);

    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked && !document.getElementById("span" + id++)) {
            if (radioButton[i].value == options[control]) {
                newElement.innerHTML = "<img src='icons/tick.png' style='width: 36px;'>";
                label[i].insertAdjacentElement('afterend', newElement);
            } else if (!document.getElementById("span" + id++)){
                newElement.innerHTML = "<img src='icons/cross.png' style='width: 36px;'>";
                label[i].insertAdjacentElement('afterend', newElement);
            }
        }
    }
}