let taskInput=document.querySelector("#taskInput");
let addBtn=document.querySelector("#addBtn");
let taskList=document.querySelector("#taskList");

let tasks=JSON.parse(localStorage.getItem("myTasks")) || [];

function renderTasks(){
taskList.innerHTML="";

for(let i=0; i< tasks.length; i++){
    let newListItem=document.createElement("li");
    newListItem.textContent=tasks[i] + " ";
    // taskList.appendChild(newListItem);

    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="❌";

    deleteBtn.addEventListener("click", function(){
        tasks.splice(i, 1);

        localStorage.setItem("myTasks", JSON.stringify(tasks));
 renderTasks();
    });
        newListItem.appendChild(deleteBtn);
        taskList.appendChild(newListItem);   

}
}
renderTasks();



addBtn.addEventListener("click", function(){
    let taskText=taskInput.value;

    if (taskText==""){
        alert("please enter a task first!");
        return;
    }
    tasks.push(taskText);

    localStorage.setItem("myTasks", JSON.stringify(tasks));

    renderTasks();

    taskInput.value="";

    
});