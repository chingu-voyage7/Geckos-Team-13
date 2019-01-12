import React, { Component } from 'react';

class AuctionCard extends Component {
  constructor(props) {
    super(props);
    // We'll remove this once we start getting some data in the component
    if(!props){
        this.state = {
            id: "99999",
            title: "iPhone X",
            image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=1000;maxWidth=1000",
            description:"The most overpriced phone money can buy",
            currentBid:"$999.99",
            countdown: "1:30",
        }
    }
    else{
        this.state = props;
    }
  }

  render() {
    return (
        <div className="card text-center">
            <img className="card-img-top" src={this.state.image} alt={this.state.title}/>
            <div className="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">{this.state.title}</h5>
                <p class="card-text">{this.state.description}</p>
                <a href={`/auction?id=${this.state.id}`} class="btn btn-primary">Place a Bid</a>
            </div>
            <div class="card-footer text-muted">
                {this.state.countdown}
            </div>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default AuctionCard;
