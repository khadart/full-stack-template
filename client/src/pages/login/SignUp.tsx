import React from 'react'
import { Form } from 'react-bootstrap';

interface SignUpProps{
    [key:string]:any
}
const SignUp:React.FC<SignUpProps> = () => {
  return (
    <div>
        <div>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>userName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter userName"
              value=""
              name="userName"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value=""
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value=""
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Conform Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter password"
              value=""
              name="confirmPassword"
            />
          </Form.Group>
          
        </Form>
        </div>
    </div>
  )
}

export default SignUp;