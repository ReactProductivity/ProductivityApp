import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Avatar from '../../images/profile_avatar2.jpg';
import "../../styles/person.css";
import { Row, Col } from 'react-bootstrap';


export class Person extends Component{
    constructor(props){
        super(props);
        this.state = {status:""};
    }

    componentDidMount(){
        /* fetch state here */ 
        // this.setState({status:"online"});
    }


    // getStatusColor() {
    //     switch(this.state.status) {
    //         case "offline": return "red";
    //         case "online": return "green";
    //         case "away": return "yellow";
    //     }
    // }

    render(){
        let color = 'green';
        if(this.props.status === 'offline'){
          color = 'red';
        } else if (this.props.status === 'away') {
          color = 'yellow';
        }

        return(
            <ListGroup.Item action variant="success" id="personLi" >
                <Row>
                    <Col>
                        <Image id="avatar" src={Avatar} roundedCircle />
                    </Col>
                    <Col id="profileName">
                        {this.props.name}
                    </Col>
                    <Col>
                        <span id="dot" style={{backgroundColor: color}}></span>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }
    
}