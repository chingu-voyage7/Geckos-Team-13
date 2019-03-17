import React, { Component } from "react";
import { Navigation } from "./Components/Navigation/";
import { Footer } from "./Components/Footer/";
import axios from "axios";
import { Route } from "react-router-dom";
import FeaturedAuctions from "./Components/FeaturedAuctions/FeaturedAuctions";
import AuctionDetail from "./Components/AuctionDetail/AuctionDetail";
import api from "./api/api";
import AddAuctionComponent from "./Components/AuctionForm/AddAuctionComponent";

class App extends Component {
  state = {
    user: null,
    loading: true,
    featuredAuctionList: []
  };

  componentDidMount() {
    this.getFeaturedAuctions();
    axios.get("/user").then(({ data }) => {
      if (data.id) {
        this.setState({ user: data, loading: false });
        //console.log(data);
        //console.log(this.state);
      }
    });
  }

  async getFeaturedAuctions() {
    const res = await api.auctions.getAll();
    this.setState({ featuredAuctionList: res.data });
  }

  render() {
    return (
      <div className="App">
        <Navigation user={this.state.user} />
        <div className="container">
          <Route
            path="/"
            exact
            render={() => (
              <FeaturedAuctions
                featuredAuctionList={this.state.featuredAuctionList}
              />
            )}
          />
          <Route path="/auction/:id" exact component={AuctionDetail} />
          <Route
            path="/add-auction"
            exact
            render={() => <AddAuctionComponent user={this.state.user} />}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
