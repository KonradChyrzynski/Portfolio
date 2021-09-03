const nav = document.querySelector("nav")
const hamburger = document.querySelector(".hamburger")
const navItemsMid = document.querySelector(".nav-items-mid");
const navItemsRight = document.querySelector(".nav-items-right");
const navItemLeft = document.querySelector(".nav-item-left");
const topImg = document.querySelector(".section-one-div-right > img");
const phoneImg = document.querySelector(".mid-nested-container-wrapper-img > img");

nav.appendChild(hamburger)


hamburger.addEventListener("click", () => {
    navItemsMid.classList.toggle("nav-open");
    navItemsRight.classList.toggle("nav-open")
    navItemLeft.classList.toggle("spense-margin")
    nav.classList.toggle("nav-small-screan");
})


//change top img

let changeImg = () => {
    if($(".media").css("float") == "none"){
        topImg.src = "Assets/Hero Image (Mobile).png"
        phoneImg.src ="Assets/Phone Mockup (Mobile).png"
        phoneImg.className = ""
    }
        else if($(".media").css("float") == "left"){
            topImg.src = "Assets/Hero Image (Tablet).png"
            phoneImg.src ="Assets/Phone Mockup (Tablet).png"

            phoneImg.className = ""
        }
        else if ($(".media").css("float") == "right"){
            topImg.src = "Assets/Hero Image (Desktop).png"
            phoneImg.src ="Assets/Phone Mockup (Desktop).png"
            phoneImg.className = "object_fit"
        }
}


window.addEventListener('DOMContentLoaded', changeImg);

window.addEventListener('resize', changeImg)

//change top img


