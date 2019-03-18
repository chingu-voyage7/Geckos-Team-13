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
    this.state.images.forEach((file, i) => {
      formData.append("images", file);
    });
    //formData.append("images", this.state.images);
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("startingDate", this.state.startingDate);
    formData.append("endOfAuction", this.state.endOfAuction);
    formData.append("minimumBid", this.state.minimumBid);
    formData.append("user", user.user);

    const res = Api.auctions.addAuction(formData);
    res.then(r => {
      console.log(r);
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleImageUploadChange(e) {
    this.setState({uploading : true});
    const photos = Array.from(e.target.files[0]);
    const photosArr = [];
 
      photosArr.push(URL.createObjectURL(e.target.files[0]))
      this.state.images.push(photosArr);  
    //this.setState({ images: photosArr });
    this.setState({uploading : false});
  }

  render() {
    const {images,uploading} = this.state;
    console.log(images);
    return (
      <div>
        <AddAuctionForm
          onClick={e => this.handlerClick(e)}
          change={e => this.onChange(e)}
          uploadImages={e => this.handleImageUploadChange(e)}
          isUploading ={uploading}
          images={images}
          
        />
      </div>
    );
  }
}

export default AddAuction;
