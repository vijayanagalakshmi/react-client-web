import React, { useEffect, useReducer } from 'react';
import { combineReducers , applyMiddleware, legacy_createStore } from 'redux'
import { thunkMiddleware } from 'redux-thunk'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import NameWrapper from '../utils/NameWrapper';
import NameComponent from './NameComponent'
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from './fetchCustomers';


const NamedWrapper = NameWrapper(NameComponent);
// const actionTypes = {
//     FETCH_REQUESTED: "FETCH_REQUESTED",
//     FETCH_SUCCESS: "FETCH_SUCCESS",
//     FETCH_FAILED: "FETCH_FAILED"
// }
// const fetchRequested = () =>({
//     type: 'FETCH_REQUESTED' , loading: true
// })
// const fetchSuccess = (customers) => ({
//     type : 'FETCH_SUCCESS', loading: false, payload: customers
// })
// const fetchFailed =(err) => ( {
//     type : 'FETCH_FAILED', loading: false, payload: err
// })

// const middleware = thunkMiddleware.default;
// const store = legacy_createStore({ reducer: reducer },applyMiddleware(middleware))

function CustomersWithRedux() {

    const dispatch = useDispatch();
    const defaultstate = { loading:true, error: '', customers : []};
    
    // const [customers, setCustomers] = useState([]);
    // const [{ loading, error, customers }, dispatch] = useReducer(reducer, {
    //     loading: true,
    //     error: '',
    //     customers: []
    // });
    //useEffect will execute useEffect(()=>{},[])
    useEffect(() => {
        
        //const fetchCustomers = async function () {
        //     dispatch(fetchRequested());
        //     try {
        //         const result = await axios.get('/api/customers');
        //         console.log('result data', result.data);
        //         dispatch(fetchSuccess(result.data));
        //     } catch (err) {
        //         //control will execute if failed to fetch data.
        //         dispatch(fetchFailed(err.message));
        //     }
        // }
        dispatch(fetchCustomers);
        },[]);

        const customersList = useSelector(state => {
            console.log('state:', state)
            return state;
        });

    console.log("Customers", customersList);

    const {loading, error, customers}= customersList ? customersList: defaultstate


    const deleteCustomer = async (id) => {
    try {
            console.log('deleting record id!', id);
            // Make a DELETE request to the server's delete endpoint
            const d = await axios.delete(`/api/customer/${id}`);
            console.log('Record deleted successfully!', d);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>List of Customers</h1>
            <ul>
                {
                    loading ? <div>Loading...</div> 
                    : customers ?
                    customers.map(customer => {
                        return (
                            <Container>
                                <Row>
                                    <Col>
                                        <li key={customer._id}>
                                            <Link to={`/customer/${customer._id}`} className='link-decoration'>{customer.cName}</Link>
                                        </li>
                                    </Col>
                                    <Col>
                                        <div>
                                            Details:
                                            <NamedWrapper name={customer.cName} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <Link to={`/customer/edit/${customer._id}`} className="btn btn-outline-primary btn-sm link-decoration" >Edit</Link>
                                    </Col>
                                    <Col>
                                        <Button variant="basic" type="button" className="btn btn-outline-dark btn-sm" onClick={e => deleteCustomer(customer._id)}>
                                            <span className="glyphicon glyphicon-trash"></span> Delete
                                        </Button>
                                    </Col>
                                    <Col md={6}>
                                    </Col>
                                </Row>
                            </Container>
                                            
                        )
                    })
                    : <div>Failed to load</div>
                }
                    </ul>
        </div>
    );
}

export default CustomersWithRedux;









