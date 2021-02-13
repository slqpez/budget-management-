export default class Budget{
    constructor(budget){
        this._budget = budget;
        this._rest = budget;
        this.list =[]
    }

    getBudget(){
        return this._budget
    }
    setBudget(budget){
        this._budget = budget
    }
    getRest(){
        return this._rest
    }
    setBudget(rest){
        this._rest = rest
    }

    updateRest(value){
        this._rest -= value
    }

    calculingRest(){
        const regular =this._budget / 2
        const bad = this._budget/ 4 

        if(this._rest<bad){
            return("bad")
        }
        if(this._rest<regular){
            return("regular")
        }
        if(this._rest>=regular){
            return("good")
        }
        
    }

    returnCost(value){
        this._rest += value
    }
}
