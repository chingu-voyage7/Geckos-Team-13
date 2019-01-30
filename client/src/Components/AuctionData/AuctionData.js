import React, { Component } from "react";
import { Link } from "react-router-dom";
class AuctionData extends Component {
  constructor(props) {
    super(props);
    // We'll remove this once we start getting some data in the component

    this.state = {
      id: "99999",
      title: "iPhone X",
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=300;maxWidth=300",
      description: "The most overpriced phone money can buy",
      currentBid: "$999.99",
      countdown: "1d 30m 20s"
    };
  }

  render() {
    return (
      <div className="card text-center">
        <hr />
        <div className="card-body">
          <h5 className="card-title">{this.state.title}</h5>
          <p className="card-text">Description: {this.state.description}</p>
          <p className="card-text">Current Bid: {this.state.currentBid}</p>
          <p className="card-text">Minimun Bid: {this.state.currentBid}</p>
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
