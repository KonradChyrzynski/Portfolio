const nav = document.querySelector("nav")
const hamburger = document.querySelector(".hamburger")

nav.appendChild(hamburger)



hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    nav.classList.toggle("nav-small-screan");
    linesContainer.classList.toggle("lines-container-open");
})
