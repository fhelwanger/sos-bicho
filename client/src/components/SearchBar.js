import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import validate from '../modules/validate';
import { portes } from '../modules/portes';
import TextBox from '../components/TextBox';
import Select from '../components/Select';
import Button from '../components/Button';
import '../styles/SearchBar.scss';

@reduxForm({
  form: 'search',
  fields: ['especie', 'porte', 'idade'],
  validate: values => validate(values, {
    idade: { numericality: { onlyInteger: true, greaterThan: 0 } }
  })
})
class SearchBar extends Component {
  static propTypes = {
    especies: PropTypes.arrayOf(PropTypes.object).isRequired,
    visible: PropTypes.bool.isRequired,
    onVisibleClick: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  handleVisibleClick() {
    this.props.onVisibleClick();
  }

  render() {
    return (
      this.props.visible ? this.renderForm() : (
        <Button onClick={::this.handleVisibleClick}>Filtros</Button>
      )
    );
  }

  renderForm() {
    const {
      fields,
      especies,
      handleSubmit
    } = this.props;

    return (
      <form className="search" onSubmit={handleSubmit}>
        <Select
          label="Espécie"
          field={fields.especie}
          dataSource={especies}
          displayProperty="nome"
          valueProperty="id"
        />
        <Select
          label="Porte"
          field={fields.porte}
          dataSource={portes}
          displayProperty="nome"
          valueProperty="id"
        />
        <TextBox
          label="Idade"
          field={fields.idade}
        />
        <Button type="submit">Buscar</Button>
      </form>
    );
  }
}

export default SearchBar;
