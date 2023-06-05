import React, {useState,useEffect} from 'react'

//import customers from '../utils/data'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../MyFriend.css';


const CustomersPage = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        console.log('useEffect executed.');
        const fetchCustomers = async function () {
            const result = await axios.get('/customers');
            console.log('result', result);
            console.log('result data', result.data);
            setCustomers(result.data);
        }
        fetchCustomers();
    },[]);

return (
    <div>
        <h1>List of Customers</h1>
        <ul className='Person'>
            {
            
                customers.map(customer => (
                    <li key={customer.id}>
                        <Link to={`/customer/${customer.id}`}> <img className="Image" src={customer.cImage} alt={customer.cName} /></Link>
                
                    </li>
                ))
               
            }
        </ul>
    </div>
)
        }


export default CustomersPage;