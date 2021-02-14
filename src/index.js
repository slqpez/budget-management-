import UI from "./modules/UI.js";
import Budget from "./modules/Budget.js";

const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  const floatNumber = document.querySelector(".floating-number");
  if (floatNumber.value === undefined) {
    let budget = Number(prompt("Ingresa tu presupuesto: "));
    if (budget === "" || isNaN(budget) || budget <= 0) {
      window.location.reload();
    } else {
      UI.startBudget(budget);
      localStorage.setItem("floatNumber", budget);
      const BDG = new Budget(budget);
      const btn = document.querySelector(".btn");
      btn.addEventListener("click", addItem);

      const results = document.querySelector(".results");
      results.addEventListener("click", (e) => {
        ui.deleteItem(e);
        if(e.target.classList.contains("delete")){
          const value =e.target.parentNode.children[0].children[1].textContent
          const number = Number(value.slice(2, value.length))
          BDG.returnCost(number)
          UI.updateInfo(BDG.getRest())
          UI.remainingBalanceColor(BDG.calculingRest()) 
          if(BDG.getRest()>=0){
            const btn = document.querySelector(".btn");
            btn.classList.remove("disable")
          }

        }
       
        e.preventDefault();
      });

      function addItem(e) {
        const name = document.querySelector("#name-input").value;
        const form = document.querySelector(".form")
        const btn = document.querySelector(".btn");
        const cost = Number(document.querySelector("#cost-input").value);
        if (cost != "" && cost >= 0 && !isNaN(cost) && name != "" && !btn.classList.contains("disable")) {
          UI.showInList(name, cost);
          BDG.updateRest(cost);
          UI.updateInfo(BDG.getRest());
          UI.remainingBalanceColor(BDG.calculingRest());
          form.reset()
          if(BDG.getRest()<=0){
            btn.classList.add("disable")
            ui.showError("No tienes presupuesto.");
          }
        } else {
          if(btn.classList.contains("disable")){
            ui.showError("No tienes presupuesto.");
          }else{
            ui.showError("Campos erróneos o faltantes.");
          }
          
        }
        e.preventDefault();
      }
    }
  }
});


