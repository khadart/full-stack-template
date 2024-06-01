import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
interface LoginProps {
  [key: string]: any;
}
const Login: React.FC<LoginProps> = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post(`http://localhost:8000/Login`,{
        userName,
        password
  }
    ).then((response)=>{
        if(response.data==='succes')
            navigate("/Home")
    }).catch(error =>{
        alert(error)
    })
  };

  return (
    <div className="container">
      <div className="card">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>userName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={userName}
              name="userName"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <button onClick={handleLogin}></button>
    </div>
  );
};

export default Login;
