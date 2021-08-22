const loremipsum = document.querySelector('.title');
const spnCursor = document.querySelector('.cursor');
const txt = ["Caffee Blog"]

activeLetter = 0
activeText = 0


const addLetter = () => {
    // Użyj w środku setTimeout
    if (activeLetter >= 0) {
     loremipsum.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
   
     activeText++;
     if (activeText === txt.length) return; 
    }
    setTimeout(addLetter, 100)
   
   }
   
   
addLetter();


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
   }


setInterval(cursorAnimation, 400);