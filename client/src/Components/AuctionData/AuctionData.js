import React from "react";
import { Link } from "react-router-dom";
const AuctionData = ({ auction }) => (
  <div className="card text-center">
    <hr />
    <div className="card-body">
      <h5 className="card-title">Title: {auction.title}</h5>
      <p className="card-text">Description: {auction.description}</p>
      <p className="card-text">Current Bid: {auction.minimumBid}</p>
      <p className="card-text">Minimun Bid: {auction.minimumBid}</p>
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

export default AuctionData;
