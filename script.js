const inputText = document.getElementById("inputPass");
inputText.addEventListener("keyup", validar);
const validatorText = document.getElementById("textSecurity");
const buttonlogin = document.getElementById("buttonlogin");
buttonlogin.addEventListener("click", alerta);
const user = document.getElementById("inputuser");

function validar() {
    if (inputText.value.length < 8) {
        validatorText.style.color = "red";
        validatorText.textContent = "La clave no es segura.";
    } else if (inputText.value.length >= 8 && inputText.value.length <= 10) {
        validatorText.style.color = "blue";
        validatorText.textContent = "La clave es segura.";
    } else {
        buttonlogin.removeAttribute("disabled");
        validatorText.style.color = "green";
        validatorText.textContent = "La clave es muy segura.";
    }
}
function alerta() {
    alert("Hola, " + user.value);
}
function botonlogin() {}
