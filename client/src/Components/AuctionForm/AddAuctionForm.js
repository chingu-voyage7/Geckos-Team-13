import React from "react";

const AddAuctionForm = ({ onClick, change }) => (
  <div>
    <div className="form-group">
      <label>Auction Title</label>
      <input
        onChange={e => change(e)}
        type="text"
        className="form-control"
        id="title"
        name="title"
        placeholder="Enter Title"
      />
    </div>
    <div className="form-group">
      <label>Description</label>
      <textarea
        name="description"
        onChange={e => change(e)}
        className="form-control"
        rows="3"
      />
    </div>
    <div className="form-group">
      <label>Starting Date</label>
      <input
        onChange={e => change(e)}
        type="text"
        className="form-control"
        id="startingDate"
        name="startingDate"
      />
    </div>
    <div className="form-group">
      <label>End of Auction</label>
      <input
        onChange={e => change(e)}
        type="text"
        className="form-control"
        id="endOfAuction"
        name="endOfAuction"
      />
    </div>
    <div className="form-group">
      <label>Minimum Bid</label>
      <input
        onChange={e => change(e)}
        type="text"
        className="form-control"
        id="minimumBid"
        name="minimumBid"
      />
    </div>
    <div className="form-group">
      <label>Images</label>
      <input
        onChange={e => change(e)}
        type="file"
        className="form-control"
        id="images"
        name="images[]"
      />
    </div>
    <button onClick={e => onClick()} className="btn btn-primary">
      Save
    </button>
    <br />
  </div>
);

export default AddAuctionForm;
