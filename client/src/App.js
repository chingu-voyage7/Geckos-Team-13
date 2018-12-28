import React, { Component } from 'react';
import './App.css';
import { Navigation } from './Components/Navigation/';
import { Footer } from './Components/Footer/';
import axios from 'axios';

class App extends Component {
  state = { 
    user: null, 
    loading: true
  };
  
  componentDidMount(){
    axios.get('/user').then(({ data }) => {
      if(data.id){
        this.setState({ user: data, loading: false });
        console.log(data);
        console.log(this.state);
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Navigation user={this.state.user}/>
        <div className="container-fluid">
          <div className="display-4 text-center">
            Current Auctions
          </div>
          <header className="App-header">
            Placeholder for Auctions Flexbox
          </header>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
