import React, { Component, PropTypes } from 'react';
import Button from './Button';

class Table extends Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onEditClick: PropTypes.func.isRequired,
    onAdotadoClick: PropTypes.func.isRequired,
    onAdotadoClick: PropTypes.func.isRequired
  }

  handleEditClick(animalId) {
    this.props.onEditClick(animalId);
  }

  handleAdotadoClick(animalId) {
    this.props.onAdotadoClick(animalId);
  }

  handleDisponivelClick(animalId) {
    this.props.onDisponivelClick(animalId);
  }

  render() {
    const columns = this.props.columns;
    const data = this.props.data;

    return (
      <table>
        <thead>
          <tr>
            {columns.map(c => <th key={c.key}>{c.header}</th>)}
            <th></th>
            <th></th>
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
      <tr key={row.id} className={row.adotado ? 'adotado' : null}>
        {columns.map(c => <td key={c.key}>{row[c.key]}</td>)}
        <td>
          <Button onClick={this.handleEditClick.bind(this, row.id)}>
            <i className="fa fa-pencil-square-o"></i>
          </Button>
        </td>
        <td>
          {
            row.adotado
            ?
            <Button onClick={this.handleDisponivelClick.bind(this, row.id)}>
              Disponível
            </Button>
            :
            <Button onClick={this.handleAdotadoClick.bind(this, row.id)}>
              Adotado
            </Button>
          }
        </td>
      </tr>
    );
  }
}

export default Table;
