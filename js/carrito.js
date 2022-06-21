let amazonita = 350
let amatista = 450
let aventurina = 300
let citrino = 350
let cuarzoRosa = 400
let fluoritaVerde = 350
let sahumerioPS = 450
let kitHierbas = 1350
let mysteryBox = 2000
let calendula = 80
let menta = 50
let sahumerioR = 450

let si = "si"


function addInfo(){
    let inputNombre= document.getElementById("inputNombre").value;
    let inputApellido= document.getElementById("inputApellido").value;
    let inputDireccion= document.getElementById("inputDireccion").value;
    let inputEdad= document.getElementById("inputEdad").value;
    
    let envios = document.getElementById("envios")
    let li = document.createElement("li");
li.innerHTML = `<h2>${inputNombre} - ${inputApellido} </h2>
                <p>Dirección: ${inputDireccion}</p>`;

envios.append(li)
}

