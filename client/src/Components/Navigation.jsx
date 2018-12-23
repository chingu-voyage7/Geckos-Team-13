import React, { Component } from 'react';
import "./Navigation.css"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      collapsed: true, 
      path: "" 
    };
  }

  

  componentDidMount(){
    console.log("Navbar");
    console.log(this.props.user);
    this.setState({
      user: this.props.user
    })
  }
  
  render() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand mr-auto" href="/"><i className="fas fa-gavel" style={{fontSize:"1em"}}>  </i>&nbsp;Easy Auction</a>
            {this.props.user ? 
            <div className="btn-group" role="group" aria-label="User Controls">
              <a className="btn btn-outline-info" href="/profile">Profile</a>
              <a className="btn btn-outline-info" href="/logout">Logout</a>
            </div>
            : 
            <a className="btn btn-outline-info" href="/login">Login</a>}
            {this.props.user && 
            <div className="text-center" id="userThumb">
              <img src={this.props.user.picture} alt="User Pic"/>
              <caption className="text-center">{this.props.user.displayName}</caption>
            </div>}
        </nav>
    );
  }
}

export default Navigation;
