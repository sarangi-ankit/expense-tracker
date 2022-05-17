import { ADD_EXPANSE, DELETE_EXPANSE } from "../Expense"

export const AddExpanse=(data)=>{
    return {
        type:ADD_EXPANSE,
        data
    }
   
}

export const DeleteExpanse=(data)=>{
    return {
        type:DELETE_EXPANSE,
        data
    }
}