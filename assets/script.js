//MENU
window.addEventListener("scroll", () => {
    let header = document.querySelector('#header');
    header.classList.toggle("scrolling", window.scrollY > 700);
});

// SLIDER
let radio = document.querySelector(".manual-btn");
let cont = 1; 

document.getElementById("radio1").checked = true;

const nextImg = () => {
    cont++
    if(cont > 3){
        cont = 1;
    }

    document.getElementById("radio"+cont).checked = true;
}

setInterval(() => {
    nextImg();
}, 5000);