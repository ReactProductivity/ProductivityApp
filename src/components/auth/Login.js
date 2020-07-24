import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {InputGroup, Button, Form, FormControl} from 'react-bootstrap';
import "../../styles/login.css";

export class Login extends Component{
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
        console.log(this.state);
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit} id="login-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label id="email-label">Email address</Form.Label>
                    <Form.Control id="email" onChange={this.handleChange} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label id="password-label">Password</Form.Label>
                    <Form.Control id="password" onChange={this.handleChange} type="password" placeholder="Password" />
                </Form.Group>

                <Button id="login-in-button" variant="success" type="submit">
                    Login
                </Button>
            </Form>
        )
    }
}