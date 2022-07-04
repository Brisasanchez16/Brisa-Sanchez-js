function input(){
    let persona = {
        nombre:document.getElementById("inputNombre").value,
        direccion: document.getElementById("inputDireccion").value,
        edad: document.getElementById("inputEdad").value
    }
    localStorage.setItem("Usuario", JSON.stringify(persona))
    
    JSON.parse(localStorage.getItem(persona))
    console.log(persona)
}

