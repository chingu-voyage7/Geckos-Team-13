import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuctionData from "../AuctionData/AuctionData";
import AuctionCarousel from "../AuctionCarousel/AuctionCarousel";
import api from "../../api/api";

class AuctionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auctionDetail: {},
      bid: 0
    };
  }

  componentDidMount() {
    this.getAuctionDetail();
  }

  //Get auction detail
  async getAuctionDetail() {
    const {
      match: { params }
    } = this.props;
    const res = await api.auctions.getById(params.id);

    this.setState({ auctionDetail: res.data.data[0] });
    console.log(this.state);
  }

  placeBid() {
    console.log(this.state.bid);
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
            <AuctionData
              auction={this.state.auctionDetail}
              onClick={() => this.placeBid()}
              change={e => this.setState({ bid: e.target.value })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuctionDetail;
