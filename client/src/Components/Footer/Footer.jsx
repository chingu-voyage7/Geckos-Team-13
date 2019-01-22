import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };
  }

  render() {
    return (
      <nav className="navbar sticky-bottom navbar-dark bg-dark" id="footerNav">
        <ul className="nav justify-content-center mx-auto">
          <li className="nav-item">
            <a className="nav-link active" href="https://chingu.io/">
              <i className="fas fa-space-shuttle" /> Chingu Voyage 7
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">
              <i className="fab fa-github" /> Built by Geckos Team 13
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">
              <i className="fab fa-react" /> MERN Stack
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default Footer;
