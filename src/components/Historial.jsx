import React, { Component } from 'react'

export default class Historial extends Component {

    render() {
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.ultima}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.historial.map((hs,index)=><li key={index.toString()}>{hs}</li>)}</ul>
            </div>
        )
    }
}