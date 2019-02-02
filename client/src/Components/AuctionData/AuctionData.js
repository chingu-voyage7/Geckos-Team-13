import React, { Component } from "react";
import { Link } from "react-router-dom";
class AuctionData extends Component {
  constructor(props) {
    super(props);
    // We'll remove this once we start getting some data in the component
    console.log(props);
  }

  render() {
    const props = this.props;
    return (
      <div className="card text-center">
        <hr />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">Current Bid: {props.currentBid}</p>
          <p className="card-text">Minimun Bid: {props.currentBid}</p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Input your bid"
              aria-label="Input your bid"
              aria-describedby="btnGroupAddon2"
            />
            <Link to="/" className="btn btn-success">
              Place Bid
            </Link>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default AuctionData;
