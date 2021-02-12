import UI from "./modules/UI.js"
import Budget from "./modules/Budget.js"

const name = document.querySelector("#name-input");

function App(){

}

document.addEventListener("DOMContentLoaded",()=>{
    let budget = prompt("Ingresa tu presupuesto: ")
    UI.startBudget(budget);
})



