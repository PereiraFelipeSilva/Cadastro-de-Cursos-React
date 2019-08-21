import React from 'react';
import Header from '../components/Header';
import DataTable from '../Services/DataTable';

class Instrutores extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
      ],
      titulo: 'Instrutores'
    }
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