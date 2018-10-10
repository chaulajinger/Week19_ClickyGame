// sets up the reusable Navbar Component 
import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return ( <nav className = 'navbar navbar-default navbar-fixed-top' >
            <ul >
            <li className = 'itemLeft' > A Short Puzzle to Test Your Memory < /li>
            <li className = 'itemCenter' > < /li>
            <li className = 'itemRight' > Score: { this.props.score } < /li>
            </ul> 
            </nav>
        );
    }
}

export default Navbar;