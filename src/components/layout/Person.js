import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Avatar from '../../images/profile_avatar2.jpg';
import "../../styles/person.css";
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { auth } from 'firebase';
import fire from '../config/firebaseConfig'


export class Person extends Component{
    constructor(props){
        super(props);
        this.state = {status:"", name:""};
        this.getStatusColor = this.getStatusColor.bind(this);
    }

    componentDidMount(){
        /* fetch online status here */ 
        var userRef = fire.database().ref(`/status/${this.props.uid}`)
        userRef.on('value', snapshot => {
            //console.log(snapshot.val())
            if (snapshot.val().state === 'online') {
                this.setState({status:"online"})
            } else {
                this.setState({status:"offline"})
            }
        });

        // get name of current friend
        // var nameDb = fire.firestore().collection('users').doc(this.props.uid)
        // nameDb.get().then((resp) => {
        //     this.setState({name: resp.data().firstname})
        // })
    }

    getStatusColor() {
        switch(this.state.status) {
            case "offline": return "red";
            case "online": return "green";
        }
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

export default (Person)