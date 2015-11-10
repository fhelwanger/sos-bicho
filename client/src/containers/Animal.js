import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validate from '../modules/validate';
import { portes } from '../modules/portes';
import { carregarLista as carregarEspecies } from '../actions/especies';
import {
  carregarAnimal,
  criarAnimal,
  salvarAnimal,
  limparFotos,
  adicionarFoto
} from '../actions/animais';
import TextBox from '../components/TextBox';
import Select from '../components/Select';
import Button from '../components/Button';
import FotoList from '../components/FotoList';
import '../styles/Animal.scss';

@connect(
  state => ({
    especies: state.especies.lista,
    fotos: state.animais.fotos,
    interessados: state.animais.interessados
  }),
  {
    carregarEspecies,
    carregarAnimal,
    criarAnimal,
    salvarAnimal,
    limparFotos,
    adicionarFoto
  }
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

    if (this.props.params.id) {
      this.props.carregarAnimal(this.props.params.id);
    }
  }

  handleSubmit(values, dispatch) {
    const data = Object.assign({}, values, {
      fotos: this.props.fotos.map(foto => foto.replace(/^data:image\/\w+\;base64\,/, ''))
    });

    if (this.props.params.id) {
      return this.props.salvarAnimal(this.props.params.id, data);
    } else {
      return this.props.criarAnimal(data);
    }
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
        {
          this.props.params.id &&
          this.props.interessados.length > 0 &&
          this.renderInteressados()
        }
      </form>
    );
  }

  renderInteressados() {
    return (
      <div className="interessados">
        <h3>Interessados</h3>
        <ul>
          {this.props.interessados.map(x => <li>{x}</li>)}
        </ul>
      </div>
    );
  }
}

export default Animal;
