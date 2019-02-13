import React, { Component } from "react";
import AddAuctionForm from "./AddAuctionForm";
import Api from "../../api/api";

class AddAuction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,

      description: null,
      startingDate: null,
      endOfAuction: null,
      minimumBid: null,
      images: []
    };
  }

  handlerClick() {
    const user = this.props;
    const res = Api.auctions.addAuction(this.state, user.user.id);
    res.then(r => {
      console.log(r);
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <AddAuctionForm
          onClick={() => this.handlerClick()}
          change={e => this.onChange(e)}
        />
      </div>
    );
  }
}

export default AddAuction;
