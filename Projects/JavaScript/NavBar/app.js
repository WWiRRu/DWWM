const burger = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
burger.addEventListener("click", (event) => {
    event.preventDefault();
    links.classList.toggle("show-links");
    burger.classList.toggle("nav-rotate");
});