import React from "react";
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
            className="d-block w-30"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=300;maxWidth=300"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-30"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=300;maxWidth=300"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-30"
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=300;maxWidth=300"
            alt="Third slide"
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
