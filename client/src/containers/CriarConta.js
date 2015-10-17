import React, { Component } from 'react';
import { connect } from 'react-redux';

class CriarConta extends Component {
  render() {
    return <h1>CriarConta</h1>;
  }
}

export default connect()(CriarConta);
