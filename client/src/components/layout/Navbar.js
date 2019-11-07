import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/" className="col s5 brand-logo center black-text" style={{ fontFamily: "monospace" }}>
                            <i className="material-icons">code</i> TravelBuddy
                        </Link>
                        <Link className="col s5 black-text" style={{ fontFamily: "monospace" }} to="/home">
        Home |
      </Link>
      <Link className="col s5 black-text" style={{ fontFamily: "monospace" }} to="/search">
      Search |
      </Link>
      <Link className="col s5 black-text" style={{ fontFamily: "monospace" }} to="/profile">
        Profile |
      </Link>
      <Link className="col s5 black-text" style={{ fontFamily: "monospace" }} to="/login">
        Login 
      </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;