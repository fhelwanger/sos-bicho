import React, { Component, PropTypes } from 'react';

require('./Header.css')

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.props.onLoginClick();
  }

  render() {
    return (
      <header>
        <h1><i className="fa fa-paw"></i> S.O.S Bicho</h1>
        <a href="#" title="Login" onClick={this.handleLoginClick}>
          <i className="fa fa-sign-in"></i>
        </a>
      </header>
    );
  }
}

Header.propTypes = {
  onLoginClick: PropTypes.func.isRequired
}

export default Header;
