import React, {useState,useEffect} from 'react'

//import customers from '../utils/data'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../MyFriend.css';


const AccountsPage = () => {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        console.log('useEffect executed.');
        const fetchAccounts = async function () {
            const result = await axios.get('/accounts');
            console.log('result', result);
            console.log('result data', result.data);
            setAccounts(result.data);
        }
        fetchAccounts();
    },[]);

return (
    <div>
        <h1>List of Accounts</h1>
        <ul className='Person'>
            {
                 
                accounts.map(account => (
                    <li key={account.id}>
                        <Link to={`/account/${account.id}`}>  {account.name}</Link>
                
                    </li>
                ))
               
            }
        </ul>
    </div>
)
        }


export default AccountsPage;