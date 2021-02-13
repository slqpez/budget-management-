import UI from "./modules/UI.js"
import Budget from "./modules/Budget.js"




document.addEventListener("DOMContentLoaded",()=>{
    const floatNumber = document.querySelector(".floating-number");
    if(floatNumber.value===undefined){
        let budget = Number(prompt("Ingresa tu presupuesto: "))
        if(budget==="" ||isNaN(budget) || budget<=0){
            window.location.reload();
        }
        else{
            const bg = new Budget(budget);
            UI.startBudget(budget);
            localStorage.setItem("floatNumber", budget)
        }
       
    }

    
   
})


const btn = document.querySelector(".btn")
btn.addEventListener("click",addItem)
function addItem(e){
    const name =document.querySelector("#name-input").value
    const cost =Number(document.querySelector("#cost-input").value)
    if(cost != "" && cost>=0 && !isNaN(cost) && name != "" ){
        UI.showInList(name, cost)
       
    }else{
        UI.showError("Campos erróneos o faltantes.")
    }
    e.preventDefault()
}