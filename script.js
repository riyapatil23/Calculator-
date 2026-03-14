let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(value){
display.value = display.value + value;
}

function clearDisplay(){
display.value = "";
}

function deleteValue(){
display.value = display.value.slice(0,-1);
}

function calculate(){
try{

let expression = display.value;
let result = eval(expression);

display.value = result;

if(historyList){
let li = document.createElement("li");
li.textContent = expression + " = " + result;
historyList.prepend(li);
}

}
catch{
display.value = "Error";
}
}

function clearHistory(){
if(historyList){
historyList.innerHTML = "";
}
}
function toggleMode(){
document.body.classList.toggle("dark");
}