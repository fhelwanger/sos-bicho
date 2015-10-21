import React, { Component } from 'react';
import { connect } from 'react-redux';

require('./MeusAnimais.css');

class MeusAnimais extends Component {
  render() {
    return (
      <div className="meus-animais">
        <h2>Meus Animais</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tom</td>
            </tr>
            <tr>
              <td>Pluto</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect()(MeusAnimais);
