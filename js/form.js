function input(){
    let persona = {
        nombre:document.getElementById("inputNombre").value,
        direccion: document.getElementById("inputDireccion").value,
        edad : document.getElementById("inputEdad").value
    }
    localStorage.setItem("Usuario", JSON.stringify(persona))
    JSON.parse(localStorage.getItem(persona))
    console.log(persona)

    let {edad} = persona;
    edad >= 18 ? swal.fire("Felicitaciones!","El envio fue aceptado. Gracias por su compra", 'success') : swal.fire("Lo sentimos","el envio fue rechazado, ya que no cumple con la mayoria de edad", 'error')
}

