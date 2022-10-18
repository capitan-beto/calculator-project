const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear"){
            display.innerText = "";
        } else if (item.id == "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0 , string.length - 1);
        } else if (display.innerText != "" && item.id == "equal"){
            if (display.innerText.includes("-")){
                return subtraction();
            } else if(display.innerText.includes("/")){
                return division();
            } else if(display.innerText.includes("*")){
                return multiply();
            } else if(display.innerText.includes("+")){
                return sum();
            }
        } else if (display.innerText == "" && item.id == "equal"){
            display.innerText ="Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else if (display.innerText.includes("+") && item.id == "+"){
            return sum();
        } else{
            display.innerText += item.id;
        }
    }
})

function subtraction(){
    let operands = display.innerText.split("-");
    let subtract = operands[0] - operands[1];
    display.innerText = subtract;
}

function division(){
    let operands = display.innerText.split("/");
    let division = operands[0] / operands[1];
    display.innerText = division;
}

function multiply(){
    let operands = display.innerText.split("*");
    let multiply = operands[0] * operands[1];
    display.innerText = multiply;
}

function sum(){
    let splitStr = display.innerText.split("+");
    let operands = splitStr.map(Number);
    const sum = operands.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
    display.innerText = sum;
}


/*const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark; 
}*/