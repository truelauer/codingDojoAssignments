// Login Button

function changeText(LogInOut){
    console.log(LogInOut.innerText)
    if(LogInOut.innerText == "Login"){
    LogInOut.innerText = "Logout"
    }else{
        LogInOut.innerText = "Login"
    }
}

// Add Definition Button

function removeButton(remove){
    var el = document.querySelector(".addDefinitionButton")
    el.style.display = "none"
}
// gitHubTest
