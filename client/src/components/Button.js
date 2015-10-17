import React, { Component, PropTypes } from 'react';

require('./Button.css');

class Button extends Component {
  render() {
    return (
      <button className="button" type="button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button;
