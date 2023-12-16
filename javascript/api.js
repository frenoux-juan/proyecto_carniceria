/*este codigo permite consumir datos en json guardados en productos.json en insertarlos en el 
index.html
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
});*/

// Your existing JavaScript code here
fetch('https://frenoux.pythonanywhere.com/api/productos')
  .then(response => {
    if (!response.ok) {
      throw new Error(`La respuesta de la red no fue exitosa: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const productosLista = document.getElementById('productos-lista');
    const tarjetasContenedor = document.createElement('div');
    tarjetasContenedor.classList.add('tarjetas-contenedor');

    // Apply styles directly to the container
    tarjetasContenedor.style.display = 'flex';
    tarjetasContenedor.style.flexWrap = 'wrap';
    tarjetasContenedor.style.alignItems = 'center';
    tarjetasContenedor.style.margin = '5%'
    
    // Allow cards to wrap to the next line if there's not enough space

    data.forEach(producto => {
      const productoTarjeta = document.createElement('div');
      productoTarjeta.classList.add('tarjeta');

      // Apply styles directly to the card
      productoTarjeta.style.border = '2px solid #ccc';
      productoTarjeta.style.margin = '10px'; // Adjust the margin as needed
      productoTarjeta.style.padding = '10px';
      productoTarjeta.style.width = '20%'; // Adjust the width of each card as needed

      const imageUrl = `https://frenoux.pythonanywhere.com/static/assets/fotos_productos/${producto.imagen}`;
      
      // Apply styles to the image
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageElement.alt = producto.nombre;
      imageElement.style.maxWidth = '100%'; // Set maximum width to 100% of the container
      imageElement.style.maxHeight = '200px'; // Set maximum height as needed

      const contenidoElement = document.createElement('div');
      contenidoElement.classList.add('contenido');
      contenidoElement.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>${producto.memo}</p>
      `;

      productoTarjeta.appendChild(imageElement);
      productoTarjeta.appendChild(contenidoElement);
      tarjetasContenedor.appendChild(productoTarjeta);
    });

    // Add the container with styled cards to the products list element
    productosLista.appendChild(tarjetasContenedor);

  })
  .catch(error => console.error('Error al obtener los datos:', error));
