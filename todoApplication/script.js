const addItem = document.getElementById("add-item");
addItem.addEventListener('click',()=>{
    const name = document.getElementById("todo-name").value;
    const desc = document.getElementById("todo-description").value;

    const todoList = document.getElementById("todo-list");

    const listItem = document.createElement("li");
    listItem.classList.add("todo-item")

    const todoDiv = document.createElement('div');
    todoDiv.style.display = "flex";
    todoDiv.style.marginRight = "10px";
    todoDiv.style.gap = "10px"

    const title = document.createElement("h3");
    title.textContent = name;
    title.style.margin = "0";
    todoDiv.appendChild(title);

    const description = document.createElement("p");
    description.textContent = desc;
    description.style.margin = "0";
    description.fontSize = "14px";
    todoDiv.appendChild(description);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const rightTick = document.createElement("button");
    rightTick.textContent = "-/";
    rightTick.style.backgroundColor = "green";
    rightTick.style.color = "black";

    rightTick.addEventListener("click",()=>{
        const completeList = document.getElementById("completed-task");
        completeList.appendChild(listItem);
        buttons.remove();
    })

    const crossButton = document.createElement("button");
    crossButton.textContent = "*";
    crossButton.style.backgroundColor = "red";
    crossButton.style.color = "black";

    crossButton.addEventListener("click",()=>{
        listItem.remove();
    })

    buttons.appendChild(rightTick);
    buttons.appendChild(crossButton);

    listItem.appendChild(todoDiv);
    listItem.appendChild(buttons);

    todoList.appendChild(listItem);

    name.value = " ";
    desc.value = " ";
})