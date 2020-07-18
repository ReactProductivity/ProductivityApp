import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


export class Person extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <ListGroup.Item variant="success" id="sidebarLi">{this.props.name}</ListGroup.Item>
        )
    }
    
}