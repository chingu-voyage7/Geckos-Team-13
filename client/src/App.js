import React, { Component } from "react";
import { Navigation } from "./Components/Navigation/";
import { Footer } from "./Components/Footer/";
import axios from "axios";

import CurrentAuctionList from "./Components/CurrentAuctions/CurrentActions";

let currentAuctionList = [
  {
    id: "99999",
    title: "iPhone X",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=200;maxWidth=200",
    description: "The most overpriced phone money can buy",
    currentBid: "$999.99",
    countdown: "1:30"
  },
  {
    id: "8989",
    title: "iPhone tytytX",
    image:
      "https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    description: "The hjhjhkhkmost overpriced phone money can buy",
    currentBid: "$999.99",
    countdown: "3:44"
  },
  {
    id: "8989",
    title: "iPhone tytytX",
    image:
      "https://images.unsplash.com/photo-1542728929-19dcc468723f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    description: "The hjhjhkhkmost overpriced phone money can buy",
    currentBid: "$999.99",
    countdown: "6:21"
  }
];

class App extends Component {
  state = {
    user: null,
    loading: true,
    currentAuctionsList: currentAuctionList
  };

  componentDidMount() {
    this.setState({ currentAuctionList: currentAuctionList });
    axios.get("/user").then(({ data }) => {
      if (data.id) {
        this.setState({ user: data, loading: false });
        console.log(data);
        console.log(this.state);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navigation user={this.state.user} />
        <div className="container-fluid">
          <h4>Current Auctions</h4>
          <header className="App-header">
            <CurrentAuctionList
              currentAuctionsList={this.state.currentAuctionsList}
            />
          </header>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
