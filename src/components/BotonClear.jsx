import React from "react";
import './BotonClear.css'

const BotonClear = ({ children, evento }) => (
    <div onClick={evento} className="btn-contenedor clear">
        <div className="btn">
            {children}
        </div>
    </div>
)

export default BotonClear