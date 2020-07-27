import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {InputGroup, Button, Form, FormControl} from 'react-bootstrap';
import "../../styles/login.css";
import {connect} from 'react-redux';
import {login} from '../../store/actions/authActions';
import {Redirect, Link} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={email: "", password: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e){
        this.setState({
            [e.target.id]: 
            e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state);
    }

    render(){
        if(this.props.auth.uid){
            return(
                <Redirect to="/" />
            )
        }
        return(
            <>
            <Form onSubmit={this.handleSubmit} id="login-form">
                <Form.Group >
                    <Form.Label id="email-label">Email address</Form.Label>
                    <Form.Control id="email" onChange={this.handleChange} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label id="password-label">Password</Form.Label>
                    <Form.Control id="password" onChange={this.handleChange} type="password" placeholder="Password" />
                </Form.Group>

                <Button id="login-in-button" variant="success" type="submit">
                    Login
                </Button>

                <div id="checkLogin">
                    {this.props.authError ? <p id="login-failed">Login failed: check email or password</p> : null}
                </div>

                <Link to="/register" id="sign-up-tag">Don't have an Account? Sign-up</Link>

            </Form>
            </>
        )
    }
}

const addStatetoProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const addDispatchtoProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds))
    }
}

export default connect(addStatetoProps, addDispatchtoProps)(Login)