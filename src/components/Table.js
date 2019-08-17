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

  const linhas = props.autores.map((linha, index) => {

    return(
      <tr key={index}>
        <td>{linha.instrutor}</td>
        <td>{linha.curso}</td>
        <td>{linha.valor}</td>
        <td><button>Remover</button></td>
      </tr>
    );
  });

  return(
    <tbody>
      {linhas}
    </tbody>
  );
}

class Table extends React.Component {

  render() {

    const {autores} = this.props;

    return (
      <table>
        <TableHead />
        <TableBody autores={autores} />
      </table>
    );
  }
}

export default Table;