function renderProductosCarrito() {
    const productos = cargarProductosCarrito();
    let salida = "";

    if (totalProductosCarrito() > 0) {
        salida += `<table class="table">
        <tr>
        <td colspan="5" class="text-end"><button class="btn btn-warning" onclick="vaciarCarrito()">Vaciar Carrito</button></td>
        <tr>`;
        
        
        ;

        for (producto of productos) {
            salida += `<tr>
            <td><img src="${"img/" + producto.imagen}" alt="${producto.nombre}" width="80" /></td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad} X $${producto.precio}</td>
            <td>$${producto.cantidad * producto.precio}</td>
            <td class="text-end"><button class="btn btn-warning" onclick="eliminarProducto(${producto.id});"><img src="img/trash.png" alt="Eliminar Producto" width="16" /></button></td>
            </tr>`;
        }

        salida += `<tr>
        <td colspan="3">Total a Pagar</td>
        <td>$${totalPagarCarrito()}</td>
        <td>&nbsp;</td>
        </tr>`;
        salida += `</table>`
    } else{
        salida = `<div class="alert alert-danger text-center" role="alert">No se agregaron productos en el Carrito!
      </div>`
    
    }
    

    document.getElementById("productos").innerHTML = salida;
}
renderProductosCarrito();
renderBotonCarrito(); 
