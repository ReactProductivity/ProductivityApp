import React, { Component } from 'react';
import "../styles/friendsBar.css";
import { Container } from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap/Row';
import { Column } from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import {Person} from './Person';
import ListGroup from 'react-bootstrap/ListGroup';

export class FriendsBar extends Component {

    constructor(){
        super();
        this.state = {friends:[]};
    }

    componentDidMount() {
        /* initial friends from database when you login */
        const friends = ["Keerat", "Ishaan", "Harmeen"]
        this.setState({friends});
    }

    addFriend(name){
        const newList = this.state.friends.slice();
        newList.push(name)
        this.setState({friends:newList});
    }

    toggleFriendsBar() {
        document.getElementById('sidebar').classList.toggle('active');
    }

    render() {
        return (
            <div id="sidebar">
                <div className="toggle" onClick={this.toggleFriendsBar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="friendsHeader">
                    <Button id="addFriend" variant="dark" onClick={() => this.addFriend("Kee")}>Add Friend +</Button>
                    <p>Friends</p>
                </div>
                <ListGroup id="friendslist">
                    <div className="friends">
                        {this.state.friends.map((name) => {
                            return(
                                <Person name = {name} ></Person>
                            );
                        })}
                    </div>
                </ListGroup>
            </div>
        )
    }
}
