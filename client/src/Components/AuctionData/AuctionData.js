import React from "react";

const AuctionData = ({ auction, onClick, change }) => (
  <div className="card text-center">
    <hr />
    <div className="card-body">
      <h5 className="card-title"> {auction.title}</h5>
      <p className="card-text">Description: {auction.description}</p>
      <p className="card-text">Current Bid: {auction.minimumBid}</p>
      <p className="card-text">Minimun Bid: {auction.minimumBid}</p>
      <div className="input-group">
        <input
          onChange={e => change(e)}
          type="text"
          className="form-control"
          placeholder="Input your bid"
          aria-label="Input your bid"
          aria-describedby="btnGroupAddon2"
        />
        <button onClick={e => onClick()} className="btn btn-success">
          Place Bid
        </button>
      </div>
    </div>
  </div>
);

export default AuctionData;
