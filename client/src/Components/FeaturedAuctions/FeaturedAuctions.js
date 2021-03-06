import React, { Component } from "react";
import AuctionCard from "../AuctionCard/AuctionCard";

class FeaturedAuctions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredAuctionList: props
    };
  }

  render() {
    return (
      <div>
        <br />
        <h2>Featured Auctions</h2>
        <hr />
        <div className="container">
          <div className="card-columns">
            {this.props.featuredAuctionList.map((auction, index) => {
              return <AuctionCard key={index} currentAuctions={auction} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedAuctions;
