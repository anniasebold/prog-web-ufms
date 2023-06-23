import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Digite seu nome",
      email: "teste@teste.com",
      senha: "Digite sua senha",
    };
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(event) {
    //alert("Clicou");
    //desconstruindo valores da variável
    const { nome, email, senha } = this.state;
    alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Novo Usuário</h1>
        <form onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input
            type="text"
            value={this.state.nome}
            onChange={(event) => this.setState({ nome: event.target.value })}
          ></input>
          <br />
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          ></input>
          <br />
          <label>Senha</label>
          <input
            type="password"
            value={this.state.senha}
            onChange={(event) => this.setState({ senha: event.target.value })}
          ></input>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;
