


let count=0;

let countDisplay=document.querySelector("#counterDisplay");
let decreaseBtn=document.querySelector("#decreaseBtn");
let resetBtn=document.querySelector("#resetBtn");
let increaseBtn=document.querySelector("#increaseBtn");

increaseBtn.addEventListener("click", function(){
    count=count + 1;
    countDisplay.textContent=count;
});

decreaseBtn.addEventListener("click", function(){
    count=count - 1;
    countDisplay.textContent=count;
});

resetBtn.addEventListener("click", function(){
    count=0;
    countDisplay.textContent=count;
});

let themeBtn=document.querySelector("#themeBtn");
let bodyElement=document.body;

themeBtn.addEventListener("click", function(){
    bodyElement.classList.toggle("dark-mode");
    
    if (bodyElement.classList.contains("dark-mode")){
        themeBtn.textContent="☀️ Toggle Light Mode";
    } else {
        themeBtn.textContent="🌙 Toggle Dark Mode";
    }
});



