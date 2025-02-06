const inputText = document.getElementById("inputPass")
const validatorText = document.getElementById("textSecurity")

function validar() {
    if (inputText.value.length < 8) {
        validatorText.style.color = "red"
        validatorText.textContent = "La clave no es segura"
    } else if (inputText.value.length >= 8 && inputText.value.length <= 10){
        validatorText.style.color = "blue"
        validatorText.textContent = "La clave es segura"
    } else {
        validatorText.style.color = "green"
        validatorText.textContent = "La clave es muy segura"
    }
}

