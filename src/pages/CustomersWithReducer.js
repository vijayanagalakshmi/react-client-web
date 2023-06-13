import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import NameWrapper from '../utils/NameWrapper';
import NameComponent from './NameComponent'
import Button from 'react-bootstrap/esm/Button';

const NamedWrapper = NameWrapper(NameComponent);
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
function CustomersWithReducer() {
    // const [customers, setCustomers] = useState([]);
    const [{ loading, error, customers }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        customers: []
    });
    //useEffect will execute useEffect(()=>{},[])
    useEffect(() => {
        console.log('useEffect executed.');
        const fetchCustomers = async function () {
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
        fetchCustomers();
    }, [customers]);

    console.log("Customers", customers);

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
                }
                    </ul>
        </div>
    );
}

export default CustomersWithReducer;










/*import React, { useEffect, useReducer } from 'react'



// import customers from '../utils/data'
import axios from 'axios';
import { Link } from 'react-router-dom';
import NameWrapper from '../utils/NameWrapper';
import NameComponent from './NameComponent'

const NamedWrapper = NameWrapper(NameComponent);

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


function CustomersWithReducer() {
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
                const result = await axios.get('/api/customers');
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

     const DeleteCustomer= async ()=>{
        const d = await axios.delete('api/customer/_id');
        console.log('customer deleted',d );

     }

    return (
        <div>
            <h1>List of Customers</h1>
            <ul>
                {
                    customers.map(customer =>  {
                        console.log("customer:" ,customer)
                       return (
                        <>   
                        <li key={customer._id}>
                            <Link to={`/api/customer/${customer._id}`}>{customer.cName}</Link>
                        </li>
                        <div>
                            Details: <NamedWrapper name={customer.name}/>
                        </div>
                        <div>
                            <button onClick={DeleteCustomer}>Delete</button>
                        </div>
                        </>
                    )  }
                    )
                }
            </ul>
        </div>
    );
}

export default CustomersWithReducer; */