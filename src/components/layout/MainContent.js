import FriendsBar from "./FriendsBar";
import Content from "./Content";
import React, { Component } from "react";
import { Tabs } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Tab, Container } from "react-bootstrap";

export class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.auth.uid) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <FriendsBar  />
        <Container>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tab eventKey="line" title="Line">
              <Content greeting={"line"} />
            </Tab>
            <Tab eventKey="otherline" title="OtherLine">
              <Content greeting={"bar"} />
            </Tab>
            <Tab eventKey="doughnut" title="Doughnut">
              <Content greeting={"dougnut"} />
            </Tab>
          </Tabs>
        </Container>
      </div>
    );
  }
}
