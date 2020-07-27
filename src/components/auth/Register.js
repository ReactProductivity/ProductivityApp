import React, {Component} from 'react';
import {InputGroup, Button, Form, FormControl} from 'react-bootstrap';
import "../../styles/register.css";
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {register} from '../../store/actions/authActions'

class Register extends Component{
    constructor(props){
        super(props);
        this.state={email: "", password: "", firstname:"", lastname:"", username:""};
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
        this.props.register(this.state);
    }

    render(){
        if(this.props.auth.uid){
            return(
                <Redirect to="/"/>
            )
        }        
        return(
            <Form onSubmit={this.handleSubmit} id="sign-up-form">
                <Form.Group>
                    <Form.Label id="sign-up-text">Sign-up</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Enter email" onChange={this.handleChange} />
                    <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                    <Form.Control id="firstname" type="text" placeholder="First Name" onChange={this.handleChange}/>
                    <Form.Control id="lastname" type="text" placeholder="Last Name" onChange={this.handleChange}/>
                    <Form.Control id="username" type="text" placeholder="Username" onChange={this.handleChange}/>
                </Form.Group>
                
                <Button id="sign-up-button" variant="primary" type="submit" onChange={this.handleSubmit}>
                    Sign-up
                </Button>

            </Form>
        )
    }
}

const addStatetoProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const addDispatchtoProps = (dispatch) => {
    return{
        register: (fields) => dispatch(register(fields))
    }
}


export default connect(addStatetoProps, addDispatchtoProps)(Register)