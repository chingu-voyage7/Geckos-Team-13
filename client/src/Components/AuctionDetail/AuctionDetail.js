import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuctionData from "../AuctionData/AuctionData";
import AuctionCarousel from "../AuctionCarousel/AuctionCarousel";
import api from "../../api/api";
class AuctionDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    console.log(api.auctions.getById(params.id));
  }

  render() {
    return (
      <div className="container">
        {/*Create and then invoke  the breadcrumb component here */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {" "}
              <Link to="/">Come Back to Current Auctions</Link>{" "}
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-sm-6">
            <AuctionCarousel />
          </div>
          <div className="col-sm-6">
            <AuctionData />
          </div>
        </div>
      </div>
    );
  }
}

export default AuctionDetail;
