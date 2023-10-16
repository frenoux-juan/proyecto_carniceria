//templates para insertar desde un html a html principal

document.addEventListener('DOMContentLoaded', function () {
    // Encabezado
    const headerContainer = document.getElementById('header-container');
    const headerRequest = new XMLHttpRequest();
    headerRequest.open('GET', 'header.html', true);
    headerRequest.onreadystatechange = function () {
        if (headerRequest.readyState === 4 && headerRequest.status === 200) {
            headerContainer.innerHTML = headerRequest.responseText;
        }
    };
    headerRequest.send();

    // Pie de página
    const footerContainer = document.getElementById('footer-container');
    const footerRequest = new XMLHttpRequest();
    footerRequest.open('GET', 'footer.html', true);
    footerRequest.onreadystatechange = function () {
        if (footerRequest.readyState === 4 && footerRequest.status === 200) {
            footerContainer.innerHTML = footerRequest.responseText;
        }
    };
    footerRequest.send();
});


