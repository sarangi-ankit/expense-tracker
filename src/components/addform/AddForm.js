import React, { useState } from 'react'
import "./addform.css"
import Data from "../../constants/Data"
import { useDispatch } from 'react-redux'
import { AddExpanse } from '../../redux/action/Expense'
import { ToastContainer,toast } from 'react-toastify'
import SuccessModal from './SuccessModal'

const AddForm = () => {
    const dispatch=useDispatch()

    const [datas,setDatas]=useState(Data)
    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState()
    const [category,setCategory]=useState()
    const [categoryOpen,setCategoryOpen]=useState(false)
    const [modalOpen,setModalOpen]=useState(false)

    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }

    const handleAmount=(e)=>{
        setAmount(e.target.value)
    }

    const handleCategory=(data)=>{
        setCategory(data)
        setCategoryOpen(false)
        console.log(category)
    }

    const handleSubmit=()=>{
        if (!title || !amount || !category){
            const notify = () => toast("plz fill all the credentials");
            notify()
            return
        }
        const data={
            title,
            amount,
            category,
            createdAt:new Date()
        }
        console.log(data)
    dispatch(AddExpanse(data))
    setModalOpen(!modalOpen)
   
    }
   
  return (
    <div className="add-form">
        <SuccessModal modalOpen={modalOpen}/>
         <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
        />
        <div className="form-item">
            <label>Title</label>
            <input
            placeholder="Give a name to your expenditure"
            value={title}
            onChange={(e) => handleTitle(e)}
            />
        </div>

        <div className="form-item">
            <label>Amount ₹</label>
            <input
            placeholder="Enter Amount"
            className="amount-input"
            onChange={(e) => handleAmount(e)}
            value={amount}
            />
        </div>

        <div className="category-container-parent">
            <div className="category">
                <div className="category-dropdown" onClick={()=>setCategoryOpen(!categoryOpen)}>
                    <label>{category?category.title:"Category"}</label>
                    <i className="fi-rr-angle-down"></i>
                  
                </div>
                {
                    categoryOpen?
                    <>
                        {
                            datas.map(data=>{
                                return (
                                    <div className='category-item'
                                        style={{ borderRight: `5px solid ${data.color}` }}
                                        key={data.id}
                                        onClick={() => handleCategory(data)}
                                    >
                                        <label>{data.title}</label>
                                        <img src={data.icon} alt={data.title}/>
                                    </div>
                                )
                            })
                        }
                    </>:categoryOpen
                }
            </div>
        </div>

        <div className="form-add-button">
            <div onClick={handleSubmit}>
            <label>Add</label>
            <i class="fi-rr-paper-plane"></i>
            </div>
      </div>
    </div>
  )
}

export default AddForm