const display = document.querySelector("#display");
const upperDisplay = document.querySelector("#upper-display")
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        opDisplay(item);
    }
})

window.addEventListener("keydown", function(e) {
    const item = document.querySelector(`button[data-key="${e.keyCode}"]`);
    opDisplay(item);
})

function opDisplay(item){
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

        
    } else {
        display.innerText += item.id;
    }
    
}


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


const toggleSpidey = document.querySelector("#surprise");
toggleSpidey.onclick = () => {
    document.body.style.background = "url(https://i.kym-cdn.com/photos/images/facebook/000/307/686/60e.png)";
    upperDisplay.innerText = "I WANT PICTURES"
    display.innerText = "OF SPIDERMAN";
    setTimeout(() => (document.body.style.background = "",
    upperDisplay.innerText = "", display.innerText = ""), 1000);
}
