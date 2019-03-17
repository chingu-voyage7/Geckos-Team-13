import axios from "axios";
//const API_ENDPOINT = "http://localhost:3001";

export default {
  auctions: {
    //Get all auctions from the backend API
    getAll: () => {
      return axios.get("/auctions/").then(data => data.data);
    },
    getById: id => {
      return axios.get(`/auctions/?id=${id}`).then(data => data);
    },
    addAuction: data => {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      return axios.post("/auction", data, config).then(res => res);
    }
  }
};
