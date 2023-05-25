import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import axios from "axios";
//import customers from '../utils/data';

const reducer = (state, action) => {
    switch (action.type) {
        case 'CUST_FETCH_REQUEST':
            return { ...state, loading: true }
        case 'CUST_FETCH_SUCCESS':
            return { ...state, loading: false, customer: action.payload };
        case 'CUST_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}
function CustomerPage() {
    const params = useParams();

    console.log("Params", params);
    const { id } = params;
    console.log("id", id);

    const [{ loading, error, customer }, dispatch] = useReducer(reducer, { loading: true, error: ' ', customer: {} });
    useEffect(() => {
        const fetchCustomer = async function () {
            try {

                dispatch({ type: 'CUST_FETCH_REQUEST', loading: true });
                const result = await axios.get(`/customer/id/${id}`);
                console.log("result is :", result);
                dispatch({ type: 'CUST_FETCH_SUCCESS', loading: false, payload: result.data });
            }
            catch (err) {
                dispatch({ type: 'CUST_FETCH_FAIL', loading: false, payload: err.message });
            }
        }
        fetchCustomer();
    }, [])


    return (
        <div>
            {
                loading ?
                    (<div>loading....</div>)
                    :
                    error ?
                        (<div>{error}</div>)
                        :
                        (
                            <>
                                <h2>Name: {customer.cName}</h2>
                                <br />
                                <div>CellNo: {customer.cellNo}</div>

                                <h3 className="Head">Address: </h3>
                                <div>
                                    <div><b>City:</b> {customer.address.city}</div>
                                    <div><b>State:</b> {customer.address.state}</div>
                                    <div><b>Zipcode: </b>{customer.address.zip}</div>

                                </div>
                                <h3 className="Head">Account Information: </h3>
                                <div><b>AccountNo</b>: {customer.account.accountNo}</div>
                                <div><b>Type</b>: {customer.account.type}</div>
                                <div><b>Balance</b>:{customer.account.balance}</div>

                            </>
                        )
                        }                
               
        </div>
    )
}

export default CustomerPage;