import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Avatar from '../images/profile_avatar2.jpg';
import "../styles/person.css";
import { Row, Col } from 'react-bootstrap';


export class Person extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <ListGroup.Item action variant="success" id="personLi" >
                <Row>
                    <Col>
                        <Image id="avatar" src={Avatar} roundedCircle />
                    </Col>
                    <Col id="profileName">
                        {this.props.name}
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }
    
}