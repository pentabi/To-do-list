//To-do
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');
const clearAllButton = document.getElementById('clearAll')

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addTask = (task) => {
    tasks.push({task})
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return {task};
}

const createTask = ({task}) => {
    task = task.trim();
    if (task != ''){
        let paragraph = document.createElement('p');
        let button = document.createElement('button');
        paragraph.classList.add('paragraph-styling');

        button.innerHTML = 'delete'
        paragraph.innerHTML = task;

        paragraph.append(button);
        toDoContainer.appendChild(paragraph);
        button.addEventListener('click', function(){
            toDoContainer.removeChild(paragraph);
            let index = tasks.findIndex( (element) => element.task === task);
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })
        clearAllButton.addEventListener('click',function(){
            toDoContainer.remove(paragraph);
        })
        paragraph.addEventListener('click', function(){
            if (paragraph.style.textDecoration ==  "line-through"){
                paragraph.style.textDecoration =  "none";
            } else{
                paragraph.style.textDecoration =  "line-through";
            }
        })
    }
}

tasks.forEach(createTask);

//add Task with enter
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addToDoButton.click();
    }
  });

addToDoButton.addEventListener('click',function(){
    const newtask = addTask(
        inputField.value
    )

    createTask(newtask);

    inputField.value = "";
})


//saved
const addSavedButton = document.getElementById('addSaved');
const savedContainer = document.getElementById('savedContainer');
const inputFieldSaved = document.getElementById('inputFieldSaved');

const saved = JSON.parse(localStorage.getItem("saved")) || [];

const addSave = (task) => {
    saved.push({task})
    localStorage.setItem("saved", JSON.stringify(saved));
    return {task};
}

const createSave = ({task}) => {
    task = task.trim();
    if (task != ''){
        let paragraph = document.createElement('p');
        let button = document.createElement('button');
        paragraph.classList.add('paragraph-styling');

        button.innerHTML = 'delete'
        paragraph.innerHTML = task;
        
        paragraph.append(button);
        savedContainer.appendChild(paragraph);
        button.addEventListener('click', function(e){
            e.stopPropagation();
            savedContainer.removeChild(paragraph);
            let index = saved.findIndex( (element) => element.task === task);
            saved.splice(index, 1);
            localStorage.setItem("saved", JSON.stringify(saved));
            })
            paragraph.addEventListener('click', function(){
                const paragraph2 = document.createElement('p');
                const button2 = document.createElement('button');
                paragraph2.classList.add('paragraph-styling');

                button2.innerHTML = 'delete'
                paragraph2.innerHTML = task;
                
                paragraph2.append(button2);
                toDoContainer.appendChild(paragraph2);

                button2.addEventListener('click', function(){
                    toDoContainer.removeChild(paragraph2);
                    let index = tasks.findIndex( (element) => element.task === task);
                    tasks.splice(index, 1);
                    localStorage.setItem("tasks", JSON.stringify(tasks));
                })

                paragraph2.addEventListener('click', function(){
                    if (paragraph2.style.textDecoration ==  "line-through"){
                        paragraph2.style.textDecoration =  "none";
                    } else{
                        paragraph2.style.textDecoration =  "line-through";
                    }
                })

                // add to tasks object
                tasks.push({task})
                localStorage.setItem("tasks", JSON.stringify(tasks));
                return {task};
                
            

        })
    }
}

saved.forEach(createSave);

inputFieldSaved.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addSavedButton.click();
    }
  });
addSavedButton.addEventListener('click',function(){
    const newsave = addSave(
        inputFieldSaved.value
    )

    createSave(newsave);

    inputFieldSaved.value = "";
})


//clear all button
clearAllButton.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
})