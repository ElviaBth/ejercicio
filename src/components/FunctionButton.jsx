import React, {useState} from 'react'
import '../styles/FunctionButton.css'

function FunctionButton(props) {

  const [number, setNumber] = useState(0);

  const counter = () => {
    setNumber(number + 1)
  }



  return (
    <div>
        <button className = {`bt ${props.class}`} onClick={counter}>{props.text} {number} {number === 5 ? 'Llegaste a 5' : ''}</button>
    </div>
  )
}

export default FunctionButton
FunctionButton.defaultProps = {
    text: 'Botón Funcional',
    class: 'frameF'
}