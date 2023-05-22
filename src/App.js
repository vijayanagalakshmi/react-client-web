
import './App.css';
import './MyFriend.css';
import './index.css';
import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CustomersPage from './pages/CustomersPage';
import CustomerPage from './pages/CustomerPage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    
    <BrowserRouter>
      <div className="container">
        <header> 
          <div>
          <Link to='/' className='Header'>Home</Link>
          <Link to='/customers' className='Header'>Customers</Link> 
          <Link to='/accounts' className='Header'>Accounts</Link>
          
          </div> 
          <hr />
          <Routes>
            <Route path='/' element={HomePage} />
            <Route path='/customers' element={<CustomersPage />} />
            <Route path='/customer/:id' element={<CustomerPage />} />
            <Route path='/accounts' element={<AccountPage/>} />
         

          </Routes> 
          </header>
      </div>
    </BrowserRouter>
  )
}

export default App;
