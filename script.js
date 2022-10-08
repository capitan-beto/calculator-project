function add(a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

// Display:

const currOperation = document.querySelector(".curr-operation");
currOperation.textContent = "IT'S ALIVE!"

const prevOperation = document.querySelector(".prev-operation");
prevOperation.textContent = "I'M ALIVE TOO";

//buttons selector

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    console.log("0");
})

const one = document.querySelector(".one");
one.addEventListener("click", () => {
    console.log("1");
})

const two = document.querySelector(".two");
two.addEventListener("click", () => {
    console.log(2);
})

const three = document.querySelector(".three");
three.addEventListener("click", () => {
    console.log(3);
})

const four = document.querySelector(".four");
four.addEventListener("click", () => {
    console.log(4);
}) 

const five = document.querySelector(".five");
five.addEventListener("click", () => {
    console.log(5);
})

const six = document.querySelector(".six");
six.addEventListener("click", () => {
    console.log(6);
})

const seven = document.querySelector(".seven");
seven.addEventListener("click", () =>{
    console.log(7);
})

const eight = document.querySelector(".eight");
eight.addEventListener("click", () =>{
    console.log(8);
})

const nine = document.querySelector(".nine");
nine.addEventListener("click", () =>{
    console.log(9);
})

const equal = document.querySelector(".equal");
equal.addEventListener("click", () =>{
    console.log("=");
})

const sum = document.querySelector(".sum");
sum.addEventListener("click", () =>{
    console.log("+");
})

const minus = document.querySelector(".minus");
minus.addEventListener("click", () =>{
    console.log("-");
})

const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
    console.log(".");
})

const multi = document.querySelector(".multiply");
multi.addEventListener("click", () => {
    console.log("x");
})

const division = document.querySelector(".divide");
division.addEventListener("click", () => {
    console.log("÷")
})

const clean = document.querySelector(".clean");
clean.addEventListener("click", () => {
    console.log("clean");
})

const puto = document.querySelector(".puto");
puto.addEventListener("click", () => {
    console.log("puto el que lee");
})

const undef = document.querySelector(".undef");
undef.addEventListener("click", () => {
    console.log("undef");
})








