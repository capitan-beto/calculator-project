const display = document.querySelector("#display");
const upperDisplay = document.querySelector("#upper-display")
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (display.innerText.includes("+") && item.className == "yellow btn-operator" ||
            display.innerText.includes("-") && item.className == "yellow btn-operator" ||
            display.innerText.includes("/") && item.className == "yellow btn-operator" ||
            display.innerText.includes("*") && item.className == "yellow btn-operator" ){
            operation();
            if(isNaN(display.innerText) || display.innerText == Infinity){
                display.innerText = "Syntax error";
                upperDisplay.innerText = "";
                setTimeout(() => (display.innerText = ""), 1000);
            } else {
                display.innerText += item.id;
                upperDisplay.textContent = display.innerText;
            }
            

        } else if (item.id == "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0 , string.length - 1);

        } else if (display.innerText != "" && item.id == "equal"){
            operation();
            upperDisplay.textContent = display.innerText;

        } else if (display.innerText == "" && item.id == "equal"){
            display.innerText ="Empty!";
            setTimeout(() => (display.innerText = ""), 2000);

        } else if(item.id == "clear"){
            display.innerText = "";
            upperDisplay.innerText = "";

        } else if (item.id == "puto") {
            upperDisplay.innerText = "puto"
            display.innerText = "el que lee";
            setTimeout(() => (display.innerText = "",
            upperDisplay. innerText = ""), 1000);

        } else {
            display.innerText += item.id;
        }
    }
})

window.addEventListener("keydown", function(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(key === null) {
        return;

    } else if (display.innerText.includes("+") && key.className == "yellow btn-operator" ||
            display.innerText.includes("-") && key.className == "yellow btn-operator" ||
            display.innerText.includes("/") && key.className == "yellow btn-operator" ||
            display.innerText.includes("*") && key.className == "yellow btn-operator" ){
            operation();
            if(isNaN(display.innerText) || display.innerText == Infinity){
                display.innerText = "Syntax error";
                upperDisplay.innerText = "";
                setTimeout(() => (display.innerText = ""), 1000);
            } else {
                display.innerText += key.id;
                upperDisplay.textContent = display.innerText;
            }
            

    } else if (key.id == "backspace"){
        let string = display.innerText.toString();
            display.innerText = string.substr(0 , string.length - 1);

    } else if (display.innerText != "" && key.id == "equal"){
        operation();
        upperDisplay.textContent = display.innerText;

    } else if (display.innerText == "" && key.id == "equal"){
        display.innerText ="Empty!";
        setTimeout(() => (display.innerText = ""), 2000);

    } else if(key.id == "clear"){
        display.innerText = "";
        upperDisplay.innerText = "";

    } else if (key.id == "puto") {
        upperDisplay.innerText = "puto"
        display.innerText = "el que lee";
        setTimeout(() => (display.innerText = "",
        upperDisplay. innerText = ""), 1000);

    } else {
        display.innerText += key.id;
    }
    
})


function operation(){
    if (display.innerText.includes("-")){
        return subtraction();
    } else if(display.innerText.includes("/")){
        return division();
    } else if(display.innerText.includes("*")){
        return multiply();
    } else if(display.innerText.includes("+")){
        return sum();
    }
}

function subtraction(){
    let operands = display.innerText.split("-");
    let subtract = operands[0] - operands[1];
    display.innerText = Math.round(subtract * 100) / 100;
}

function division(){
    let operands = display.innerText.split("/");
    let division = operands[0] / operands[1];
    display.innerText = Math.round(division * 100) / 100;
}

function multiply(){
    let operands = display.innerText.split("*");
    let multiply = operands[0] * operands[1];
    display.innerText = Math.round(multiply * 100) / 100;
    
}

function sum(){
    let splitStr = display.innerText.split("+");
    let operands = splitStr.map(Number);
    const sum = operands.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
    display.innerText = Math.round(sum * 100) / 100;
}


const toggleSpidey = document.querySelector("#puto");
toggleSpidey.onclick = () => {
    document.body.style.background = "url('../calculator-project/images/ok.jpg')";
    upperDisplay.innerText = "puto"
    display.innerText = "el que lee";
    setTimeout(() => (document.body.style.background = "",
    upperDisplay.innerText = "", display.innerText = ""), 1000);
}