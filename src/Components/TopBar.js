import React, {Component} from 'react';
import './TopBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';



const theAdmin ={
    salutation: 'Hello',
    title: "Prof.",
    firstName: "Hassan",
    lastName: "Ojo"
}
const name = theAdmin.salutation + ', ' + theAdmin.title + ' ' + theAdmin.firstName;
class TopBar extends Component{
    render(){
        return(
            <div id="container-box">
               <Navbar bg="light" expand="lg">
                   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                   <Navbar.Collapse id="basic-navbar-nav">
                    <div id="btn-box">
                        <Nav className="justify-content-end">
                            <div id="divider"></div>
                            <Nav.Item>
                                <Button variant="primary" type="button" size="sm" block>Send Broadcast</Button>
                            </Nav.Item>
                            <div id="divider"></div>
                            <Nav.Item>
                                <Button variant="primary" type="button" size="sm" block>Add Community Rep</Button>
                            </Nav.Item>
                        </Nav>
                    </div>
                   </Navbar.Collapse>
                    <NavDropdown title={name} id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Account Settings</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Donate</NavDropdown.Item>
                    </NavDropdown>
               </Navbar>
            </div>
        )
    }
}


export default TopBar;
