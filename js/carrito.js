/*let si = "si"


function carritoCristales(){
    let cristales = prompt ("Quiere añadir Cristales a su carrito?")
    if (cristales == si){
        let cantAmaz = prompt ("Cuantas amazonitas va a llevar?")
        let cantAmat = prompt ("Cuantas amatistas va a llevar?")
        let cantAve = prompt ("Cuantas aventurinas va a llevar?")
        let cantCit = prompt ("Cuantos citrinos va a llevar?")
        let cantCuar = prompt ("Cuantos cuarzos rosa va a llevar?")
        let cantFlu = prompt ("Cuantas fluoritas verdes va a llevar?")

        let sumaAmaz = (amazonita * cantAmaz)
        let sumaAmat = (amatista *cantAmat)
        let sumaAve = (aventurina * cantAve)
        let sumaCit = (citrino * cantCit)
        let sumaCuar = (cuarzoRosa * cantCuar)
        let sumaFlu = (fluoritaVerde * cantFlu)

        let resultadoCri = (sumaAmaz + sumaAmat + sumaAve + sumaCit + sumaCuar + sumaFlu)

        alert("$" + resultadoCri)
    }
}

function carritoHierbas(){
    let hierbas = prompt ("Quiere añadir Hierbas a su carrito?")
    if (hierbas == si){
        let cantKit = prompt ("Cuantos kit de hierbas va a llevar?")
        let cantCal = prompt ("Cuantas bolsitas de calendulas va a llevar?")
        let cantMen = prompt ("Cuantas bolsitas de menta a llevar?")

        let sumaKit = (kitHierbas * cantKit)
        let sumaCal = (calendula *cantCal)
        let sumaMen = (menta * cantMen)

        let resultadoHier = (sumaKit + sumaCal + sumaMen)

        alert("$" + resultadoHier)
    }
}

function carritoIncienso(){
    let incienso = prompt ("Quiere añadir inciensos a su carrito?")
    if (incienso == si){
        let cantSps = prompt ("Cuantos sahumerios de palo santo va a llevar?")
        let cantSr = prompt ("Cuantos sahumerios de rosas va a llevar?")

        let sumaSps = (sahumerioPS * cantSps)
        let sumaSr = (sahumerioR *cantSr)

        let resultadoInc = (sumaSps + sumaSr)

        alert("$" + resultadoInc)
    }
}

carritoCristales()
carritoHierbas()
carritoIncienso()
*/

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


let carrito = [];

let amatista = document.getElementById("producto1");
amatista.addEventListener("click", () => {
    carrito.push(450);
});
let amazonita = document.getElementById("producto2");
amazonita.addEventListener("click", () => {
    carrito.push(350);
});
let aventurina = document.getElementById("producto3");
aventurina.addEventListener("click", () => {
    carrito.push(300);
});
let citrino = document.getElementById("producto4");
citrino.addEventListener("click", () => {
    carrito.push(350);
});
let cuarzoRosa = document.getElementById("producto5");
cuarzoRosa.addEventListener("click", () => {
    carrito.push(400);
});
let fluoritaVerde = document.getElementById("producto6");
fluoritaVerde.addEventListener("click", () => {
    carrito.push(350);
});
let sahumerioPS = document.getElementById("producto7");
sahumerioPS.addEventListener("click", () => {
    carrito.push(450);
});
let kitHierbas = document.getElementById("producto8");
kitHierbas.addEventListener("click", () => {
    carrito.push(1350);
});
let mysteryBox = document.getElementById("producto9");
mysteryBox.addEventListener("click", () => {
    carrito.push(2000);
});
let menta = document.getElementById("producto10");
menta.addEventListener("click", () => {
    carrito.push(50);
});
let sahumerioR = document.getElementById("producto11");
sahumerioR.addEventListener("click", () => {
    carrito.push(450);
});
let calendula = document.getElementById("producto12");
calendula.addEventListener("click", () => {
    carrito.push(80);
});

let total = document.getElementById("total");
total.addEventListener("click", () => {
    let sumaTotal = 0;
    for (i = 0; i < carrito.length; i++) {
        sumaTotal += carrito[i];
        console.log(i);
    }
    alert(sumaTotal);
});