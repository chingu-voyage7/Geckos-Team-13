import React, { Component } from "react";
import AuctionCard from "../AuctionCard/AuctionCard";

class CurrentAuction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAuctionsList: props
    };
  }

  render() {
    return (
      <div>
      <h2>Current Auctions</h2>    
      <hr/>  
      <ul className="list-inline">
        {this.props.currentAuctionsList.map(auction => {
          return (
            <li className="list-inline-item">
              <AuctionCard currentAuctions={auction} />
            </li>
          );
        })}
      </ul>
      </div>
    );
  }
}

export default CurrentAuction;
