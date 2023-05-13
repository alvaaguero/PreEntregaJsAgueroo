function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));

}

function cargarProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();

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

function totalPagarCarrito() {
    const productos = cargarProductosCarrito();
    
    return productos.reduce((total, item) => total += item.precio, 0);
}

function renderBotonCarrito() {
  document.getElementById("carrito").innerText = totalProductosCarrito();
}
