import React, { Component, PropTypes } from 'react';

require('./TextBox.css');

class TextBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      errorMessage: ''
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      errorMessage: newProps.errorMessage
    });
  }

  handleChange() {
    const val = this.refs.input.value;
    let errorMessage = '';

    if (this.props.required && !val) {
      errorMessage = 'Campo obrigatório.'
    }

    this.setState({
      errorMessage
    });

    if (this.props.onChange) {
      this.props.onChange(val, this.props.name);
    }
  }

  render() {
    return (
      <label className="textbox">
        {this.props.label}
        <input
          ref="input"
          name={this.props.name}
          type={this.props.type || 'text'}
          className={this.state.errorMessage ? 'error' : ''}
          onChange={this.handleChange}
        />
        <span className="error-message">
          {this.state.errorMessage}
        </span>
      </label>
    )
  }
}

TextBox.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func
}

export default TextBox;
