import React, { Component, PropTypes } from 'react';
import TextBox from '../Components/TextBox';
import Button from '../Components/Button';
import { connect } from 'react-redux';

require('./Login.css');

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleCloseClick(e) {
    e.preventDefault();
    this.props.onCloseClick();
  }

  handleLoginClick() {
    alert('Não implementado');
  }

  render() {
    return (
      <div className="login">
        <h2>
          Login
          <a href="#" onClick={this.handleCloseClick}>
            <i className="fa fa-times"></i>
          </a>
        </h2>
        <TextBox label="Usuário" />
        <TextBox label="Senha" type="password" />
        <Button onClick={this.handleLoginClick}>Login</Button>
      </div>
    );
  }
}

Login.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}

export default connect()(Login);
