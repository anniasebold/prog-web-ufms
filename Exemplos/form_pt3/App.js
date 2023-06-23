import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "teste@teste.com",
      senha: "Digite sua senha",
      sexo: "Masculino",
    };
    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaSenha = this.trocaSenha.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }

  trocaEmail(event) {
    let valorDigitado = event.target.value;
    this.setState({ email: valorDigitado });
  }

  trocaSenha(event) {
    let valorSenha = event.target.value;
    this.setState({ senha: valorSenha });
  }

  trocaSexo(event) {
    let valorSexo = event.target.value;
    this.setState({ sexo: valorSexo });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Email:
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.trocaEmail}
        />
        <br />
        Senha:
        <input
          type="password"
          //type="text"
          name="senha"
          value={this.state.senha}
          onChange={this.trocaSenha}
        />
        <br />
        Sexo:
        <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option>Masculino</option>
          <option>Feminino</option>
        </select>
        <div>
          <h3>{this.state.email}</h3>
        </div>
      </div>
    );
  }
}

export default App;
