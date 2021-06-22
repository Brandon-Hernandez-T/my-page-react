import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';

const NavbarComponent = ({props}) => {

    const { location } = props;

    return (
        <Navbar variant="dark" style={{ color: 'white', backgroundColor: 'black', }} >
            <Navbar.Brand href="/">Brandon</Navbar.Brand>
            <Nav  >
                <Nav.Link className="nav-link" active={ location.pathname == "/dashboard" ? true : false }  >
                    <Link to="/dashboard" className="nav-link" > Inicio </Link>
                </Nav.Link>
                <Nav.Link className="nav-link" active={ location.pathname == "/api" ? true : false } >
                    <Link to="/api" className="nav-link" > Api </Link>
                </Nav.Link>
            </Nav>
        </Navbar>
        // <Nav className="justify-content-center" activeKey="/dashboard" style={{ backgroundColor: 'transparent', }} >
        //     <Nav.Item>
        //         <Nav.Link eventKey="link-1">
        //             <Link to="/dashboard" > Inicio </Link>
        //         </Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="link-1">Link</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="link-2">Link</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="disabled" disabled>
        //             Disabled
        //         </Nav.Link>
        //     </Nav.Item>
        // </Nav>
    );
};

export default NavbarComponent;