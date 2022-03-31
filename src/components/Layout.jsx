import React, { Component } from "react";
import data from "./data.json";
import Buttons from "./Buttons.jsx";
import Historial from "./Historial.jsx";

export default class Layout extends Component {
  state = { contador: 0, history: data[0], historial: [], ultima: "" };
  //Logica del click, solo almaceno la historia actual en estate, y de acuerdo al id de la opcion elegida, me muevo a la siguiente historia.(utilizando el contador y el id del boton)
  handleClick = (e) => {
    this.setState({
      contador: this.state.contador + 1,
      history: data.filter(
        (history) => history.id === this.state.contador + 2 + e.target.id.toLowerCase()
      )[0],
      historial: [...this.state.historial, e.target.id],
      ultima: e.target.id,
    });
  };
  //busco el fin del array de las historia cada vez que actualizo del componente. si llego, modifico los botones para mostrar el alert y recargar para volver a jugar.
  componentDidUpdate() {
    let fin = this.state.history.opciones.a.includes("FIN");
    if (fin) {
      let buttons = document.querySelectorAll(".botones");
      buttons.forEach((button) => {
        button.onclick = () => {
          alert("El juego ha terminado");
          window.location.reload();
        };
      });
    }
  }

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{this.state.history.historia}</h1>
        <Buttons opcion={this.state.history.opciones} click={this.handleClick} />
        <Historial historial={this.state.historial} ultima={this.state.ultima} />
      </div>
    );
  }
}
