import React, { Component, PropTypes } from 'react';

class Table extends Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const columns = this.props.columns;
    const data = this.props.data;

    return (
      <table>
        <thead>
          <tr>
            {columns.map(c => <th key={c.key}>{c.header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(::this.renderRow)}
        </tbody>
      </table>
    );
  }

  renderRow(row) {
    const columns = this.props.columns;

    return (
      <tr key={row.id}>
        {columns.map(c => <td key={c.key}>{row[c.key]}</td>)}
      </tr>
    );
  }
}

export default Table;
