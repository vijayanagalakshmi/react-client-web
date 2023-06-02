
import './App.css';
import './MyFriend.css';
import './index.css';
import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
//import CustomersPage from './pages/CustomersPage';
import CustomersWithReducer from './pages/CustomersWithReducer';
import CustomerPage from './pages/CustomerPage';
import AccountPageWithReducer from './pages/AccountPageWithReducer';
import AccountsWithReducer from './pages/AccountsWithReducer';
import LoansPage from './pages/LoansPage';
import FeedbackPage from './pages/FeedbackPage';

function App() {
  return (
    
    <BrowserRouter>
      <div className="container">
        <header> 
          <div>
          <Link to='/' className='Header'>Home</Link>
          <Link to='/customers' className='Header'>Customers</Link> 
          <Link to='/accounts' className='Header'>Accounts</Link>
          <Link to='/loans' className='Header'>Loans</Link>
          <Link to='/feedback' className='Header'>Feedback</Link>
          
          </div> 
          <hr />
          <Routes>
            <Route path='/' element={HomePage} />
            <Route path='/customers' element={<CustomersWithReducer />} />
            <Route path='/customer/:id' element={<CustomerPage />} />
            <Route path='/account/:id' element={<AccountPageWithReducer/>} />
            <Route path='/accounts' element={<AccountsWithReducer/>} />
            <Route path='/loans' element={<LoansPage/>} />
            <Route path='/feedback' element={<FeedbackPage/>} />
         

          </Routes> 
          </header>
      </div>
    </BrowserRouter>
  )
}

export default App;
