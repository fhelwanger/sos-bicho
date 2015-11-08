import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import '../styles/Select.scss';

class Select extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    field: PropTypes.object.isRequired,
    dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
    displayProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired
  }

  render() {
    const {
      label,
      autoFocus,
      field,
      dataSource
    } = this.props;

    return (
      <div className="form-row">
        <label htmlFor={field.name}>{label}</label>
        <select
          id={field.name}
          autoFocus={autoFocus}
          className={classNames({
            'invalid': field.touched && field.invalid,
            'active': field.active
          })}
          {...field}
        >
          <option></option>
          {dataSource.map(::this.renderOption)}
        </select>
        {field.touched && field.error && <span className="error-message">{field.error}</span>}
      </div>
    );
  }

  renderOption(option) {
    const { displayProperty, valueProperty } = this.props;

    return (
      <option
        key={option[valueProperty]}
        value={option[valueProperty]}
      >
        {option[displayProperty]}
      </option>
    );
  }
}

export default Select;
