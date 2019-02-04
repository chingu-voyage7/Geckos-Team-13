import React, { Component } from "react";
import { Link } from "react-router-dom";
const style = {
  verticalAlign: "right",
  width: "50px",
  height: "50px",
  borderRadius: " 50%"
};
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      collapsed: true,
      path: ""
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    });
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark" id="mainNav">
        <a className="navbar-brand mr-auto" href="/">
          <i className="fas fa-gavel"> </i>
          &nbsp;Easy Auction
        </a>
        {this.props.user ? (
          <form className="form-inline">
            <Link
              to="/add-auction"
              className="btn btn-outline-warning my-2 my-sm-0"
            >
              Add Auction
            </Link>

            <a
              href="/userauctions"
              className="btn btn-outline-success my-2 my-sm-0"
            >
              My Auctions
            </a>
            <a href="/logout" className="btn btn-outline-success my-2 my-sm-0">
              Logout
            </a>
          </form>
        ) : (
          <a className="btn btn-outline-info d-none d-md-block" href="/login">
            Login
          </a>
        )}
        {this.props.user && (
          <div className="rounded float-left">
            <img style={style} src={this.props.user.picture} alt="User Pic" />
            <caption className="text-center">
              {this.props.user.displayName}
            </caption>
          </div>
        )}
      </nav>
    );
  }
}

export default Navigation;
