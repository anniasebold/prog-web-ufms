import React, { Component } from "react";
import "./style.css";

// Importando a imagem do cronometro
import cronometro from "./assets/cronometro.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "INICIAR",
    };
    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  // Utilize o método setInterval para executar o cronômetro
  iniciar() {
    let state = this.state;

    if (this.timer !== null) {
      // TO DO
      state.botao = "INICIAR";
    } else {
      //TO DO
      state.botao = "PAUSAR";
    }

    this.setState(state);
  }

  limpar() {
    // TO DO
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <h1>Cronômetro</h1>
        <img src={cronometro} className="img" alt="Imagem Cronometro" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.iniciar}>
            {this.state.botao}
          </a>
          <a className="botao" onClick={this.limpar}>
            LIMPAR
          </a>
        </div>
      </div>
    );
  }
}

export default App;
