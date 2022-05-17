import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./topfold.css"

const TopFold = () => {

    const [query,setQuery]=useState("")

  return (
    <div className="topfold">
    {
        window.location.pathname==="/"?
        <>
        <div className="home-topfold">
            <div className="searchbar">
                <i class="fi-rr-search"></i>
                <input
                    placeholder="Search for expenses"
                    onChange={(e)=>setQuery(e.target.value)}
                    value={query}
                />
            </div>
            <Link to="/add-expense">
                <div className="add-button">
                    <i class="fi-rr-add"></i>
                    <label>Add</label>
                </div>
            </Link>
            
        
        </div>
        </>:

        <>
            <div className="add-topfold">
                <Link to="/">
                    <div className="add-topfold-button">
                        <i class="fi-rr-angle-left"></i>
                        <label>Back</label>
                    </div>
                </Link>
               
                <Link to="/">
                    <div className="add-topfold-button">
                        <i class="fi-rr-cross-circle"></i>
                        <label>Cancel</label>
                    </div>
        
                </Link>
                
            </div> 

        </>
    }
        
     
         
  </div>
  )
}

export default TopFold