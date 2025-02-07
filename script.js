const inputText = document.getElementById("inputPass");
inputText.addEventListener("keyup", validar);
const validatorText = document.getElementById("textSecurity");
const buttonlogin = document.getElementById("buttonlogin");
buttonlogin.addEventListener("click", alerta);
const user = document.getElementById("inputuser");
user.addEventListener("keyup", validar);
function validar() {
    if (inputText.value.length == 0 && user.value.length == 0) {
        validatorText.textContent = "";
    } else if (inputText.value.length == 0) {
        validatorText.textContent = "Falta clave.";
        validatorText.style.color = "red";
    } else if (user.value.length == 0) {
        validatorText.textContent = "Falta Usuario.";
        validatorText.style.color = "red";
    } else if (inputText.value.length < 8) {
        validatorText.style.color = "red";
        validatorText.textContent = "La clave no es segura.";
        buttonlogin.disabled = true;
    } else if (inputText.value.length >= 8 && inputText.value.length <= 10) {
        validatorText.style.color = "blue";
        validatorText.textContent = "La clave es segura.";
        buttonlogin.disabled = true;
    } else {
        if (user.value == "") {
            buttonlogin.setAttribute("disabled", "true");
            buttonlogin.setAttribute("class", "botonred");
        } else {
            buttonlogin.removeAttribute("disabled");
            buttonlogin.setAttribute("class", "botonverde");
        }
        validatorText.style.color = "green";
        validatorText.textContent = "La clave es muy segura.";
    }
}
function alerta() {
    alert("Hola, " + user.value);
}
