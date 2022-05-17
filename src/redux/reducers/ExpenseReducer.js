import { ADD_EXPANSE,DELETE_EXPANSE } from "../Expense"

const initialState={
    expenseList:[]
}

export const ExpenseReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_EXPANSE:
            return {
                ...state,
                expenseList:[...state.expenseList,action.data]
            }
        
        case DELETE_EXPANSE:
            const {data}=action
            const deleteList=state.expenseList.filter((item)=>(
                item.createdAt!==data.createdAt
            ))
                
            
            return {
                 ...state,
                expenseList:deleteList
            }

        default:
           return state
    }
}