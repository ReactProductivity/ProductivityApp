import React, { Component } from 'react';
import "../../styles/friendsBar.css";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Person} from './Person';
import ListGroup from 'react-bootstrap/ListGroup';

export class FriendsBar extends Component {

    constructor(props){
        super(props);
        this.state = {friends:[], filtered:[]};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        /* initial friends from database when you login */
        const friends = this.props.initialFriends.slice();
        const filtered = this.props.initialFriends.slice();
        this.setState({friends, filtered});
    }

    addFriend(name){
        const newList = this.state.friends.slice();
        const newList2 = this.state.friends.slice();
        newList.push(name);
        newList2.push(name);
        this.setState({friends:newList, filtered:newList2});
    }

    toggleFriendsBar() {
        document.getElementById('sidebar').classList.toggle('active');
    }

    handleChange(input){
        let copyList = this.state.friends.slice();
        let filteredList = [];

        if (input.target.value === ""){
           filteredList = this.state.filtered;
        }
        else{
            filteredList = copyList.filter(item => {
                const lc = item.toLowerCase();
                const filter = input.target.value.toLowerCase();
                return lc.includes(filter);
            });

        }
        this.setState({friends:filteredList});
    }

    render() {
        let status =["online", "offline"]
        return (
            <>
            <Container id="sidebar">
                
                <div className="toggle" onClick={this.toggleFriendsBar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <Row>
                    <Col>
                        <p id="friendsText">FRIENDS</p>
                    </Col>
                    <Col>
                        <Button id="addFriend" variant="dark" onClick={() => this.addFriend("Kee")}>+</Button>
                    </Col>
                </Row>
                <hr id="separate"></hr>
                <Row>
                    <Col>
                        <Form> 
                            <Form.Control id="searchFriend" placeholder="Find friend..." onChange={this.handleChange}/>
                        </Form>
                    </Col>
                </Row>

                <ListGroup >
                    <div id="friendList">
                        {this.state.friends.map((friend) => {
                            return(
                                <Person key={friend} name={friend} status={"online"} ></Person>
                            );
                        })}
                    </div>
                </ListGroup>
                
            </Container>
            </>
        )
    }
}
