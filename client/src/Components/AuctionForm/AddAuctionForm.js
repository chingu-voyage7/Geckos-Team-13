import React from "react";

const AddAuctionForm = props => (
  <div>
    <form>
      <div className="form-group">
        <label>Auction Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Title"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" rows="3" />
      </div>
      <div className="form-group">
        <label>Starting Date</label>
        <input type="text" className="form-control" id="startingDate" />
      </div>
      <div className="form-group">
        <label>End of Auction</label>
        <input type="text" className="form-control" id="endDate" />
      </div>
      <div className="form-group">
        <label>Minimum Bid</label>
        <input type="text" className="form-control" id="minimumBid" />
      </div>
      <div className="form-group">
        <label>Images</label>
        <input type="file" className="form-control" id="images[]" />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
      <br />
    </form>
  </div>
);

export default AddAuctionForm;
