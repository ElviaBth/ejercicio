import React, { Component } from 'react'
import '../styles/Button.css';

export class Button extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number : 0
    }
  };

  counter = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
        <>
          <button className={`bt ${this.props.class}`} onClick={this.counter}>{this.props.text} {this.state.number} {this.state.number === 5 ? 'Llegaste a 5' : ''}</button>
        </>
    )
  }
}

export default Button
Button.defaultProps = {
    text: 'Mi boton',
    class: 'solid'
}