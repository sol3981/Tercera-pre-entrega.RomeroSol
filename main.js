const lista_producto = [
    { id: 1, nombre: "Cuadro Tortuga", precio: 10000 },
    { id: 2, nombre: "Cuadro Antu", precio: 11500 },
    { id: 3, nombre: "Cuadro Luna", precio: 14500 }
];

localStorage.setItem("carrito", JSON.stringify(lista_producto));

let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
}


let contenedorCarrito = document.getElementById("contenedorCarrito");

carrito.forEach(item => {
    
    let productoDiv = document.createElement("div");
    productoDiv.innerHTML = `
        <h4>Nombre: ${item.nombre}</h6>
        <b>Precio: ${item.precio}</b>
    `;


    contenedorCarrito.appendChild(productoDiv);
});

let pagar = document.getElementById("pagar");
pagar.addEventListener("click", () => {
    alert("¡Gracias por su compra!");
});

let eliminar = document.getElementById("eliminar");
eliminar.addEventListener("click", () => {
    localStorage.clear();
    alert("Carrito Eliminado");
});
