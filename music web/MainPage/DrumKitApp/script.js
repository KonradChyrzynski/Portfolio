const kbd = document.querySelectorAll('kbd')
const container = document.querySelectorAll('.container')
let widthCorrection = 0
const audio = document.querySelectorAll("audio")

container.forEach(function(container){
    container.childNodes[0].innerText = container.childNodes[0].innerText.toUpperCase()
    container.addEventListener("click", function(e){
        let kbdData = container.childNodes[0].dataset.key
        const soundPlay = document.querySelector(`audio[data-key='${kbdData}']`)
        soundPlay.currentTime = 0
        soundPlay.play()
    })
})

window.addEventListener("keydown", function(e) {
    const soundPlay = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const kbdKey = document.querySelector(`kbd[data-key='${e.keyCode}']`)
    if(e.keyCode == null){
        return;
    }
    if(!soundPlay) return;

    soundPlay.currentTime = 0
    soundPlay.play()
    kbdKey.parentNode.classList.toggle("containerkey")
    this.setTimeout(function(){
        kbdKey.parentNode.classList.toggle("containerkey")
    },500)
})




container.forEach(function(cont){
    let width = cont.offsetWidth
    if (width > widthCorrection){
        widthCorrection = width;
    }
    cont.style.width = widthCorrection/4 + 'px'
    cont.style.height = widthCorrection/2 + 'px'
})
