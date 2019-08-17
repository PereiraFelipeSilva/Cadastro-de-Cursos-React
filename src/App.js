import React from 'react';
import './styles/App.css';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import Table from './components/Table';

class App extends React.Component {

  state = {

    autores: [
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

  render() {
    return (
      <>
        <Greeting />
        <Clock />
        <Table autores={this.state.autores} />
      </>
    );
  }
}

export default App;