import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
        <div className="toolbar">
          <span className="usuario">
            {this.props.usuario.nome}
          </span>
          <Link to="/meus-animais">
            <i className="fa fa-paw"></i>Meus Animais
          </Link>
          <a href="#" onClick={this.handleLogoutClick}>
            <i className="fa fa-sign-out"></i>Sair
          </a>
        </div>
      );
    } else {
      return (
        <div className="toolbar">
          <a href="#" onClick={this.handleLoginClick}>
            <i className="fa fa-sign-in"></i>Entrar
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
