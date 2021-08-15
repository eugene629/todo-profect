const todoInput = document.querySelector("#input-todo")
const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector("#todo-list")

const BASE_URL = "http://localhost:8080";
let todoArray = [];

function removeAllToDos(todoArray){
    while (todoList.hasChildNodes()){
        todoList.removeChild(todoList.firstChild);
    }
}

function getClickedTodoId(event){
    const clicked = event.target.parentNode;
    const todoId= clicked.id;

    return todoId
}

function handleCompleteTodo(event){

const todoId = getClickedTodoId(event);
const todo = todoArray.find(todo=>todo.id==todoId)
    
    //const todoText = clicked.firstChild.innerText;

    const url = `${BASE_URL}/todos/${todoId}`;
    const body = {
        contents : todo.contents,
        isDone : !todo.isDone,  //!false  => true , !true => false
        userName : todo.userName
    }
    fetch(url, {
        method : 'PUT',
        body : JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        getAllTodos()
    })
}

function handleDeleteTodo(event)
{
    const todoId = getClickedTodoId(event);

    const url = `${BASE_URL}/todos/${todoId}`;
    
    fetch(url, {
        method : 'DELETE'
    }).then(()=>{
        getAllTodos()
    })
}

function paintAllToDos(){
    removeAllToDos()

    todoArray.forEach(todo =>{
        const li = document.createElement("li");
        const span = todo.isDone===true ? document.createElement("del") : document.createElement("span");
        const completeBtn = document.createElement("completeBtn");
        const deleteBtn = document.createElement("deleteBtn");

        li.id=todo.id
        span.innerText = todo.contents;
        completeBtn.innerText = "👌";
        deleteBtn.innerText = "❌";
        
        completeBtn.addEventListener("click", handleCompleteTodo)
        deleteBtn.addEventListener("click", handleDeleteTodo)

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li)
    })
}
function getAllTodos(){

    const userName = localStorage.getItem(USERNAME_KEY);
    const url = `${BASE_URL}/todos/user?userName=${userName}`;

    fetch(url)
    .then((Response)=> Response.json())
    .then((data)=>{
        console.log(data)
        todoArray = data;
        paintAllToDos()
    })
}

function postNewTodo(newTodo){

    const url = `${BASE_URL}/todos`

    const body = {
        contents : newTodo,
        userName : localStorage.getItem(USERNAME_KEY)
    }
    
    fetch(url, {
        method : 'post',
        body : JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        getAllTodos()
    })
}
function onTodoSubmit(e){
    e.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";

    if(localStorage.getItem(USERNAME_KEY)!==null){
    postNewTodo(newTodo)
    }else {
        alert("사용자 이름을 먼저 입력하세요.")
    }
}

if(localStorage.getItem(USERNAME_KEY)!==null){
    getAllTodos()
}

todoForm.addEventListener("submit", onTodoSubmit)