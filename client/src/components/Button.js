import React, { Component, PropTypes } from 'react';
import '../styles/Button.scss';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    submitting: PropTypes.bool,
    type: PropTypes.string
  }

  handleOnClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div className="button">
        <button
          type={this.props.type || 'button'}
          onClick={::this.handleOnClick}
        >
          {this.props.children}
        </button>
        {this.props.submitting && <i className="fa fa-spinner fa-spin"></i>}
      </div>
    )
  }
}

export default Button;
