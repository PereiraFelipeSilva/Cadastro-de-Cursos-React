import React from 'react';

const TableHead = () => {

  return (
    <thead>
      <tr>
        <th>Instrutor</th>
        <th>Curso</th>
        <th>Valor</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {

  const linhas = props.cursos.map(linha => {

    return (
      <tr key={linha.id}>
        <td>{linha.instrutor}</td>
        <td>{linha.curso}</td>
        <td>{linha.valor}</td>
        <td>
          <button onClick={() => { props.removeCurso(linha.id) }} className="waves-effect waves-light blue lighten-1 btn">
            Remover
          </button>
        </td>
      </tr>
    );
  });

  return (
    <tbody>
      {linhas}
    </tbody>
  );
}

class Table extends React.Component {

  render() {

    const { cursos, removeCurso } = this.props;

    return (
      <table className="centered">
        <TableHead />
        <TableBody cursos={cursos} removeCurso={removeCurso} />
      </table>
    );
  }
}

export default Table;