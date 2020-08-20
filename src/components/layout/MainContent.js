import FriendsBar from "./FriendsBar";
import Content from "./Content";
import React, { Component } from "react";
import { Tabs } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import {
  Tab,
  Container,
  Row,
  Col,
  Nav,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import TabBar from "./TabsBar";
import { connect } from "react-redux";
import Stopwatch from "./Stopwatch";
import "../../styles/maincontent.css";
import "../../styles/friendsBar.css";

export class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.auth.uid) {
      return <Redirect to="/login" />;
    }
    return (
      <Container fluid id="main">
        <FriendsBar />
        <TabBar></TabBar>
        <Content />
      </Container>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStatetoProps)(MainContent);
