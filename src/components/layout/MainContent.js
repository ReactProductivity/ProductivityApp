import FriendsBar from "./FriendsBar";
import Content from "./Content";
import React, { Component } from "react";
import { Tabs } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Tab, Container, Row, Col, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import Stopwatch from "./Stopwatch";
import "../../styles/maincontent.css";

export class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.auth.uid) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <FriendsBar />
        <Stopwatch />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} id="buttons">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link active id="link1" eventKey="first">
                    Line
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="link2" eventKey="second">
                    Bar
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id="link3" eventKey="third">
                    Doughnut
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Content greeting={"line"} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Content greeting={"bar"} />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Content greeting={"doughnut"} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

        {/* <Container>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant={"pills"}
          >
            <Tab eventKey="line" title="Line">
              <Content greeting={"line"} />
            </Tab>
            <Tab eventKey="otherline" title="OtherLine">
              <Content greeting={"bar"} />
            </Tab>
            <Tab eventKey="doughnut" title="Doughnut">
              <Content greeting={"doughnut"} />
            </Tab>
          </Tabs>
        </Container> */}
      </div>
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
