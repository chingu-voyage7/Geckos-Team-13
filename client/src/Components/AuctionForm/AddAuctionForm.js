import React from "react";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import  ImagesPreview  from "../ImageUploader/ImagesPreview";
const AddAuctionForm = ({ onClick, change, uploadImages,isUploading,images }) => (
  <div>
    <form
      onSubmit={e => onClick(e)}
      encType="multipart/form-data"
      name="auctionForm"
    >
      <div className="form-group">
        <h2>What are you auctioning?</h2>
        <label>Photos</label>
        {isUploading ? (
          <div>Loading...</div>
        ) :
        images.length > 0 ? (
         <ImagesPreview images = {images} uploadImages = {e => uploadImages(e)}/>
        ) :
        <ImageUploader inputMedium={true} uploadImages={e => uploadImages(e)} />
        }
      </div>
      <div className="form-group">
        <label>Title</label>
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
      <div className="form-group" />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
    <br />
  </div>
);

export default AddAuctionForm;
