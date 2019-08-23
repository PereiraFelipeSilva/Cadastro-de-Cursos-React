import React from 'react';
import './styles/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';
import PopUp from './Services/PopUp';
import ApiService from './Services/ApiService';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cursos: []
    };
  }

  componentDidMount() {
    ApiService.ListaCursos()
      .then(res => {
        if (res.message === 'success')
          this.setState({ cursos: [...this.state.cursos, ...res.data] });
      })
      .catch(err => PopUp.exibeMensagem('error', 'Falha ao listar os cursos.'));
  }

  adicionaCurso = curso => {

    ApiService.CriarCurso(JSON.stringify(curso))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ cursos: [...this.state.cursos, res.data] });
          PopUp.exibeMensagem('success', 'Curso adicionado com sucesso');
        }
      })
      .catch(err => PopUp.exibeMensagem('error', 'Não foi possível adicionar o curso.'));
  }

  /* ↑ O spread operator (...) pega todas as informações do state atual (cursos) e inclui o novo curso passado como segundo parâmetro. Esse segundo parâmetro é passado no submit do formulário com as informações dos inputs */

  removeCurso = id => {

    const { cursos } = this.state;

    const cursosAtualizado = cursos.filter(curso => curso.id !== id);

    ApiService.DeletarCurso(id)
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ cursos: [...cursosAtualizado] });
          PopUp.exibeMensagem('removido', 'Curso removido com sucesso.');
        }
      })
      .catch(err => PopUp.exibeMensagem('error', 'Não foi possível remover o curso selecionado.'));
  }

  /* ↑ "curso" é cada item do array original do state. O método filter retorna, no final, um novo array apenas com os elementos cujo id é diferenete do elemento que foi clicado e, assim, o item some da tabela */

  render() {

    return (
      <>
        <Header />
        <h5>Cursos Disponíveis</h5>
        <Table cursos={this.state.cursos} removeCurso={this.removeCurso} />
        <Form adicionaCurso={this.adicionaCurso} />
      </>
    );
  }
}

export default App;