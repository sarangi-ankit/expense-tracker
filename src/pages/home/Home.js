import React from 'react'
import ExpenseList from '../../components/expense-list/ExpenseList'
import TopFold from '../../components/topfold/TopFold'
// import "./home.css"

const Home = () => {
  return (
    <div>
        <TopFold/>
        <ExpenseList/>
    </div>
  )
}

export default Home