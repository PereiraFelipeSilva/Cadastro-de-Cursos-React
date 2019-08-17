import React from 'react';
import './styles/App.css';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import Table from './components/Table';

function App() {

  const autores = [
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
      curso: 'Angular 2',
      valor: '200'
    }
  ];

  return (
    <>
      <Greeting />
      <Clock />
      <Table />
    </>
  );
}

export default App;