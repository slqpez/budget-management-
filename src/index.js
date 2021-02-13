import UI from "./modules/UI.js"
import Budget from "./modules/Budget.js"



function App(){

}

document.addEventListener("DOMContentLoaded",()=>{
    const floatNumber = document.querySelector(".floating-number");
    if(floatNumber.value===undefined){
        let budget = Number(prompt("Ingresa tu presupuesto: "))
        if(budget==="" ||isNaN(budget) || budget<=0){
            window.location.reload();
        }
        else{
            UI.startBudget(budget);
            localStorage.setItem("floatNumber", budget)
        }
       
    }

    
   
})


const btn = document.querySelector(".btn")
btn.addEventListener("click",addItem)
function addItem(e){
    const name =document.querySelector("#name-input")
    const cost =document.querySelector("#cost-input")
    UI.showInList(name.value, cost.value)
    e.preventDefault()
}