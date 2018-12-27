import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
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
        <div className="container">
          <header className="App-header">
            
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        
      </div>
    );
  }
}

export default App;
