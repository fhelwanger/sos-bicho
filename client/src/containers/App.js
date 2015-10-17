import React, { Component } from 'react';
import Header from '../components/Header';
import Login from './Login';
import AnimaisList from './AnimaisList';
import { connect } from 'react-redux';
import { fazerLogout } from '../actions/login';

require('./App.css');

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLoginOpen = this.handleLoginOpen.bind(this);
    this.handleLoginClose = this.handleLoginClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

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

  handleLogout() {
    this.setState({
      loginVisible: false
    });

    this.props.dispatch(fazerLogout());
  }

  render() {
    return (
      <div>
        <Header
          usuario={this.props.usuario}
          onLoginClick={this.handleLoginOpen}
          onLogoutClick={this.handleLogout}
        />
        {
          this.state.loginVisible && !this.props.usuario
          ? <Login onCloseClick={this.handleLoginClose} />
          : null
        }
        <div className="container">
          <AnimaisList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    usuario: state.login.usuario
  };
}

export default connect(mapStateToProps)(App);
