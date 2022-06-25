const tasks = [];

const addTask = (task) => {

}

const createTask = () => {
    
}

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click',function(){
    addTask(inputField,toDoContainer,true);
})


let addSavedButton = document.getElementById("addSaved");
let savedContainer = document.getElementById("savedContainer");
let inputFieldSaved = document.getElementById("inputFieldSaved");

addSavedButton.addEventListener('click',function(){
    addTask(inputFieldSaved,savedContainer,false);
})




function addTask(inputField,Container,cross){
    let button_clicked = false;
    inputField.value = inputField.value.trim();
    if (inputField.value != ''){
        var paragraph = document.createElement('p');
        var button = document.createElement('button');
        button.innerHTML = 'delete';
        paragraph.classList.add('paragraph-styling'); //add styling class
        paragraph.innerText = inputField.value;
        Container.appendChild(paragraph);
        paragraph.appendChild(button);
    }
    inputField.value = ""; //text input disappears
    paragraph.addEventListener('click', function(){
        if (cross){
            paragraph.style.textDecoration =  "line-through";
        }else if (!cross && !button_clicked){
            let str = paragraph.innerHTML;
            str = str.slice(0, -23);
            var paragraph2 = document.createElement('p');
            var button2 = document.createElement('button');
            button2.innerHTML = 'delete';
            paragraph2.classList.add('paragraph-styling'); //add styling class
            paragraph2.innerText = str;
            toDoContainer.appendChild(paragraph2);
            paragraph2.appendChild(button2);
            button2.addEventListener('click', function(){
                toDoContainer.removeChild(paragraph2);
            })
            paragraph2.addEventListener('click', function(){
                paragraph2.style.textDecoration =  "line-through";
            })
        }
    })
        
    button.addEventListener('click', function(){
        Container.removeChild(paragraph);
        button_clicked = true
    })
}
