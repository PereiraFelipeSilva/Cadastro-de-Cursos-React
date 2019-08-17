import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.stateInicial = {
      instrutor: '',
      curso: '',
      valor: ''
    }
    this.state = this.stateInicial;
  }

  handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {

    event.preventDefault();
    this.props.adicionaCurso(this.state);
    this.setState(this.stateInicial);
    document.getElementById('instrutor').focus();
  }

  render() {

    const { instrutor, curso, valor } = this.state;

    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="instrutor">Instrutor</label>
        <input
          id="instrutor"
          type="text"
          name="instrutor"
          value={instrutor}
          onChange={this.handleInputChange}
          autoFocus
        />
        <label htmlFor="curso">Curso</label>
        <input
          id="curso"
          type="text"
          name="curso"
          value={curso}
          onChange={this.handleInputChange}
        />
        <label htmlFor="valor">Valor</label>
        <input
          id="valor"
          type="text"
          name="valor"
          value={valor}
          onChange={this.handleInputChange}
        />
        <button type="submit">Cadastrar novo curso</button>
      </form>
    );
  }
}

export default Form;