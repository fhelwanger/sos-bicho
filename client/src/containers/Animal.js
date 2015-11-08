import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validate from '../modules/validate';
import { carregarLista as carregarEspecies } from '../actions/especies';
import { criarAnimal } from '../actions/animais';
import TextBox from '../components/TextBox';
import Select from '../components/Select';
import Button from '../components/Button';
import '../styles/Animal.scss';

@connect(
  state => ({
    especies: state.especies.lista
  }),
  { carregarEspecies, criarAnimal }
)
@reduxForm({
  form: 'animal',
  fields: ['nome', 'especie', 'raca', 'porte', 'idade'],
  validate: values => validate(values, {
    nome: { presence: true },
    especie: { presence: true },
    porte: { presence: true },
    idade: { numericality: { onlyInteger: true, greaterThan: 0 } }
  })
})
class Animal extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.carregarEspecies();
  }

  handleSubmit(values, dispatch) {
    return this.props.criarAnimal(values);
  }

  render() {
    const {
      fields,
      especies,
      handleSubmit
    } = this.props;

    const portes = [
      { id: 1, nome: 'Pequeno' },
      { id: 2, nome: 'Médio' },
      { id: 3, nome: 'Grande' }
    ];

    return (
      <form className="animal" onSubmit={handleSubmit(::this.handleSubmit)}>
        <h2>Dados do Animal</h2>
        <TextBox
          label="Nome"
          field={fields.nome}
          autoFocus
        />
        <Select
          label="Espécie"
          field={fields.especie}
          dataSource={especies}
          displayProperty="nome"
          valueProperty="id"
        />
        <TextBox
          label="Raça"
          field={fields.raca}
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
        <Button type="submit">Salvar</Button>
      </form>
    );
  }
}

export default Animal;
