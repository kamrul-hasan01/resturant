import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {


        fontWeight: "bold",
        color: "red"
    }



    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand >মজার খাবার</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">



                        <Nav.Link>   <NavLink activeStyle={activeStyle} to="/home">Home</NavLink></Nav.Link>
                        <Nav.Link >  <NavLink activeStyle={activeStyle} to="/meal">Catagories</NavLink></Nav.Link>
                        <Nav.Link >  <NavLink activeStyle={activeStyle} to="/chart">Chart</NavLink></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;