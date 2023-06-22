import { BrowserRouter, Link, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import './App.css';
import CityPage from './pages/CityPage.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to='/' className='Header'>Home</Link>
      <Link to='/City' className='Header'>City</Link>
      
    </div>
    <Routes>
      <Route path='/' element={HomePage}/>
      <Route path='/City' element={<CityPage/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
