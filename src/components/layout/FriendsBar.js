import React, { Component } from "react";
import "../../styles/friendsBar.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Person } from "./Person";
import ListGroup from "react-bootstrap/ListGroup";
import addFriend from "../../store/actions/friendActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import {isLoggedIn} from '../../store/actions/authActions';

class FriendsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            filtered: [],
            currentSearch: "",
            currentFunction: "Find friend...",
            names: []
        };
        //console.log(this.props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState({ friends: nextProps.initialFriends, filtered: nextProps.initialFriends})
    // }   

    componentDidMount(){
        // console.log(this.props.initialFriends)
        this.setState({friends: this.props.initialFriends})
        //console.log(this.props.initialFriends)
    }

    componentDidUpdate(prevProps){
        // compare friends to check for changes from redux
        // if changes have occured then get names of all the  friends and push to names state
        if((prevProps.initialFriends !== this.props.initialFriends) && (this.props.initialFriends !== undefined)){
            let getNames = []
            var i = 0;
            var j= 0;
            for (i = 0; i < this.props.initialFriends.length; i++) {
                // console.log(this.props.initialFriends[i])
                let name = ""
                for (j = 0; j < this.props.users.length; j++){
                    if(this.props.users[j].uid === this.props.initialFriends[i]){
                        name = this.props.users[j].firstname;
                        // console.log(name)
                        getNames.push(name)
                        break;
                    }
                }
            }
            console.log(getNames)
            this.setState({names: getNames})
        }
    }

  /* filtered ->  what is displayed on friendsbar
       friends -> what keeps track of list of friends */
    addFriend(name) {
        if (name === "") {
            name = this.state.currentFunction;
        }
        const friendsList = this.state.friends.slice();
        const filteredList = this.state.filtered.slice();
        if (name === "Find friend...") {
        /* when switching to add friend mode, clear out friends bar*/
            this.setState({ filtered: [], currentFunction: "Add friend..." });
        } 
        else if (name === "Add friend...") {
        /* a switch to find friends mode brings back friends list*/
            this.setState({
                filtered: friendsList,
                currentFunction: "Find friend...",
            });
        } 
        else {
            if (this.state.currentFunction === "Add friend...") {
                name = document.getElementById("searchFriend").value;
                friendsList.push({ name: name });
                filteredList.push({ name: name });
                this.setState({ friends: friendsList, filtered: filteredList });
            }
        }
    }

    handleSubmit(e){
        console.log("INSIDE SUBMIT")
        e.preventDefault();
    }

    toggleFriendsBar() {
        document.getElementById("sidebar").classList.toggle("active");

    }

    handleChange(input) {
        let currSearch = input.target.value;
        let currFriendsList = [...this.state.names];
        console.log(currFriendsList)
        let filteredList = [...this.state.filtered];
        if (input.target.value === "") {
            if (this.state.currentFunction === "Add friend...")
                currSearch = "Add friend...";
            else {
                currSearch = "Find friend...";
                filteredList = currFriendsList;
            }
            this.setState({ filtered: filteredList, currentFunction: currSearch });
            return;
        }
        if (this.state.currentFunction === "Find friend...") {
            filteredList = currFriendsList.filter((item) => {
                const lc = item.toLowerCase();
                const filter = input.target.value.toLowerCase();
                return lc.includes(filter);
            });
        }
        this.setState({ friends: currFriendsList, filtered: filteredList});

    }

    render() {
        // redirect to login page if not logged in
        // if (!this.props.auth.uid) {
        //     return <Redirect to="/login" />;
        // }
        
        //console.log(this.props)
        // let getNames = []
        // var i = 0;
        // if(this.state.friends !== undefined){
        //     for (i = 0; i < this.state.friends.length; i++) {
        //         let item = this.state.friends[i];
        //         getNames.push(this.props.users.this.state.friends[i].firstname);
        //     }
        // }
        // console.log(getNames)
            
        return (
            <>
            <Container fluid id="sidebar">
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
                        <Button
                            id="addFriend"
                            variant="dark"
                            onClick={() =>
                            this.addFriend(document.getElementById("searchFriend").value)
                            }
                        >
                            +
                        </Button>
                    </Col>
                </Row>
                <hr id="separate"></hr>
                <Row>
                    <Col>
                        <Form onSubmit= {this.handleSubmit}>
                            <Form.Control
                            id="searchFriend"
                            placeholder={this.state.currentFunction}
                            onChange={this.handleChange}
                            />
                        </Form>
                    </Col>
                </Row>
                <ListGroup>
                    <div id="friendList">
                        {/* {this.state.filtered &&
                            this.state.filtered.map((friend) => {
                            return (
                                <Person
                                    key={friend}
                                    name={friend}
                                    uid={friend}
                                    isLoggedIn = {this.props.isLoggedIn}
                                >
                                </Person>
                            );
                            })} */}
                        {this.props.initialFriends &&
                            this.props.initialFriends.map((friend, index) => {
                                return (
                                    <Person
                                        key={friend}
                                        name={this.state.names[index]}
                                        uid={friend}
                                        isLoggedIn = {this.props.isLoggedIn}
                                    >
                                    </Person>
                                );
                            })}
                    </div>
                </ListGroup>
            </Container>
            </>
        );
    }
}

const addFriendsListToProps = (state) => {
    console.log(state)
    return {
        initialFriends: state.firebase.profile.friends,
        auth: state.firebase.auth,
        users: state.firestore.ordered.users
    };
};

const addDispatchtoProps = (dispatch) => {
  return {
    addFriend: (friend) => dispatch(addFriend(friend)),
    isLoggedIn: (uid) => dispatch(isLoggedIn(uid))
  };
};

export default compose(
    firestoreConnect(() => ["users"]),
    connect(addFriendsListToProps, addDispatchtoProps)
)(FriendsBar);

// export default connect(addFriendsListToProps,addDispatchtoProps)(FriendsBar)