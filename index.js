// let myName = "Alex";
// let myage = 25;
// console.log("Hello from vs code!");
// console.log("Hi, my name is "+ myName + "and i am " +myage + "years old");


// let myage=20;
// if(myage>=18){
//     console.log("You are an adult ");
// } else{
//     console.log("you are a minor");
// }


// console.log("Starting the countdown...");
// for(let i=1; i<=5; i++){
//     console.log("count is: "+ i);
// }
// console.log("finished");

// function sayHello(name){
//     console.log("Hello, " + name + "!Welcome to Javascript.");
// }
// sayHello("John");
// sayHello("yeab");
// sayHello("alex");

// function multiplyNumbers(num1, num2){
// let result = num1 * num2;
// return result;
// }

// let calculation1=multiplyNumbers(3,5);
// console.log("3 multiplied by 5 is :" +calculation1);

// let calculation2=multiplyNumbers(7,19);
// console.log("7 multiplied by 19 is :" +calculation2)

// let favoriteLanguages = ["JavaScript", "python", "HTMl", "CSS"];

// console.log("my favorite language is : "+favoriteLanguages[0]);
// console.log("my favorites language is : "+favoriteLanguages[2]);

// console.log("i have "+ favoriteLanguages.length+" language in my list");

// let user={
//     firstName:"John",
//     age:23,
//     isCoder: true,
//     hobbies:["coding","gaming", "hacking"]
// };

// console.log("user name: "+ user.firstName);
// console.log("user age: "+ user.age);
// console.log("first hobby: "+ user.hobbies[0]);

// let Car={
//     Brand:"BWD",
//     color:"light black",
//     year:2026
// };

// console.log("Car Brand: "+ Car.Brand);
// console.log("Car color: "+ Car.color);
// console.log("Car year: "+ Car.year);

// let button =document.querySelector("#myButton");
// let title= document.querySelector("#title");

// button.addEventListener("click", function(){
//     title.textContent="javaSript made this happen!";
// });


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



