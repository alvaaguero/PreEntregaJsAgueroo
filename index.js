function renderProductos() {
    const productos = cargarProductosLS();
    let salida = "";

    for (producto of productos) {
        salida += `<div class="col-md-3 my-3">
            <div class="card text-center border-0">
                <img src="${"img/" + producto.imagen}" alt="${producto.nombre}" class="card-img-top" />
                <div class="card-body">
                    <p class="card-text">${producto.nombre}</p>
                    <p><button class="btn btn-warning" onclick="agregarAlCarrito(${producto.id});">Agregar (+)</button>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida;
}
renderProductos(); 
