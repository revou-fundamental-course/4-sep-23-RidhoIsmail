const inputField = document.getElementById("inputField")
const hitungButton = document.getElementById("hitungButton")

inputField.addEventListener('input', function (){
    var inputNilai = inputField.value.trim()
    if(validasiInt(inputNilai)) {
        hitungButton.disabled = false
    } else {
        hitungButton.disabled = true
    }
})

function validasiInt(inputNilai) {
    const integerReg = /^-?\d+$/
    return integerReg.test(inputNilai)
}
