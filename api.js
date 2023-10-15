fetch('productos.json')
.then(response => response.json())
.then(data => {
    const productosLista = document.getElementById('productos-lista');

    data.forEach(producto => {
        const productoRow = document.createElement('tr');
        productoRow.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
        `;
        productosLista.appendChild(productoRow);
    });
});