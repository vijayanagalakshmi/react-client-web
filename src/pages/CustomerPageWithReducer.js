
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

    const [{ loading, error, customer }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        customer: []
    });

    useEffect(() => {
        //1. dispatch('init-request')
        //axios get call to fetch the customer
        //2. dispatch('fetch-success')

        //3. dispatch('fetch-failed')
        const fetchCustomer = async function () {
            try {
                dispatch({ type: 'CUST_FETCH_REQUEST', loading: true });
                const result = await axios.get(`/api/customer/${id}`);
                console.log('result here', result);
                dispatch({ type: 'CUST_FETCH_SUCCESS', loading: false, payload: result.data });
            } catch (err) {
                dispatch({ type: 'CUST_FETCH_FAILED', loading: false, payload: err.message })
            }
        }
        fetchCustomer();
    }, [])


    // const customer = customers[id];
    console.log("CP => customer: ", customer);
    return (
        <div>
        <h1>customer name : {customer.cName} </h1>
        <h2>email:{customer.email}</h2>
        <h3>cellNo:{customer.cellNo}</h3>
        </div>
        
        // <div>

        //     {
        //         loading ?
        //             (
        //                 <div>Loading... </div>
        //             )
        //             :
        //             error ?
        //                 <div>{error}</div>
        //                 :
        //                 (
        //                     <>
        //                         <h1>Customer {customer.cName} Details</h1>
        //                         <h2>cellno:{customer.cellNo}</h2>
        //                         <h3>Address: </h3>
        //                         <div>
        //                             <div><i>City :</i> {customer.address.city}</div>
        //                             <div><i>State:</i> {customer.address.state}</div>
        //                             <div><i>zip</i>{customer.address.zip}</div>
        //                         </div>
        //                         <h3>Account Information: </h3>
                                
        //                         <div><b>Type</b>: {customer.account.type}</div>
        //                         <div><b>AccountNo</b>: {customer.account.accountNo}</div>
        //                         <div><b>Balance </b>: {customer.account.balance}</div>
        //                     </>
        //                 )
        //     }
        //  </div>
    )
}

export default CustomerPageWithReducer;  








 /*import { useParams } from "react-router-dom";
import axios from "axios";
import { useReducer, useEffect } from "react";
import RenderWithLoader from "./RenderWithLoader";
import DisplayCustomer from "./DisplayCustomer";

// import customers from '../utils/data'

//1. import axios
//2. to store the state, useReducer & useEffect
//. define reducer with state & action
//3. as part of useEffect, we need to fetch the customer using id.
//4. use the fetched data to render the page.

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

const WithLoader = RenderWithLoader(DisplayCustomer);
function CustomerPageWithReducer() {
    const params = useParams();

    console.log("Params", params);
    const { id } = params;
    console.log("id", id);

    const [{ loading, error, customer }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        customer: []
    });

    useEffect(() => {
        //1. dispatch('init-request')
        //axios get call to fetch the customer
        //2. dispatch('fetch-success')

        //3. dispatch('fetch-failed')
        const fetchCustomer = async function () {
            try {
                dispatch({ type: 'CUST_FETCH_REQUEST', loading: true });
                const result = await axios.get(`/api/customer/${id}`);
                console.log('result here', result);
                dispatch({ type: 'CUST_FETCH_SUCCESS', loading: false, payload: result.data });
            } catch (err) {
                dispatch({ type: 'CUST_FETCH_FAILED', loading: false, payload: err.message })
            }
        }
        fetchCustomer();
    }, [])


    // const customer = customers[id];
    console.log("CP => customer: ", customer);
    return (
        <WithLoader loading = {loading} error = {error} customer = {customer} />
        // <div>

        //     {
        //         loading ?
        //             (
        //                 <div>Loading... </div>
        //             )
        //             :
        //             error ?
        //                 <div>{error}</div>
        //                 :
        //                 (
        //                     <>
        //                         <h1>Customer  Details</h1>
        //                         <h2>Name:{customer.cName}</h2>
        //                         <h2>Cell no:{customer.cellNo}</h2>
                                
        //                         <h3>Address: </h3>
        //                          <div>
        //                         <div><i>City :</i> {customer.address.city}</div>
        //                              <div><i>State:</i> {customer.address.state}</div>
        //                             <div>Zip: {customer.address.zip}</div>
        //                          </div>
        //                          <h3>Account Information: </h3>
        //                         <div><b>AccountNo</b>: {customer.account.accountNo}</div>
        //                          <div><b>Type</b>: {customer.account.type}</div>
        //                          <div><b>Balance </b>: {customer.account.balance}</div>
        //                     </>
        //                 )
        //     }
        // </div>
    )
}

export default CustomerPageWithReducer; */