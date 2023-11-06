const form = document.querySelector('.form');

const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
const backgroundColors = ["#FFFFFF", "#8A307F", "#5733FF", "#000000"];
let currentIndex = 0;

changeBackgroundBtn.addEventListener('click', (e) => {
    document.body.style.backgroundColor = backgroundColors[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundColors.length;
});

function addTask(columnId) {
    const nameField = document.getElementById(columnId + "-name");
    const descriptionField = document.getElementById(columnId + "-description");
    
    if (nameField.value !== "" && descriptionField.value !== "") {
        const task = { nameTask: nameField.value, descTask: descriptionField.value };
        createTaskElement(task, columnId);
        saveTask(task, columnId);

        nameField.value = "";
        descriptionField.value = "";
    } else if (nameField.value === "") {
        alert("Insert A Name to The Task!");
    } else {
        alert("Insert A Description to The Task!");
    }
}

function createTaskElement(task, columnId) {
    const taskElement = document.createElement("section");
    taskElement.innerHTML = `<p>${task.nameTask }</p><p>${task.descTask }</p><hr>`;

    const divTasks = document.getElementById(columnId + "-taskContent");
    divTasks.appendChild(taskElement);
    console.log(task.nameTask);
}

function saveTask(task, columnId) {
    
    var toDoTasks = localStorage.getItem(columnId) ? JSON.parse(localStorage.getItem(columnId)) : [];

    toDoTasks.push(task);

    localStorage.setItem(columnId, JSON.stringify(toDoTasks));
}

function loadTasks() {

const tasks = localStorage.columnId ? JSON.parse(localStorage.columnId) : [];
const columns = document.querySelectorAll('.column');


    if (tasks) {
        columns.forEach(column => {
            const columnId = column.id;
            const taskContent = tasks[columnId];

            if (taskContent) {
                taskContent.forEach(task => {
                    const taskName = task.name;
                    const taskDescription = task.description;

                    const taskElement = createTaskElement(task, columnId);

                    document.getElementById(columnId + "-taskContent");
                })
            }
        })
    }
}


loadTasks();





// ...

    // function createTaskElement(nameTask, descTask, columnId){
    //     const taskElement = document.createElement("p");
    //     const taskContent = document.createTextNode(nameTask + "<br><a>" + descTask + "<hr>");
    //     const taskObject =  taskElement.appendChild(taskContent);
    
    //     var divTasks = document.getElementById(columnId + "-taskContent").appendChild(taskObject);
    //     divTasks.appendChild(taskElement);  
        
    //     console.log(nameTask);  
    // }


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     addTask(columnId);
//     createTaskElement(nameField, descriptionField, columnId);
//     saveTask(nameField, descriptionField, columnId);
    
//     // const nameField = document.getElementById(columnId + "-name");
//     // const descriptionField = document.getElementById(columnId + "-description");
//     // if (nameField.value !== "" && descriptionField.value !== "") {

//     //     createTaskElement(nameField, descriptionField, columnId);
//     //     saveTask(nameField, descriptionField, columnId);

//     //     nameField.value = "";
//     //     descriptionField.value = "";
//     // } 
//     // else if(nameField.value == ""){
//     //     alert("Insert A Name to The Task!");
//     // }
//     // else {
//     //     alert("Insert A Description to The Task!");
//     // }   
    
//     // const taskContent = document.createElement("p");
//     // innerHTML.taskContent(` <p> ${nameField.value} <br><a> ${descriptionField.value} <hr>`);

//     // // Verifica se a propriedade 'tasks' existe no localStorage
//     // var tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    
//     // // Cria um novo objeto de tarefa e o adiciona ao array de tarefas
//     // var newTask = { nameTask: nameField.value, descTask: descriptionField.value };
//     // tasks.push(newTask);

//     // // Salva o array de tarefas atualizado de volta no localStorage
//     // localStorage.setItem("tasks", JSON.stringify(tasks));

//     // // Limpa os campos após a adição da tarefa
//     // nameField.value = "";
//     // descriptionField.value = "";
// });




// ...





// !!! CÓDIGO DO CARLOS !!!



// function salvarMensagem() {
//     var mensagem = document.getElementById("mensagem").value;

//     if (mensagem.trim() !== "") {
//         localStorage.setItem("usuarioMensagem", mensagem);
//         alert("Mensagem salva com sucesso!");
//     } else {
//         alert("Por favor, digite uma mensagem antes de salvar.");
//     }    
// }

// window.onload = function () {
//     var mensagemSalva = localStorage.getItem("usuarioMensagem");
// };

// }
