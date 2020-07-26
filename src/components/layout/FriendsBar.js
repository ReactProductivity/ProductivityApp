import React, { Component } from 'react';
import "../../styles/friendsBar.css";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Person} from './Person';
import ListGroup from 'react-bootstrap/ListGroup';
import addFriend from '../../store/actions/friendActions';
import {connect} from 'react-redux';
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase';

class FriendsBar extends Component {

    constructor(props){
        super(props);
        this.state = {friends:[]};
        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount() {
    //     /* initial friends from database when you login */
    //     //console.log(this.props.initialFriends);
    //     // console.log(friends);
    //     // this.setState({friends});
    // }
    static getDerivedStateFromProps(props, state) {
        if (props.initialFriends !== state.friends) {
          return {
            friends: props.initialFriends,
          };
        }
        return null;
    }

    addFriend(name){
        const newList = this.state.friends.slice();
        const newList2 = this.state.friends.slice();
        newList.push({name: name});
        newList2.push(name);
        this.props.addFriend(name);
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
        console.log(this.state.friends)
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
                        {this.state.friends && this.state.friends.map((friend) => {
                            return(
                                <Person key={friend.id} name={friend.name} status={"online"} ></Person>
                            );
                        })}
                    </div>
                </ListGroup>
                
            </Container>
            </>
        )
    }
}

const addFriendsListToProps = (state) => {
    return{
        initialFriends: state.firestore.ordered.friends
    }
}

const addDispatchtoProps = (dispatch) => {
    return {
        addFriend: (friend) => dispatch(addFriend(friend))
    }
}

export default compose(
    firestoreConnect(() => ['friends']),
    connect(addFriendsListToProps, addDispatchtoProps)
    )(FriendsBar)