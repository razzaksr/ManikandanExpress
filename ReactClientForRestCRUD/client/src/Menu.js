import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
const Menu=(props)=>{
    return(
        <>
            <div className="container">
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="/" >Expert Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="mr-3 btn btn-outline-warning text-primary badge-pill" 
                        href="/" >Home</Nav.Link>
                        <Nav.Link className="mr-3 btn btn-outline-warning text-primary badge-pill" 
                        href="/register" >Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        </>
    );
}

export default Menu;