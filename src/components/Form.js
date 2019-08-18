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
        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="instrutor"></label>
            <input
              placeholder="Instrutor"
              id="instrutor"
              type="text"
              name="instrutor"
              value={instrutor}
              onChange={this.handleInputChange}
              autoFocus
            />
          </div>
          <div className="input-field col s4">
            <label htmlFor="curso"></label>
            <input
              placeholder="Curso"
              id="curso"
              type="text"
              name="curso"
              value={curso}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-field col s4">
            <label htmlFor="valor"></label>
            <input
              placeholder="Valor"
              id="valor"
              type="text"
              name="valor"
              value={valor}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="waves-effect waves-light blue lighten-1 btn">
          Cadastrar novo curso
        </button>
      </form>
    );
  }
}

export default Form;