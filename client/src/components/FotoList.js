import React, { Component, PropTypes } from 'react';
import Button from './Button';
import '../styles/FotoList.scss';

class FotoList extends Component {
  static propTypes = {
    fotos: PropTypes.arrayOf(PropTypes.string).isRequired,
    onAddFoto: PropTypes.func.isRequired
  }

  handleAddClick() {
    this.refs.file.click();
  }

  handleAddFoto(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.props.onAddFoto(reader.result);
      this.refs.file.value = '';
    };

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="foto-list">
        <Button onClick={::this.handleAddClick}>Adicionar Foto</Button>
        <input
          type="file"
          ref="file"
          accept="image/*"
          onChange={::this.handleAddFoto}
          style={{ display: 'none' }}
        />
        <div>
          {this.props.fotos.map(this.renderImg)}
        </div>
      </div>
    );
  }

  renderImg(foto, index) {
    return (
      <img key={index} src={foto} />
    );
  }
}

export default FotoList;
