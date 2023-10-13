document.addEventListener('DOMContentLoaded', function () {
    // Encabezado con este codigo inserto el header.html
    const headerContainer = document.querySelector('header');
    const headerRequest = new XMLHttpRequest();
    headerRequest.open('GET', 'header.html', true);
    headerRequest.onreadystatechange = function () {
        if (headerRequest.readyState === 4 && headerRequest.status === 200) {
            headerContainer.innerHTML = headerRequest.responseText;
        }
    };
    headerRequest.send();

    // Pie de página con este codigo inserto el footer
    const footerContainer = document.querySelector('footer');
    const footerRequest = new XMLHttpRequest();
    footerRequest.open('GET', 'footer.html', true);
    footerRequest.onreadystatechange = function () {
        if (footerRequest.readyState === 4 && footerRequest.status === 200) {
            footerContainer.innerHTML = footerRequest.responseText;
        }
    };
    footerRequest.send();
});
