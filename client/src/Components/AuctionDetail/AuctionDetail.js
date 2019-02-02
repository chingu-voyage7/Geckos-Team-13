import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuctionData from "../AuctionData/AuctionData";
import AuctionCarousel from "../AuctionCarousel/AuctionCarousel";
import api from "../../api/api";

class AuctionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctionDetail: null
    };
  }

  componentWillUpdate() {
    const {
      match: { params }
    } = this.props;
    api.auctions
      .getById(params.id)
      .then(res => {
        this.setState({ auctionDetail: res.data });
      })
      .catch(error => error);
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
            <AuctionData date={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default AuctionDetail;
