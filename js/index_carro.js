function renderProductosCarrito() {
    const productos = cargarProductosCarrito();
    let salida = "";

    if (totalProductosCarrito() > 0) {
        for (producto of productos) {
            salida += `<div class="col-md-3 my-3">
                <div class="card text-center border-0">
                    <img src="${"img/" + producto.imagen}" alt="${producto.nombre}" class="card-img-top" />
                    <div claSss="card-body">
                        <p class="card-text">${producto.nombre}</p>
                        <p><button class="btn btn-warning" onclick="agregarAlCarrito(${producto.id});">Agregar (+)</button>
                    </div>
                </div>
            </div>`;
        }
    } else{
        salida = `<div class="alert alert-danger text-center" role="alert">No se agregaron productos en el Carrito!
      </div>
      `
    }
    

    document.getElementById("productos").innerHTML = salida;
}
renderProductosCarrito();
renderBotonCarrito(); 

