import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import "./ImagesUploader.css";
export const ImageUploader = props => (
  <div className="card custom-card" size="2x">
    <div className="card-body">
      <h4 className="uploaderTitle">
        <FontAwesomeIcon
          icon={faImages}
          className="text-center auction-image"
          size="5x"
        />
        Drag and drop, or browse
      </h4>
      <p>Upload up 7 photos, images must be in PNG or JPG format </p>
      <input
        onChange={e => props.uploadImages(e)}
        type="file"
        name="images"
        multiple
      />
    </div>
  </div>
);
