import React, { Component } from "react";

export default class Buttons extends Component {

  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button className="botones" id="A" onClick={this.props.click}>A</button>
          <h2>{this.props.opcion.a}</h2>
        </div>
        <div className="opcion">
          <button className="botones" id="B" onClick={this.props.click}>B</button>
          <h2>{this.props.opcion.b}</h2>
        </div>
      </div>
    );
  }
}
