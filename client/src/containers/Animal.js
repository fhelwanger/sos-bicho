import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validate from '../modules/validate';
import { carregarLista as carregarEspecies } from '../actions/especies';
import { criarAnimal, limparFotos, adicionarFoto } from '../actions/animais';
import TextBox from '../components/TextBox';
import Select from '../components/Select';
import Button from '../components/Button';
import FotoList from '../components/FotoList';
import '../styles/Animal.scss';

@connect(
  state => ({
    especies: state.especies.lista,
    fotos: state.animais.fotos
  }),
  { carregarEspecies, criarAnimal, limparFotos, adicionarFoto }
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
    submitting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.carregarEspecies();
    this.props.limparFotos();
  }

  handleSubmit(values, dispatch) {
    const data = Object.assign({}, values, {
      fotos: this.props.fotos.map(foto => foto.replace(/^data:image\/\w+\;base64\,/, ''))
    });

    return this.props.criarAnimal(data);
  }

  handleAddFoto(foto) {
    this.props.adicionarFoto(foto);
  }

  render() {
    const {
      fields,
      especies,
      submitting,
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
        <FotoList
          fotos={this.props.fotos}
          onAddFoto={::this.handleAddFoto}
        />
        <Button type="submit" submitting={submitting}>Salvar</Button>
      </form>
    );
  }
}

export default Animal;
