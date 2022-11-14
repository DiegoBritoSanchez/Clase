// * <span><img src="icons/icons8-done-48.png" alt="" style="width: 36px; "></span>
// document.getElementById("pregunta1").innerHTML = 
// console.log(document.querySelector("#pregunta1 #success-outlined"));
document.querySelector("#pregunta1").addEventListener("click", comprobar);
var newElement = document.createElement("span");
function comprobar() {
    console.log(document.querySelector("#success-outlined2").checked);
    if (document.querySelector("#success-outlined2").checked) {
        if (document.querySelector("#success-outlined2").value == "Si") {
            newElement.innerHTML = "<img src='icons/tick.png' style='width: 36px; '>";
            document.querySelector("#success-outlined2 label").insertAdjacentElement('afterend', newElement);
        } else {
            newElement.innerHTML = "<img src='icons/wrong.png' style='width: 36px;'>";
            document.querySelector("#success-outlined2 label").insertAdjacentElement('afterend', newElement);
        }
    }
}


