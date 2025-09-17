document.addEventListener("DOMContentLoaded", () => {
    sessionStorage.removeItem("carrito");
    actualizarContadorCarrito();
    cerrarModal();
});

function actualizarContadorCarrito() {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    const contador = document.getElementById("contador-carrito");

    if (contador) {
        // Actualizar el número
        contador.textContent = carrito.length > 9 ? "9+" : carrito.length;
       
        // Mostrar u ocultar según si hay productos
        if (carrito.length > 0) {
            contador.style.display = "flex";
        } else {
            contador.style.display = "none";
        }
    }
};

function cerrarModal() {
    document.getElementById("modal-carrito").style.display = "none";
}