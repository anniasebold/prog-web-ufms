import React, { Component } from "react";
import "./estilo.css";

import biscoito from "./assets/biscoito.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    // Array com as frases do aleatórias
    this.frases = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso.",
      "A vida trará coisas boas se tiver paciência.",
      "Não compense na ira o que lhe falta na razão.",
      "Não há que ser forte. Há que ser flexível.",
      "A juventude não é uma época da vida, é um estado de espírito.",
      "Siga os bons e aprenda com eles",
      "Não importa o tamanho da montanha, ela não pode tapar o sol.",
      "O bom-senso vale mais do que muito conhecimento.",
      "Uma bela flor é incompleta sem as suas folhas.",
      "Amizade e Amor são coisas que se unem num piscar de olhos.",
      "A paciência na adversidade é sinal de um coração sensível.",
      "Quem olha para fora sonha; quem olha para dentro acorda.",
      "Todas as coisas são difíceis antes de se tornarem fáceis.",
      "O conhecimento é a única virtude e a ignorância é o único vício.",
      "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
      "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
      "Nós somos o que pensamos.",
      "Se você se sente só é porque construiu muros ao invés de pontes.",
    ];
  }

  //Função para quando clicar no botão "Abrir Biscoito" gerar uma frase para o usuário pegando da lista criada acima.
  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={biscoito} className="img" />
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
