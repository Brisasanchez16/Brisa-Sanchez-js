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




let carrito = []

console.log (document.getElementById("producto1").addEventListener("click", prod1))
document.getElementById("producto2").addEventListener("click", prod2)
document.getElementById("producto3").addEventListener("click", prod3)
document.getElementById("producto4").addEventListener("click", prod4)
document.getElementById("producto5").addEventListener("click", prod5)
document.getElementById("producto6").addEventListener("click", prod6)
document.getElementById("producto7").addEventListener("click", prod7)
document.getElementById("producto8").addEventListener("click", prod8)
document.getElementById("producto9").addEventListener("click", prod9)
document.getElementById("producto10").addEventListener("click", prod10)
document.getElementById("producto11").addEventListener("click", prod11)
document.getElementById("producto12").addEventListener("click", prod12)


function prod1(){
    console.log(carrito.push(450))
}
function prod2(){
    carrito.push(350)
}
function prod3(){
    carrito.push(300)
}
function prod4(){
    carrito.push(350)
}
function prod5(){
    carrito.push(400)
}
function prod6(){
    carrito.push(350)
}
function prod7(){
    carrito.push(450)
}
function prod8(){
    carrito.push(1350)
}
function prod9(){
    carrito.push(2000)
}
function prod10(){
    carrito.push(50)
}
function prod11(){
    carrito.push(450)
}
function prod12(){
    carrito.push(80)
}

let sumaTotal = 0;

for ( i = 0 ; i < carrito.leght ; i++){
sumaTotal + carrito[i];
}

let mosCar=document.getElementById("mostrar")

mosCar.addEventListener("click",()=>{
    (alert(sumaTotal))
}
)
