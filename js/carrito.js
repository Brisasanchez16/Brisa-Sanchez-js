let carrito = []
let contenedor = document.getElementById("contenedor-carrito")

const productosEnCarrito = document.querySelector('.galeria-fotos')

fetch('/productos/stock.json')
    .then( (res)=> res.json ())
    .then( (data)=> {

        data.forEach((prod) =>{
            const galeria = document.createElement('div')

            galeria.innerHTML=`
            <div class="foto">
            <img class="tamaño" src="${prod.img}" alt="" />
        </div>
        <div class="pie">
            <p>${prod.nombre} <br/> ${prod.precio}</p>
            <button id="agregar${prod.id}"  class="productos">Comprar</button>
        </div>
            `
            productosEnCarrito.append(galeria)

            const boton = document.getElementById(`agregar${prod.id}`)

            boton.addEventListener("click", () => {
            agregarAlCarrito(prod.id)   
        }
        )
    } 
)
})


const agregarAlCarrito = (prodId) => {
    const esto = carrito.some (prod => prod.id === prodId)

    if(esto){
        carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    }else{
        fetch('productos/stock.json')
        .then( (res)=> res.json ())
        .then( (data)=> {
        const item = data.find((prod) => prod.id === prodId)
        console.log(carrito)
        carrito.push(item)})
    }

    actualizarCarrito()
}

vaciar.addEventListener("click", () => {
    carrito.length = 0
    actualizarCarrito()
})

const actualizarCarrito = () => {
    contenedor.innerHTML = ""
    carrito.forEach((prod) => {
        const div1 = document.createElement("div")
        div1.className = ("productoCarrito")
        div1.innerHTML =  `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><img class="imgCarrito" src="${prod.img}" alt=""></th>
                    <td class="parrafo">${prod.nombre}</td>
                    <td class="parrafo">$${prod.precio}</td>
                    <td class="parrafo"><span id="cantidad">${prod.cantidad}</span></td>
                </tr>
            </tbody>
    </table>
        `
        contenedor.appendChild(div1)
    })
    let precio = document.getElementById("precioTotal")
    precio.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

