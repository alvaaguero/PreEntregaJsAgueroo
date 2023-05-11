function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));

}

function cargarProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");

}

function estaEnElCarrito(id) {
    alert("hola");
}

function agregarAlCarrito(id) {
    const carrito = cargarProductosCarrito();
    const producto = buscarProducto(id);
    carrito.push(producto);
    guardarProductosCarrito(carrito);
    console.log("Se agrego el producto con el #" + id);
    renderBotonCarrito();
}

function buscarProducto(id) {
    const productos = cargarProductosLS();

    return productos.find(item => item.id === id);
}

function totalProductosCarrito() {
    const productos = cargarProductosCarrito();
    
    return productos.length;
}

function renderBotonCarrito() {
    const salida = `<a href="carrito.html" id="carrito" class="btn btn-warning position-relative">
        <img src="img/carrito..png" alt="carrito" width="24"/>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalProductosCarrito()}</span>
    </a>`;
  document.getElementById("carrito").innerHTML = salida;
}
