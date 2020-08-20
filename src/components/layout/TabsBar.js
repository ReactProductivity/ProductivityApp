import React, { Component } from "react";
import { Nav, Button, Tab, Tabs, NavItem } from "react-bootstrap";
import Content from "./Content";
import "../../styles/maincontent.css";
export class TabBar extends Component {
  constructor(props) {
    super(props);
  }

  randomRender() {
    return <div>hi</div>;
  }
  render() {
    return (
      <Nav justify="true" variant="pills">
        <NavItem as={Button} variant="danger">
          Home
        </NavItem>
        <NavItem as={Button} variant="info">
          Analytics
        </NavItem>
        <NavItem
          as={"Button"}
          onClick={() => this.randomRender()}
          id="button1"
          variant="dark"
        >
          Settings
        </NavItem>
        <NavItem as={"Button"} id="button1">
          Messaging
        </NavItem>

        {/* <Button variant="danger">Home</Button>

        <Button>Activites</Button>

        <Button eventKey="link-2">Link</Button>

        <Button variant="danger">Disabled</Button> */}
      </Nav>
    );
  }
}
export default TabBar;
