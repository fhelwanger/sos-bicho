import React, { Component } from 'react';
import Header from '../components/Header';
import AnimaisList from './AnimaisList';

require('./App.css');

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <AnimaisList />
        </div>
      </div>
    );
  }
}

export default App;
