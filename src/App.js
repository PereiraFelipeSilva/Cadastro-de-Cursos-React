import React from 'react';
import './styles/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';
import PopUp from './Services/PopUp';

class App extends React.Component {

  state = {
    cursos: [
      {
        instrutor: 'Max',
        curso: 'Java',
        valor: 200
      },
      {
        instrutor: 'Rodrigo',
        curso: 'Design',
        valor: 75
      },
      {
        instrutor: 'Roberta',
        curso: 'C# e C++',
        valor: 250
      },
      {
        instrutor: 'Luisa',
        curso: 'Angular',
        valor: 200
      },
      {
        instrutor: 'Diego',
        curso: 'Node',
        valor: 100
      }
    ]
  }

  adicionaCurso = curso => {

    this.setState({
      cursos: [...this.state.cursos, curso]
    });

    PopUp.exibeMensagem('success', "Curso adicionado com sucesso!");
  }

  /* ↑ O spread operator (...) pega todas as informações do state atual (cursos) e inclui o novo curso passado como segundo parâmetro. Esse segundo parâmetro é passado no submit do formulário com as informações dos inputs */

  removeCurso = index => {

    const { cursos } = this.state;

    this.setState({
      cursos: cursos.filter((curso, posAtual) => posAtual !== index)
    });

    PopUp.exibeMensagem('removido', 'Curso removido com sucesso.');
  }

  /* ↑ "index" é a posição da tr clicada no array original, "curso" é cada item do array original do state, e "posAtual" é a posição de cada item no array original do state. O método filter retorna, no final, um novo array apenas com os elementos cuja posição inicial era diferente da posição do botão que foi clicado e, assim, o item some da tabela */

  render() {
    return (
      <>
        <Header />
        <Table cursos={this.state.cursos} removeCurso={this.removeCurso} />
        <Form adicionaCurso={this.adicionaCurso} />
      </>
    );
  }
}

export default App;