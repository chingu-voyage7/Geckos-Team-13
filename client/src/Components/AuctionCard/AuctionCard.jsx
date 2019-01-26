import React, { Component } from "react";

class AuctionCard extends Component {
  constructor(props) {
    super(props);
    // We'll remove this once we start getting some data in the component
    if (!props) {
      this.state = {
        id: "99999",
        title: "iPhone X",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=300;maxWidth=300",
        description: "The most overpriced phone money can buy",
        currentBid: "$999.99",
        countdown: "1:30"
      };
    } else {
      this.state = props.currentAuctions;
      console.log(this.state);
    }
  }

  render() {
    return (
      <div className="card text-center">
        <img src={this.state.image} alt={this.state.title} />
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">{this.state.title}</h5>
          <p className="card-text">{this.state.description}</p>
          <a href={`/auction?id=${this.state.id}`} className="btn btn-primary">
            Place a Bid
          </a>
        </div>
        <div className="card-footer text-muted">{this.state.countdown}</div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: "otherValue" });
  }
}

export default AuctionCard;
