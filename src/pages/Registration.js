import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import User from '../model/User.js';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

const Heading = (props) => {
  const { name } = props; // Desctructing
  return (
    <h1>Register yourself in {name} page</h1>
  )
}
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

function Registration() {

  /*const onChangeHandler=(e) => {
  console.log('onChangeHandler',e.target.id);
  const v = e.target.value;
  switch(e.target.id){
    case 'name' :  return User.name = v;
    case 'email' :  return User.email = v;
    case 'password' :  return User.password = v;
    case 'isActiveUser' :  return User.isActiveUser = !User.isActiveUser ;
    default :
    return User;
  } 
} */
  /*const formActionEvent = async (e) =>{
   try{
     await axios.post('/api/---',{
       name : User.name,
       email : User.email,
       password : User.password,
       isActiveUser : User.isActiveUser  
     });
   }
   catch(err){
     console.log('Failed to save data.');
   }
   e.preventDefault();
   console.log(User);
  }*/


  const params = useParams();
  const { id } = params;

  const [{ loading, error, customer }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    customer: {}
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

  const editCustomer = async (e) => {
    e.preventDefault();
    console.log('editCustomer => Customer: ', customer);

    await axios.put(`/api/customer/${customer._id}`, {
      name: customer.cName,
      email: customer.email,
      password: customer.password,
      isActiveUser: customer.isActiveUser
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }


const submitHandler = async (e) => {
  e.preventDefault();
  console.log('submitHandler=> User:', User);
  await axios.post('/api/customer/create', {
    name: customer.cName,
    email: customer.email,
    password: customer.password,
    isActiveUser: customer.isActiveUser
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });

}
return (
  <div>
    <Heading name='Registraion' />
    <Form onSubmit={submitHandler}>
      <h1>Register Your details:</h1>
      <Form.Group className="mb-3" controlId="cName" >
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="text" defaultValue={customer.cName} placeholder="Enter Name" onBlur={e => User.cName = e.target.value} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" defaultValue={customer.email} placeholder="Enter email" onBlur={e => User.email = e.target.value} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" defaultValue={customer.password} placeholder="Password" onBlur={e => User.password = e.target.value} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cellNo">
        <Form.Label>cell</Form.Label>
        <Form.Control type="number" defaultValue={customer.cellNo} placeholder="cellNo" onBlur={e => User.cellNo = e.target.value} />
      </Form.Group>



      <Form.Group className="mb-3" controlId="ActiveUser">
        <Form.Check type="checkbox" label="Active User" onBlur={e => User.isActiveUser = !User.isActiveUser} />
      </Form.Group>
      {
        customer.cName ?
          (
            <Button variant="primary" type="button" onClick={editCustomer}>
              Update
            </Button>
          )
          : (
            <Button variant="primary" type="submit">
              Save
            </Button>
          )
      }
    </Form>
    </div>
    );
}

    export default Registration;









/*const Registration = () => (
    <form>

        <div class="input-group mb-3">
            
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3">
            
            <input type="password" class="form-control" placeholder="enter your password" aria-label="Password" aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3">
            
            <input type="text" class="form-control" placeholder="city name" aria-label="Password" aria-describedby="basic-addon1" />
        </div>
    </form>
)

export default Registration;*/