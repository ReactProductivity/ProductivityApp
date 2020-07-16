import React, { Component } from 'react';
import "../styles/friendsBar.css"
import { Container } from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap/Row'
import { Column } from 'react-bootstrap/Col'
import { ToggleButton } from 'react-bootstrap';

export class FriendsBar extends Component {
    render() {
        function toggleFriendsBar() {
            console.log("hello")
            document.getElementById('sidebar').classList.toggle('active');
        }
        return (
            <div id="sidebar">
                <div class="toggle" onClick={toggleFriendsBar}>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
                <ul>
                    <li>Harmeen</li>
                    <li>Keerat</li>
                    <li>Ishaan</li>
                </ul>
            </div>)
    }
}
