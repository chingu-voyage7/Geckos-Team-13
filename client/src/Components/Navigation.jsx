import React, { Component } from 'react';
import axios from 'axios';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  
  
  render() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><i className="fas fa-gavel" style={{fontSize:"1em"}}>  </i>&nbsp;Easy Auction</a>
            <a className="btn btn-outline-info" href="/login">Login</a>
        </nav>
    );
  }
}

export default Navigation;
