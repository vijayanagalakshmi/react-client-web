
import './App.css';
import './MyFriend.css';
import './index.css';
import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
//import CustomersPage from './pages/CustomersPage';
import CustomersWithRedux from './pages/CustomersWithRedux';
//import CustomersWithReducer from './pages/CustomersWithReducer';
import CustomerPageWithReducer from './pages/CustomerPageWithReducer';
import AccountPageWithReducer from './pages/AccountPageWithReducer';
import AccountsWithReducer from './pages/AccountsWithReducer';
import LoansPage from './pages/LoansPage';
import FeedbackPage from './pages/FeedbackPage';
import Registration from './pages/Registration';
import 'bootstrap/dist/css/bootstrap.css' 

function App() {
  return (
    
    <BrowserRouter>
      <div className="container">
        <header> 
          <div>
          <Link to='/' className='Header'>Home</Link>
          <Link to='/customers' className='Header'>Customers</Link> 
          <Link to='/accounts' className='Header'>Accounts</Link>
          <Link to='/Registration' className='Header'>Registration</Link>
          <Link to='/loans' className='Header'>Loans</Link>
          <Link to='/feedback' className='Header'>Feedback</Link>
          
          
          
          </div> 
          <hr />
          <Routes>
            <Route path='/' element={HomePage} />
            {/* <Route path='/customers' element={<CustomersWithReducer/>} /> */}
            <Route path='/customers' element={<CustomersWithRedux/>} />
            <Route path='/customer/:id' element={<CustomerPageWithReducer />} />
            <Route path='/account/:id' element={<AccountPageWithReducer/>} />
            <Route path='/accounts' element={<AccountsWithReducer/>} />
            <Route path='/loans' element={<LoansPage/>} />
            <Route path='/feedback' element={<FeedbackPage/>} />
            <Route path='/Registration' element={<Registration/>} />
            <Route path='/customer/edit/:id' element={<Registration/>} />

          </Routes> 
          </header>
      </div>
    </BrowserRouter>
  )
}

export default App;
