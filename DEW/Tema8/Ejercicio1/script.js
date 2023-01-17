var num = Math.floor(Math.random() * 11);

function ej1(num) {
    return new Promise((resolve, reject) => {
        if (num >= 5) {
            resolve("Estas aprobado, tu nota: " + num);
        } else {
            reject("Has suspendido, tu nota: " + num);
        }
    });
}

ej1(num)
    .then((data) => { result.innerHTML = data; })
    .catch((data) => { result.innerHTML = data; });

setTimeout(() => {
    location.reload();
}, 5000)

