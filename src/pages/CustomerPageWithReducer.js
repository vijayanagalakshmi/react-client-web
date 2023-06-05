import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import axios from "axios";
//import customers from '../utils/data';
import '../MyFriend.css';


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
function CustomerPageWithReducer() {
    const params = useParams();

    console.log("Params", params);
    const { id } = params;
    console.log("id", id);

    const [{ loading, error, customer }, dispatch] = useReducer(reducer, { loading: true, error: ' ', customer: {} });
    useEffect(() => {
        const fetchCustomer = async function () {
            try {

                dispatch({ type: 'CUST_FETCH_REQUEST', loading: true });
                const result = await axios.get(`/api/customer/${id}`);
                console.log("result is :", result.data);
                dispatch({ type: 'CUST_FETCH_SUCCESS', loading: false, payload: result.data });
            }
            catch (err) {
                dispatch({ type: 'CUST_FETCH_FAIL', loading: false, payload: err.message });
            }
        }
        fetchCustomer();
    }, []);

    console.log("CP => customer: ", customer);
    return (
        <div>
            <h2>{customer.cName}</h2>
            <br />
            <div>CellNo: {customer.cellNo}</div>
            <h1>Address</h1>
            <div> City:{customer.address.city}</div>
            <div> State:{customer.address.state}</div>
            <div>Zip:{customer.address.zip}</div>
            <h1>Account Information</h1>
            <div>Account Type:{customer.account.type}</div>
            <div>Account No:{customer.account.accountNo}</div>
            <div>Balance:{customer.account.balance}</div>


        </div>

    )

}

export default CustomerPageWithReducer;