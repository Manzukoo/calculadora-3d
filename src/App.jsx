import './App.css';
import Boton from './components/Boton.jsx';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState(0)
  const [calculado, setCalculado]= useState(true)

  const agregarInput = val => {
    if(isNaN(val) && isNaN(input.toString().slice(-1))) {
      setInput(input.toString().slice(0,-1)+ val)
    }else {
      if(!calculado || (calculado && isNaN(val))){ 
        setInput(input + val)
      }else setInput(val)
    }
    setCalculado(false)
  }

  const calcularResultado = () => {
    setInput(evaluate(input))
    setCalculado(true)
  }

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton
            evento={agregarInput}>1</Boton>
          <Boton
            evento={agregarInput}>2</Boton>
          <Boton
            evento={agregarInput}>3</Boton>
          <Boton
            evento={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton
            evento={agregarInput}>4</Boton>
          <Boton
            evento={agregarInput}>5</Boton>
          <Boton
            evento={agregarInput}>6</Boton>
          <Boton
            evento={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton
            evento={agregarInput}>7</Boton>
          <Boton
            evento={agregarInput}>8</Boton>
          <Boton
            evento={agregarInput}>9</Boton>
          <Boton
            evento={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton
            evento={calcularResultado}>=</Boton>
          <Boton
            evento={agregarInput}>0</Boton>
          <Boton
            evento={agregarInput}>.</Boton>
          <Boton
            evento={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear
            evento={() => {setInput(0); setCalculado(true)}}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
