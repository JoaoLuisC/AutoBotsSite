// navbar.js
function loadNavbar() {
    const navbarContainer = document.getElementById("navbar-container");

    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar a barra de navegação:', error);
        });
}
document.addEventListener("DOMContentLoaded", loadNavbar);

