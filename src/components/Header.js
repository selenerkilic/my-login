//rfce

import React from 'react';
import {Navbar,Container} from "react-bootstrap";

import "./header.css"

function Header() {

    return (
        <div className="header">
                                                                                                  
         <Navbar className="navbar" >
            <Container>
                <Navbar.Brand >Login</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end" color="blue">
                            <Navbar.Text>
                                <h5>Welcome!</h5>
                            </Navbar.Text>
                        </Navbar.Collapse>
            </Container>
        </Navbar>
                                                  
            
            
        </div>
    )
}

export default Header;
