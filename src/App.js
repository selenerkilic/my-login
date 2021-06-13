import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LoginForm from "./components/LoginForm";

import Header from "./components/Header";

import {Button} from "react-bootstrap";



function App() {

  const [user, setUser] = useState({email: "", password: ""});

  const Login = details => {
    console.log(details);
  

    if (details.email !== null && details.password !== null )
      {console.log("Logged in!");

      setUser({
        email : details.email,
        password : details.password
      });
    }else {
      console.log("Please try again ");
    }

  }

  const Logout = () => {
    setUser({ email:"" , password:""});
  }

  return (
    <div className="App">

      <Header />

      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.email}</span></h2>
          <Button onClick={Logout}> Logout </Button>
        </div>

        
        
      ) : (
        <LoginForm Login = {Login} />

      )
      }
      
    </div>
  );
}

export default App;

