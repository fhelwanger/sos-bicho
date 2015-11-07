import React, { Component, PropTypes } from 'react';
import '../styles/Button.scss';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string
  }

  handleOnClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <button
        className="button"
        type={this.props.type || 'button'}
        onClick={::this.handleOnClick}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button;
