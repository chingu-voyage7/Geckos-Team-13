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
      <ul className="list-inline">
        {this.props.currentAuctionsList.map(card => {
          return (
            <li className="list-inline-item">
              <AuctionCard currentAuctions={card} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CurrentAuction;
