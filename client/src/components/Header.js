import React, { Component, PropTypes } from 'react';

require('./Header.css')

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.props.onLoginClick();
  }

  handleLogoutClick(e) {
    e.preventDefault();
    this.props.onLogoutClick();
  }

  render() {
    return (
      <header>
        <h1><i className="fa fa-paw"></i> S.O.S Bicho</h1>
        {this.renderToolbar()}
      </header>
    );
  }

  renderToolbar() {
    if (this.props.usuario) {
      return (
        <div>
          <span className="usuario">
            {this.props.usuario.nome}
          </span>
          <a href="#" title="Logout" onClick={this.handleLogoutClick}>
            <i className="fa fa-sign-out"></i>
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <a href="#" title="Login" onClick={this.handleLoginClick}>
            <i className="fa fa-sign-in"></i>
          </a>
        </div>
      );
    }
  }
}

Header.propTypes = {
  usuario: PropTypes.object,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired
}

export default Header;
