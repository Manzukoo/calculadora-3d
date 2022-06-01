import React from "react";
import './Boton.css'
function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }
  return (
    <div onClick={() => props.evento(props.children)} className={`btn-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
      <div className="btn">
        {props.children}
      </div>
    </div>
  )
}

export default Boton