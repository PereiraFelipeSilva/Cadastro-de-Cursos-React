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

const TableBody = () => {

  return (
    <tbody>
      <tr>
        <td>Flávio</td>
        <td>JavaScript</td>
        <td>125</td>
        <td><button>Remover</button></td>
      </tr>
      <tr>
        <td>Sérgio</td>
        <td>Performance</td>
        <td>75</td>
        <td><button>Remover</button></td>
      </tr>
      <tr>
        <td>Paulo</td>
        <td>React</td>
        <td>90</td>
        <td><button>Remover</button></td>
      </tr>
    </tbody>
  );
}

class Table extends React.Component {

  render() {
    return (
      <table>
        <TableHead />
        <TableBody />
      </table>
    );
  }
}

export default Table;