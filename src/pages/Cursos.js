import React from 'react';
import Header from '../components/Header';
import DataTable from '../Services/DataTable';
import ApiService from '../Services/ApiService';
import PopUp from '../Services/PopUp';

class Cursos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cursos: [],
      titulo: 'Cursos'
    }
  }

  componentDidMount() {

    ApiService.ListaCurso()
      .then(res => {
        if (res.message === 'success')
          this.setState({ cursos: [...this.state.cursos, ...res.data] });
      })
      .catch(err => PopUp.exibeMensagem('error', 'Não foi possível listar os cursos.'));
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h4>Cursos</h4>
          <DataTable dados={this.state.cursos} titulo={this.state.titulo} colunas={['curso']} />
        </div>
      </>
    );
  }
}

export default Cursos;