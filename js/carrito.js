/*let carrito = [];

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
});*/

let total = document.getElementById("total");
total.addEventListener("click", () => {
    let sumaTotal = 0;
    for (i = 0; i < carrito.length; i++) {
        sumaTotal += carrito[i];
        console.log(i);
    }

        Swal.fire({
            title: 'El total de su compra es:',
            text: `$ ${sumaTotal}`,
            imageUrl: 'https://media1.giphy.com/media/uWlpPGquhGZNFzY90z/giphy.gif?cid=ecf05e47cf3vzld49tf88p25v8arrs4ph4b725ijjwm6wsjk&rid=giphy.gif&ct=g',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
});

const productos = document.querySelector('.galeria-fotos')

fetch('/productos/stock.json')
    .then( (res)=> res.json ())
    .then( (data)=> {

        data.forEach((producto) =>{
            const galeria = document.createElement('div')

            galeria.innerHTML=`
            <div class="foto">
            <img class="tamaño" src="${producto.img}" alt="" />
        </div>
        <div class="pie">
            <p>${producto.nombre} <br/> ${producto.precio}</p>
            <button  class="productos">Comprar</button>
        </div>
            `
            productos.append(galeria)
        }
        )
    }
    )


