import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import AddExpense from './pages/add-expense/AddExpense';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/add-expense" element={<AddExpense />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
