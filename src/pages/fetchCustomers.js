import axios from "axios"
//import { useDispatch } from "react-redux";

export const fetchCustomers = async function (dispatch){
    try {
        dispatch({ type: 'FETCH_REQUESTED', loading: true });
        const result = await axios.get('/api/customers');
        console.log('result data', result.data);
        dispatch({ type: 'FETCH_SUCCESS', loading: false, payload: result.data });
    } catch (err) {
        //control will execute if failed to fetch data.
        dispatch({ type: 'FETCH_FAILED', loading: false, payload: err.message });
    }
}