let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

    const input =
    document.getElementById("taskInput");

    const task = input.value.trim();

    if(task === ""){
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    saveTasks();

    input.value = "";

    displayTasks();
}

function displayTasks(){

    const list =
    document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li =
        document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>

            <div class="task-buttons">

                <button
                    class="complete"
                    onclick="toggleTask(${index})">
                    ✓
                </button>

                <button
                    class="delete"
                    onclick="deleteTask(${index})">
                    ✕
                </button>

            </div>
        `;

        list.appendChild(li);
    });
}

function toggleTask(index){

    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();

    displayTasks();
}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}