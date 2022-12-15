//Variables
var btNew = document.getElementById('btNew');
var list = document.querySelector('#list');
var count = true;

//Add new toppings
btNew.addEventListener('click', function (e) {

    let input = document.createElement('input');
    input.type = 'text';
    input.setAttribute("class", "form-check-input");
    input.setAttribute("style", "width:150px; height:25px; margin-top: 1.5em;");
    input.setAttribute("id", "newTopping");

    if (count) {
        list.appendChild(input);
        btNew.textContent = "Add!";
        count = false;
    } else {
        let newValue = document.getElementById("newTopping").value;
        document.getElementById("newTopping").remove();
        let newCheck = document.createElement('input');
        newCheck.setAttribute("class", "form-check-input");
        newCheck.type = 'checkbox';
        newCheck.setAttribute("value", newValue);
        newCheck.setAttribute("id", newValue);
        newCheck.setAttribute("name", newValue);
        newCheck.checked = true;
        let newLabel = document.createElement('label');
        newLabel.setAttribute("class", "form-check-label");
        newLabel.setAttribute("for", newValue);
        newLabel.textContent = newValue;
        list.appendChild(newCheck);
        list.appendChild(newLabel);
        list.appendChild(document.createElement("br"));
        btNew.textContent = "New Topping?";
        count = true;
    }
});

//Print user selections
btSel.addEventListener("click", function (e) {
    //Save all the toppings
    let toppings = Array.from(document.querySelectorAll('input:checked'));
    //Get the crust from the last element
    let crust = toppings.pop().value;
    //Check if there is 1 topping 1 crust selected
    if (crust == "regular" || crust == "deep dish" || crust == "thin" && toppings.length > 0) {
        result.textContent = "Your order: " + crust + " dough with";
        for (let index = 0; index < toppings.length; index++) {
            if (index == (toppings.length - 1)) {
                result.textContent += " " + toppings[index].value.toLowerCase() + ".";
            } else {
                result.textContent += " " + toppings[index].value.toLowerCase() + ",";
            }
        }
    } else {
        result.textContent = "Select at least 1 topping and crust...";
    }

});