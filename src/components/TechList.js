import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {

  state = {
    newTech: '',
    techs: []
  };

  // Executado assim que o componente aparece e tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alterações nas propriedades ou estado de um componente
  componentDidUpdate(_, prevState) {
    if (prevState.techs != this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }
  
  // Este componente é executado quando o componente deixa de existir.
  handleInputChange = e => {
    this.setState({ newTech: e.target.value }); /* Repassamos para a função setState um objeto */
  } 
                                              /* e alteramos o valor de newTech para e.target.value */
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)} 
            />
          ))}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
          />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;