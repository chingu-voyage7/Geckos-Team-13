import React, { Component } from 'react';

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
            <div class="btn-group" role="group" aria-label="User Controls">
              <a className="btn btn-outline-info" href="/logout">{this.props.user.displayName}</a>
              <a className="btn btn-outline-info" href="/logout">Logout</a>
            </div>: 
            <a className="btn btn-outline-info" href="/login">Login</a>}
            
        </nav>
    );
  }
}

export default Navigation;
