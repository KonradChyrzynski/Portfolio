const nav = document.querySelector("nav")
const hamburger = document.querySelector(".hamburger")
const navItemsMid = document.querySelector(".nav-items-mid");
const navItemsRight = document.querySelector(".nav-items-right");
const navItemLeft = document.querySelector(".nav-item-left");

nav.appendChild(hamburger)



hamburger.addEventListener("click", () => {
    navItemsMid.classList.toggle("nav-open");
    navItemsRight.classList.toggle("nav-open")
    navItemLeft.classList.toggle("spense-margin")
    nav.classList.toggle("nav-small-screan");
})


