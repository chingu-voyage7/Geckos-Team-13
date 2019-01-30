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
        <div className="card-columns">
          {this.props.featuredAuctionList.map(auction => {
            return <AuctionCard currentAuctions={auction} />;
          })}
        </div>
      </div>
    );
  }
}

export default FeaturedAuctions;
