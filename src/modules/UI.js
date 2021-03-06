export default class UI{
    constructor(){}


    static showInList(name, cost){
        const list = document.querySelector(".expense-list")
        const li = document.createElement("li");
        const div = document.createElement("div");
        const pName = document.createElement("p");
        const pCost = document.createElement("p");
        const span = document.createElement("span");
        li.className ="expense"
        div.className= "expense-description"
        pName.className= "expense-description-name"
        pCost.className="expense-description-cost"
        pCost.className="expense-description-cost"
        span.className="delete"
        list.appendChild(li)
        li.appendChild(div)
        li.appendChild(span)
        div.appendChild(pName)
        div.appendChild(pCost)

        pName.textContent = name;
        pCost.textContent = `$ ${cost}`;
        span.textContent = "X"

    }

    static remainingBalanceColor(status = "good"){
        const rest = document.querySelector(".rest")
        const isGood =rest.classList.contains("good")
        const isRegular =rest.classList.contains("regular")
        const isBad =rest.classList.contains("bad")
        if(isGood){
            rest.classList.remove("good")
            rest.classList.add(status)
        }
        if(isRegular){
            rest.classList.remove("regular")
            rest.classList.add(status)
        }
        if(isBad){
            rest.classList.remove("bad")
            rest.classList.add(status)
        }
    }

    static startBudget(budget){
        const budgetCont = document.querySelector(".budget .floating-number");
        const rest = document.querySelector(".rest .floating-number");
        budgetCont.textContent=`$ ${budget}`;
        rest.textContent=`$ ${budget}`;
    }

    
     showError(msg){
        const form = document.querySelector(".form");
        const p = document.createElement("p");
        p.textContent = msg;
        p.style.marginTop ="6px"
        if(!document.querySelector(".form p")){
            form.appendChild(p);
        setTimeout(()=>{
            p.remove()
        },3000)
        }
        
    }

     deleteItem(e){
         if(e.target.classList.contains("delete")){
            e.target.parentNode.remove();
            this.showError("Costo eliminado correctamente.")
         }
       
    }

    static updateInfo(value){
        const rest = document.querySelector(".rest .floating-number");
        rest.textContent=`$ ${value}`;
    }
}