import React, {Component} from 'react';
import {InputGroup, Button, Form, FormControl} from 'react-bootstrap';
import "../../styles/register.css";

export class Register extends Component{
    constructor(props){
        super(props);
        this.state={email: "", password: "", firstname:"", lastname:""};
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
            <Form onSubmit={this.handleSubmit} id="sign-up-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label id="sign-up-text">Sign-up</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Enter email" onChange={this.handleChange} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                    <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                    <Form.Control id="firstname" type="text" placeholder="First Name" onChange={this.handleChange}/>
                    <Form.Control id="lastname" type="text" placeholder="Last Name" onChange={this.handleChange}/>
                    
                </Form.Group>
                
                <Button id="sign-up-button" variant="primary" type="submit" onChange={this.handleSubmit}>
                    Sign-up
                </Button>
            </Form>
        )
    }
}