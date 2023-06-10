import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import User from '../model/User.js';
import axios  from 'axios';

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


   const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submitHandler=> User:' , User);
     const u = await axios.post('/api/customer/create',
     {
      cName: User.cName,
      email:User.email,
      cellNo: User.cellNo

     });
     console.log("new user", u);
   }
  return (
    <Form onSubmit ={submitHandler}>
      <h1>Register Your details:</h1>
      <Form.Group className="mb-3" controlId="cName" >
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="text" placeholder="Name"  onBlur={e => User.cName = e.target.value}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onBlur={e => User.email = e.target.value}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onBlur={e => User.password = e.target.value}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="cellNo">
        <Form.Label>cell</Form.Label>
        <Form.Control type="number" placeholder="cellNo"  onBlur={e => User.cellNo = e.target.value}/>
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="ActiveUser">
        <Form.Check type="checkbox" label="Active User"  onBlur={e => User.isActiveUser = !User.isActiveUser}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
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