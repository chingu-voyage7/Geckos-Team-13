import axios from "axios";
const API_ENDPOINT = "http://localhost:3001";

export default {
  auctions: {
    //Get all auctions from the backend API
    getAll: () => {
      let featuredAuctionList = [
        {
          id: "99999",
          title: "iPhone X - unlocked - last day, buy it now",
          image:
            "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=200;maxWidth=200",
          description: "The most overpriced phone money can buy",
          currentBid: "$999.99",
          countdown: "50m 20s"
        },
        {
          id: "8989",
          title: "Oulm 9315 Analog Watch W/3 Clocks Built In 95.2G",
          image:
            "https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          description: "Oulm 9315 Analog Watch W/3 Clocks Built In 95.2G",
          currentBid: "$32.99",
          countdown: "1d 50m 40s"
        },
        {
          id: "8989",
          title: "Apple MacBook Core Duo Laptop -OSX Snow Leopard",
          image:
            "https://images.unsplash.com/photo-1542728929-19dcc468723f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          description: "Apple MacBook Core Duo Laptop -OSX Snow Leopard",
          currentBid: "$24.99",
          countdown: "5d 30m 20s"
        },
        {
          id: "99999",
          title: "iPhone X - unlocked - last day, buy it now",
          image:
            "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=200;maxWidth=200",
          description: "The most overpriced phone money can buy",
          currentBid: "$999.99",
          countdown: "50m 20s"
        },
        {
          id: "8989",
          title: "Oulm 9315 Analog Watch W/3 Clocks Built In 95.2G",
          image:
            "https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          description: "Oulm 9315 Analog Watch W/3 Clocks Built In 95.2G",
          currentBid: "$32.99",
          countdown: "1d 50m 40s"
        },
        {
          id: "8989",
          title: "Apple MacBook Core Duo Laptop -OSX Snow Leopard",
          image:
            "https://images.unsplash.com/photo-1542728929-19dcc468723f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          description: "Apple MacBook Core Duo Laptop -OSX Snow Leopard",
          currentBid: "$24.99",
          countdown: "5d 30m 20s"
        }
      ];
      return featuredAuctionList;
    },
    getById: id => {
      axios.get(API_ENDPOINT + "/auction/", { id });
    }
  }
};
