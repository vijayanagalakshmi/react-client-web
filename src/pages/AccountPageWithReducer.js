import { useParams } from "react-router-dom";
import axios from "axios";
import { useReducer, useEffect } from "react";
// import customers from '../utils/data'


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
        account: {}
    });

    useEffect(() => {
        
        const fetchAccount = async function () {
            try {
                dispatch({ type: 'ACC_FETCH_REQUEST', loading: true });
                const result = await axios.get(`/account/id/${id}`);
                console.log('result here', result);
                dispatch({ type: 'ACC_FETCH_SUCCESS', loading: false, payload: result.data });
            } catch (err) {
                dispatch({ type: 'ACC_FETCH_FAILED', loading: false, payload: err.message })
            }
        }
        fetchAccount();
    }, [])

    console.log("account: ", account);
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
                                <h1 className="th"> {account.name} Account Details</h1>
                                <h2>Id: {account.id}</h2>
                                <h2>Nmae: {account.name}</h2>

                                <div>
                                    <div>Account Type:: {account.accType}</div>
                                    <div>CardNumber: {account.cardNo}</div>
                                    <div>Balance: {account.balance}</div>
                                </div>
                            </>
                        )
            }
        </div>
    )
}

export default AccountPageWithReducer;