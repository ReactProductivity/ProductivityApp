import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Avatar from '../../images/profile_avatar2.jpg';
import "../../styles/person.css";
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";



export class Person extends Component{
    constructor(props){
        super(props);
        this.state = {status:""};
        this.getStatusColor = this.getStatusColor.bind(this);
    }

    componentDidMount(){
        /* fetch state here */ 
        
        this.props.isLoggedIn(this.props.uid);
        if(this.props.online){
            this.setState({status:"online"});
        }
        else{
            this.setState({status:"offline"});
        }
      
    }

    getStatusColor() {
        switch(this.state.status) {
            case "offline": return "red";
            case "online": return "green";
        }
    }

    render(){
        // this.props.isLoggedIn(this.props.uid);
        // if(this.props.online){
        //     this.setState({status:"online"});
        // }
        // else{
        //     this.setState({status:"offline"});
        // }
        console.log(this.state)

        return(
            <ListGroup.Item action variant="success" id="personLi" >
                <Row>
                    <Col>
                        <Image id="avatar" src={Avatar} roundedCircle />
                    </Col>
                    <Col id="profileName">
                        {this.props.uid}
                    </Col>
                    <Col>
                        <span id="dot" style={{backgroundColor: this.getStatusColor()}}></span>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }
}


// const addDispatchtoProps = (dispatch) => {
//     return {
//         isLoggedIn: (uid) => dispatch(isLoggedIn(uid))
//     }
// }

export default Person