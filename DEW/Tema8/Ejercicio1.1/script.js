const age = window.prompt("Gimme your age", 0);

function ej1(age) {
    return new Promise((resolve, reject) => {
        if (!isNaN(age)) {
            if (parseInt(age) >= 18) {
                resolve("Eres mayor de edad");
            } else {
                reject("Eres menor de edad");
            }
        } else {
            throw new Error("No has introducido una edad correcta");
        }
    });
}

ej1(age)
    .then((data) => { result.innerHTML = data; })
    .catch((data) => { result.innerHTML = data; });

// setTimeout(() => {
//     location.reload();
// }, 5000)