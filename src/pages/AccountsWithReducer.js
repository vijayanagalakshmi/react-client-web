import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUESTED':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, accounts: action.payload };
        case 'FETCH_FAILED':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

function AccountsWithReducer() {
    
    const [{ loading, error, accounts }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        accounts: []
    });
    useEffect(() => {
        console.log('useEffect executed.');
        const fetchAccounts = async function () {
            try {
                dispatch({ type: 'FETCH_REQUESTED', loading: true });
                const result = await axios.get('/acc/accounts');
                console.log('result data', result.data);
                dispatch({ type: 'FETCH_SUCCESS', loading: false, payload: result.data });
            } catch (err) {
            
                dispatch({ type: 'FETCH_FAILED', loading: false, payload: err.message });
            }
        }
        fetchAccounts();
    }, []);
    return (
        <div>
            <h1>List of Accounts</h1>
            <ul className='Person'>
                {
                     
                    accounts.map(account => (
                        <li key={account._id}>
                            <Link to={`/account/${account._id}`}>  {account.name}</Link>
                    
                        </li>
                    ))
                   
                }
            </ul>
        </div>
    )
            }
    
    
    export default AccountsWithReducer;