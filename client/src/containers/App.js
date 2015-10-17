import React, { Component } from 'react';
import Header from '../components/Header';
import Login from './Login';
import AnimaisList from './AnimaisList';

require('./App.css');

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLoginOpen = this.handleLoginOpen.bind(this);
    this.handleLoginClose = this.handleLoginClose.bind(this);

    this.state = {
      loginVisible: false
    };
  }

  handleLoginOpen() {
    this.setState({
      loginVisible: true
    });
  }

  handleLoginClose() {
    this.setState({
      loginVisible: false
    });
  }

  render() {
    return (
      <div>
        <Header onLoginClick={this.handleLoginOpen} />
        {this.state.loginVisible ? <Login onCloseClick={this.handleLoginClose} /> : null}
        <div className="container">
          <AnimaisList />
        </div>
      </div>
    );
  }
}

export default App;
