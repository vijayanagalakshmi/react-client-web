import { useParams } from "react-router-dom";
import axios from "axios";
import { useReducer, useEffect } from "react";
// import customers from '../utils/data'

//1. import axios
//2. to store the state, useReducer & useEffect
//. define reducer with state & action
//3. as part of useEffect, we need to fetch the customer using id.
//4. use the fetched data to render the page.

const reducer = (state, action) => {
    switch (action.type) {
        case 'ACC_FETCH_REQUEST':
            return { ...state, loading: true }
        case 'ACC_FETCH_SUCCESS':
            return { ...state, loading: false, account: action.payload };
        case 'ACC_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}


function AccountPageWithReducer() {
    const params = useParams();

    console.log("Params", params);
    const { id } = params;
    console.log("id", id);

    const [{ loading, error, account }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        account: []
    });

    useEffect(() => {
        //1. dispatch('init-request')
        //axios get call to fetch the customer
        //2. dispatch('fetch-success')

        //3. dispatch('fetch-failed')
        const fetchAccount = async function () {
            try {
                dispatch({ type: 'ACC_FETCH_REQUEST', loading: true });
                const result = await axios.get(`/acc/account/${id}`);
                console.log('result here', result);
                dispatch({ type: 'ACC_FETCH_SUCCESS', loading: false, payload: result.data });
            } catch (err) {
                dispatch({ type: 'ACC_FETCH_FAILED', loading: false, payload: err.message })
            }
        }
        fetchAccount();
    }, [])



    console.log("Account  is::", account);
    return (
        <div>

            {
                loading ?
                    (
                        <div>Loading... </div>
                    )
                    :
                    error ?
                        <div>{error}</div>
                        :
                        (
                            <>
                                <h1> {account.name}  Account Details</h1>
                                
                                
                                
                                <div><b>AccountType:</b>: {account.accType}</div>
                                <div><b>Card No:</b>: {account.cardNo}</div>
                                <div><b>Balance </b>: {account.balance}</div>
                            </>
                        )
            }
        </div>
    )
}

export default AccountPageWithReducer;







    
                        
 