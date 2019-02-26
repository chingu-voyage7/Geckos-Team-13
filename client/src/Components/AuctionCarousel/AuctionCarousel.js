import React from "react";
const imgStyle = {
  maxWidth: "100%",
  maxHeight: "100%"
};
const AuctionCarousel = props => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <hr />
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            style={imgStyle}
            className="d-block w-30"
            src={props.images}
            alt="slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default AuctionCarousel;
