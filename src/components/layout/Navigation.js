import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown, Image, NavItem} from 'react-bootstrap'
import {Person} from './Person';
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../images/logo.png'
import Avatar from '../../images/profile_avatar2.jpg';
import "../../styles/navigation.css";
import {connect} from 'react-redux'
import {logout} from '../../store/actions/authActions';

class Navigation extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const name = this.props.profile.firstname + " " + this.props.profile.lastname
        const signedin = <>
                            <NavDropdown alignRight title={<Image id="avatar" src={Avatar} roundedCircle />}>
                                <NavDropdown.Item id="profile-name">{name}</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item id="logout" onClick={this.props.logout}>Logout</NavDropdown.Item>
                            </NavDropdown>                     
                        </>;
        const signedout=<>  
                            <Nav.Link as={Link} to='/login' id="login-btn">Login</Nav.Link>
                            {/* <Nav.Link as={Link} to='/register' id="register-btn">Sign-up</Nav.Link> */}
                        </>
        const checkLogin = this.props.auth.uid ? signedin : signedout

        return(
            <Navbar bg="light" expand="lg" id="navbar">
                <Navbar.Brand>
                    <Image id="logo" src={Logo} />
                </Navbar.Brand>
                <Navbar.Brand> 
                    <NavLink to="/" id="logo-text" style={{ color: 'inherit', textDecoration: 'inherit'}}>Productivity App</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/contact' id="content-page">Contact</Nav.Link>
                        {/* <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item> <Link to="/">Action</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {checkLogin}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

const addStatetoProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const addDispatchtoProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}


export default connect(addStatetoProps, addDispatchtoProps)(Navigation)