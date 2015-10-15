import React, { Component } from 'react';

require('./Header.css')

const Header = props => (
  <header>
    <h1><i className="fa fa-paw"></i> S.O.S Bicho</h1>
    <i id="login" title="Login" className="fa fa-sign-in"></i>
  </header>
);

export default Header;
