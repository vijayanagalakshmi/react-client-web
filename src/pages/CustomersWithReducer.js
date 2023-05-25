
import React, { useEffect, useReducer } from 'react'
// import customers from '../utils/data'
import axios from 'axios';
import { Link } from 'react-router-dom';

// action.types
// 1. FETCH_REQUESTED
// 2. FETCH_SUCCESS
// 3. FETCH_FAILED

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUESTED':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, customers: action.payload };
        case 'FETCH_FAILED':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}


function CustomersPage() {
    // const [customers, setCustomers] = useState([]);
    const [{ loading, error, customers }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        customers: []
    });
    useEffect(() => {
        console.log('useEffect executed.');
        const fetchCustomers = async function () {
            try {
                dispatch({ type: 'FETCH_REQUESTED', loading: true });
                const result = await axios.get('/customers');
                console.log('result data', result.data);
                dispatch({ type: 'FETCH_SUCCESS', loading: false, payload: result.data });
            } catch (err) {
                //control will execute if failed to fetch data.
                dispatch({ type: 'FETCH_FAILED', loading: false, payload: err.message });
            }
        }
        fetchCustomers();
    }, []);
    console.log("Customers of bank", customers);
    return (
        <div>
            <h1>List of Customers</h1>
            <ul>
                {
                    customers.map(customer => {
                        console.log("customer:" ,customer)
                        return(
                           
                        <li key={customer.id}>
                            <Link to={`/customer/${customer.id}`}>{customer.cName}</Link>
                        </li>
                    )}
                    )
                }
            </ul>
        </div>
    );
}

export default CustomersPage;