import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';


function LoginForm( {Login}) {

    const[details, setDetails] = useState({email:"", password:""})
    
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    function validateForm(){
        return details.email.length >0 && details.password.length >0;
    }
    
    return (

        <div className="Login">
            <br />

            <Form onSubmit={submitHandler}>
                <Form.Group size="sm" controlId="email">
                    <Form.Label> Email </Form.Label>
                    <Form.Control autoFocus type="email" placeholder="Email..." 
                    onChange={ (e) => setDetails({...details, email: e.target.value})}  value={details.email}>

                    </Form.Control>

                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoFocus type="password" placeholder="Password..."
                    onChange={ (e) => setDetails({...details, password: e.target.value})} value={details.password}
                    >

                    </Form.Control>

                </Form.Group>

                <Button size="lg" type="submit" disabled={!validateForm()}> Login </Button>

            </Form>
        </div>
        

    )
}

export default LoginForm


