import React from 'react'
import '../styles/Indicator.css'

//Otro componente sencillo, simplemente para mostrar otra parte de los datos.
export default function IndicatorB(props) {

let {data}=props

    return (
        <div className="indicatorContainerB">
            <div className="iconIndicatorB"/>
            <p className="indicatorText">Recovered</p>
            <div className="indicatorData">
                <div className="dataContainerB">{data['RECOVERED']}</div>
                <div className="kgSymbol">Kg.</div>
            </div>
        </div>
    )
}