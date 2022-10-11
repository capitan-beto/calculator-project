let input = "";
let result = "";



//functions

function add(a, b){
    return a + b;
}

function subtract (a, b){
    return splitStr[0] - splitStr[1];
}

function multiply() {
    const secondResult = [...splitStr];
    const multIndex = splitStr.indexOf("x");
    let multiFirst = multIndex - 1;
    let multiTwo = multIndex + 1;
    let secondOp = splitStr[multiFirst] * splitStr[multiTwo];
    let multResult = splitStr.splice(multiFirst, 3, secondOp);
    return splitStr;
}

/*function divide() {
    let firstResult = [...splitStr];
    const divIndex = firstResult.indexOf("/");
    let divFirst = divIndex - 1;
    let divTwo = divIndex + 1;
    let firstOp =  firstResult[divFirst] / firstResult[divTwo];
    let divResult =  firstResult.splice(divFirst, 3, firstOp);
    return firstResult;
}*/


function operation(input) {
    let splitStr = input.split(",");
    if(splitStr.includes('/') === true){
        let resultDiv = splitStr[0] / splitStr[2];
        return currOperation.textContent = resultDiv;
    } else if (splitStr.includes('x') === true){
        let resultMulti = splitStr[0] * splitStr[2];
        return currOperation.textContent = resultMulti;
    } else if (splitStr.includes('-') === true){
        let resultSub = splitStr[0] - splitStr[2];
        return currOperation.textContent = resultSub;
    } else if (splitStr.includes('+') === true){
        let sumArr = splitStr.splice(1, 1);
        let resultSum =  splitStr.reduce((accumulator, currentValue) =>{
            return accumulator + currentValue;
        }, 0);
        return console.log(resultSum);
    }
}


    

// Display:

const currOperation = document.querySelector(".curr-operation");
currOperation.textContent = "";

const prevOperation = document.querySelector(".prev-operation");
prevOperation.textContent = "";

//buttons selector

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    input += 0;
    currOperation.textContent += 0;
})

const one = document.querySelector(".one");
one.addEventListener("click", () => {
    input += 1;
    currOperation.textContent += 1;
})

const two = document.querySelector(".two");
two.addEventListener("click", () => {
    input += 2;
    currOperation.textContent += 2;
})

const three = document.querySelector(".three");
three.addEventListener("click", () => {
    input += 3;
    currOperation.textContent += 3;
})

const four = document.querySelector(".four");
four.addEventListener("click", () => {
    input += 4; 
   currOperation.textContent += 4;
}) 

const five = document.querySelector(".five");
five.addEventListener("click", () => {
    input += 5;
    currOperation.textContent += 5;
})

const six = document.querySelector(".six");
six.addEventListener("click", () => {
    input += 6;
   currOperation.textContent += 6;
})

const seven = document.querySelector(".seven");
seven.addEventListener("click", () =>{
    input += 7;
    currOperation.textContent += 7;
})

const eight = document.querySelector(".eight");
eight.addEventListener("click", () =>{
    input += 8;
    currOperation.textContent += 8;
})

const nine = document.querySelector(".nine");
nine.addEventListener("click", () =>{
    input += 9;
    currOperation.textContent += 9;
})

const equal = document.querySelector(".equal");
equal.addEventListener("click", () =>{
    currOperation.textContent += "=";
    operation(input);
})

const sum = document.querySelector(".sum");
sum.addEventListener("click", () =>{
    input += ",+,";
    currOperation.textContent += "+";
})

const minus = document.querySelector(".minus");
minus.addEventListener("click", () =>{
    input += ",-,";
    currOperation.textContent += "-";
})

const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
    input += ".";
    currOperation.textContent += ".";
})

const multi = document.querySelector(".multiply");
multi.addEventListener("click", () => {
    input += ",x,";
    currOperation.textContent += "x";
})

const division = document.querySelector(".divide");
division.addEventListener("click", () => {
    input += ",/,";
    currOperation.textContent += "÷";
})

const clean = document.querySelector(".clean");
clean.addEventListener("click", () => {
    input = "";
    currOperation.textContent = "";
})

const puto = document.querySelector(".puto");
puto.addEventListener("click", () => {
   currOperation.textContent = "puto el que lee";
})

const undef = document.querySelector(".undef");
undef.addEventListener("click", () => {
    console.log("undef");
})








