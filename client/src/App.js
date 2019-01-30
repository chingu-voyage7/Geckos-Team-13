import React, { Component } from "react";
import { Navigation } from "./Components/Navigation/";
import { Footer } from "./Components/Footer/";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import FeaturedAuctions from "./Components/FeaturedAuctions/FeaturedAuctions";
import AuctionDetail from "./Components/AuctionDetail/AuctionDetail";
import api from "./api/api";

class App extends Component {
  state = {
    user: null,
    loading: true,
    featuredAuctionList: api.auctions.getAll()
  };

  componentDidMount() {
    this.setState({ featuredAuctionList: api.auctions.getAll() });
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
