import React, { Component } from "react";
import { Link } from "react-router-dom";
class AuctionCard extends Component {
  constructor(props) {
    super(props);
    // We'll remove this once we start getting some data in the component
    this.state = props.currentAuctions;
  }

  render() {
    return (
      <div className="card border-light mb-3 shadow p-3 mb-5 bg-white">
        <Link to={`/auction/${this.state.id}`}>
          <img
            className="card-img-top"
            src={this.state.image}
            alt={this.state.title}
          />
        </Link>

        <div className="card-header ">
          <div className="float-right">
            <span className="badge badge-primary">Featured</span>{" "}
            <span className="badge badge-danger">Hot</span>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.state.title}</h5>
          <p className="card-text">{this.state.description}</p>
          <p className="font-weight-bold">Bids: 4 </p>
          <Link to={`/auction/${this.state.id}`} className="btn btn-warning">
            Bid Now
          </Link>
        </div>
        <div className="card-footer text-muted">
          <p className="float-left font-weight-bold">{this.state.currentBid}</p>{" "}
          <p className="float-right font-weight-bold">
            {this.state.countdown} remaining
          </p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default AuctionCard;
