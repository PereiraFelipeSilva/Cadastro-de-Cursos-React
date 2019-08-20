import React from 'react';
import FormValidator from '../Services/FormValidator';

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.validador = new FormValidator([
      {
        campo: 'instrutor',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Digite o nome do instrutor'
      },
      {
        campo: 'curso',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Digite o nome do curso'
      },
      {
        campo: 'valor',
        metodo: 'isEmpty',
        args: [{ min: 0, max: 9999 }],
        validoQuando: false,
        mensagem: 'Digite o valor do curso'
      },
    ]);

    this.stateInicial = {
      instrutor: '',
      curso: '',
      valor: '',
      validacao: this.validador.valido()
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

    const validacao = this.validador.valida(this.state);

    if (validacao.isValid) {
      this.props.adicionaCurso(this.state);
      this.setState(this.stateInicial);
      document.getElementById('instrutor').focus();
    } else {
      const { instrutor, curso, valor } = validacao;
      const campos = [instrutor, curso, valor];
      const camposInvalidos = campos.filter(elemento => elemento.isInvalid);

      camposInvalidos.forEach(console.log);
    }
  }

  render() {

    const { instrutor, curso, valor } = this.state;

    return (
      <form onSubmit={this.handleSubmit} >
        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="instrutor"></label>
            <input
              className="validate"

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
              className="validate"

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
              className="validate"

              placeholder="Valor"
              id="valor"
              type="number"
              min="0" max="9999"
              step=".01"
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