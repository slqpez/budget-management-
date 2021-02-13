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
}
