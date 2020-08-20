import React from "react";
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/layout/Navigation";
import FriendsBar from "./components/layout/FriendsBar";
import MainContent from "./components/layout/MainContent";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { getFirebase } from "react-redux-firebase";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // this is the user presence feature
    if (this.props.auth.uid) {
      //console.log(this.props)
      const firebase = getFirebase().database();
      const uid = getFirebase().auth().currentUser.uid;
      const onlineRef = firebase.ref(".info/connected");

      var isOfflineForDatabase = {
        state: "offline",
        last_changed: getFirebase().database.ServerValue.TIMESTAMP,
      };

      var isOnlineForDatabase = {
        state: "online",
        last_changed: getFirebase().database.ServerValue.TIMESTAMP,
      };

      onlineRef.on("value", (snapshot) => {
        firebase
          .ref(`/status/${uid}`)
          .onDisconnect()
          .set(isOfflineForDatabase)
          .then(() => {
            firebase.ref(`/status/${uid}`).set(isOnlineForDatabase);
          });
      });
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={MainContent} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
// import { import } from '@babel/types';

const addAppToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(addAppToProps)(App);
