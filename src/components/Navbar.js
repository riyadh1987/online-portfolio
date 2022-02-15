import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./../images/user.png";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="image">
          <img src={User} className="avatar" />
        </div>
        <br />
        <Link className="link" to="/about">
          ABOUT
        </Link>
        <br />
        <Link className="link" to="/experience">
          EXPERIENCE
        </Link>
        <br />
        <Link className="link" to="/education">
          EDUCATION
        </Link>
        <br />
        <Link className="link" to="/skills">
          SKILLS
        </Link>
        <br />
        <Link className="link" to="/interest">
          INTERESTS
        </Link>
        <br />
        <Link className="link" to="/awards">
          AWARDS
        </Link>
        <br />
      </nav>
    );
  }
}

export default Navbar;
