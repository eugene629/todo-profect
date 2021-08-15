const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#Login-form input")
//const loginButton = document.querySelector("#Login-form button")
const greeting = document.querySelector("#greeting")

const USERNAME_KEY = "userName";
const HIDDEN_CLASS = "hidden";

function onInputNameSubmit(e){
    
    e.preventDefault();

    const userName = loginInput.value;

    localStorage.setItem("userName", userName);

paintingGreetings(userName)
getAllTodos()

}

function paintingGreetings(userName){
    

    greeting.innerText=`hello ${userName}`;
    greeting.classList.remove("hidden")

    loginForm.classList.add("hidden")
    
}

const savedUser = localStorage.getItem("userName")

if(savedUser === null){
    loginForm.classList.remove("hidden")
    loginForm.addEventListener("submit",onInputNameSubmit)

} else {
    paintingGreetings(savedUser)
}


