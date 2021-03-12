import React from 'react'
import '../styles/Indicator.css'

//Un componente sencillo, simplemente para mostrar parte de los datos.
export default function IndicatorA(props) {

let {data}=props

    return (
        <div className="indicatorContainerA">
            <div className="iconIndicatorA"/>
            <p className="indicatorText">T.R.R</p>
            <div className="dataContainerA">{data['TRR']}</div>
        </div>
    )
}
