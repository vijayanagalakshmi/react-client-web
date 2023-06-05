import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registration() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
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