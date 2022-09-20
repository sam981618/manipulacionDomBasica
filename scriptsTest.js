const h1 = document.querySelector("h1");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const pResult = document.querySelector("#result");
const btn = document.querySelector("#btnCalcular");
const form = document.querySelector("#form");

form.addEventListener('submit', btnOnClick);

function btnOnClick(event){
    event.preventDefault();
    const sumInput = input1.value + input2.value;
    pResult.innerHTML = "resultado: " + sumInput;
}