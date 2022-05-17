import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { toast, ToastContainer } from "react-toastify";
import "./expenselist.css"



const ExpenseList = () => {
    const {expenseList:list}=useSelector(state=>state.expense)
    console.log(list)

    const notifySuccess = () => toast.success("Expense Deleted!");
 
    
  return (
     
   
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />

        {
            list.length?
            list.map((item)=>{
               return (
                <Card item={item} notifySuccess={notifySuccess} />
               )
                
            }):(
                <div className="empty-state">
                    <img
                        src={require("../../assets/images/empty.png")}
                        alt="No Expenses"
                        className="empty-image"
                    />
                    <label>Uh Oh! Your expense list is empty.</label>
                </div>
            )
        }
    </div>
  )
}

export default ExpenseList