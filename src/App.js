import React from 'react';
import './styles/App.css';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import Table from './components/Table';
import Form from './components/Form';

class App extends React.Component {

  state = {
    cursos: [
      {
        instrutor: 'Max',
        curso: 'Java',
        valor: '200'
      },
      {
        instrutor: 'Rodrigo',
        curso: 'Design',
        valor: '75'
      },
      {
        instrutor: 'Roberta',
        curso: 'C# e C++',
        valor: '250'
      },
      {
        instrutor: 'Luisa',
        curso: 'Angular',
        valor: '200'
      },
      {
        instrutor: 'Diego',
        curso: 'Node',
        valor: '100'
      }
    ]
  }

  removeCurso = index => {

    const { cursos } = this.state;

    this.setState({
      cursos: cursos.filter((curso, posAtual) => {
        console.log(curso, posAtual, index)
        return posAtual !== index;
      })
    });
  }

  /* ↑ "index" é a posição da tr clicada no array original, "curso" é cada item do array original do state, e "posAtual" é a posição de cada item no array original do state. O método filter retorna, no final, um novo array apenas com os elementos cuja posição inicial era diferente da posição do botão que foi clicado e, assim, o item some da tabela */

  render() {
    return (
      <>
        <Greeting />
        <Clock />
        <Table cursos={this.state.cursos} removeCurso={this.removeCurso} />
        <Form />
      </>
    );
  }
}

export default App;