let taskInput=document.querySelector("#taskInput");
let addBtn=document.querySelector("#addBtn");
let taskList=document.querySelector("#taskList");

addBtn.addEventListener("click", function(){
    let taskText=taskInput.value;

    if (taskText==""){
        alert("please enter a task first!");
        return;
    }

    let newListItem=document.createElement("li");

    newListItem.textContent=taskText;

    taskList.appendChild(newListItem);

    taskInput.value="";
})