import React from 'react';
import Header from '../components/Header';
import DataTable from '../Services/DataTable';
import ApiService from '../Services/ApiService';

class Instrutores extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cursos: [],
      titulo: 'Instrutores'
    }
  }

  componentDidMount() {

    ApiService.ListaInstrutor()
      .then(res => {
        this.setState({
          cursos: [...this.state.cursos, ...res.data]
        });
      });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h4>Instrutores</h4>
          <DataTable dados={this.state.cursos} titulo={this.state.titulo} colunas={['instrutor']} />
        </div>
      </>
    );
  }
}

export default Instrutores;