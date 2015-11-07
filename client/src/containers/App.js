import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setLoginVisible } from '../actions/app';
import { fazerLogout } from '../actions/login';
import Header from '../components/Header';
import Login from './Login';
import '../styles/App.scss';

@connect(
  state => ({
    loginVisible: state.app.loginVisible,
    usuarioLogado: state.app.usuarioLogado
  }),
  { setLoginVisible, fazerLogout }
)
class App extends Component {
  static propTypes = {
    loginVisible: PropTypes.bool.isRequired
  }

  handleLoginClick() {
    this.props.setLoginVisible(true);
  }

  handleLogoutClick() {
    this.props.fazerLogout();
  }

  render() {
    return (
      <div>
        <Header
          onLoginClick={::this.handleLoginClick}
          onLogoutClick={::this.handleLogoutClick}
          usuarioLogado={this.props.usuarioLogado}
        />
        {this.props.loginVisible && <Login />}
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
