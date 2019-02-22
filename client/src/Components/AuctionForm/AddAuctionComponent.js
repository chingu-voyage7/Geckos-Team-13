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
      images: [],
      uploading: false
    };
    //this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick(event) {
    event.preventDefault();
    const user = this.props;

    let formData = new FormData();
    //formData.append("images", this.state.images);
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("startingDate", this.state.startingDate);
    formData.append("endOfAuction", this.state.endOfAuction);
    formData.append("minimumBid", this.state.minimumBid);

    const res = Api.auctions.addAuction(formData, user.user);
    res.then(r => {
      console.log(r);
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleImageUploadChange(e) {
    const user = this.props;
    const photos = Array.from(e.target.files);
    let formData = new FormData();
    photos.forEach((file, i) => {
      console.log(i);
      formData.append("photos", file);
    });

    fetch("http://localhost:3001/auction", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(r => {
        console.log(r);
      })
      .catch(error => console.log(error));
    // this.setState({ images: e.target.files });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <AddAuctionForm
          onClick={e => this.handlerClick(e)}
          change={e => this.onChange(e)}
          uploadImages={e => this.handleImageUploadChange(e)}
        />
      </div>
    );
  }
}

export default AddAuction;
