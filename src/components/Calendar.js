import React,{useState} from 'react'
import '../styles/Calendar.css'
//Separo la lógica del formateo de las fechas tanto para anular la seleccion de fechas posteriores al dia actual
//como para el reformateo de la fecha a mostrar.
import {maxDateFormater,displayDateFormater} from '../DateFormater'

export default function Calendar(props) {

    let{dateDisplay,maxDate}=props
    //Declaramos la fecha actual, un estado con la fecha actual como seleccion inicial y la maxima fecha que se puede seleccionar en el calendario (la actual)
    // let date = new Date(Date.now())
    // let maxDate=maxDateFormater(date)
    // let [dateDisplay,setDateDisplay]=useState(displayDateFormater(date));
    
    //Actualizamos el estado cuando una nueva fecha es seleccionada.
    // let handleDate=(e)=>{
    //     console.log('there', e.currentTarget.value)
    //     setDateDisplay(displayDateFormater(e.currentTarget.value))
    // }

    //creo un componente sencillo que me da la fecha en el formato adecuado.
    let Displayable=()=>{
        const{dayDisplayTxt,monthDisplay,selecetdYear,dayDisplayNumb}=dateDisplay
        return(
            <div className="dateContainer">
                <div style={{fontWeight:'700'}}>{`${dayDisplayTxt} ${dayDisplayNumb},`}</div>
                <div>{`${monthDisplay},${selecetdYear}`}</div>
            </div>
        )
    }

    //Como HTML no permite cambiar los formatos del input type date he posicionado debajo un elemento con
    //el formato adecuado y cambiado la opacidad del elemento input a 0.
    return (
        <>
            <div className="inputContainer">
                <div className="iconCalendar"></div>
                <span className="coverInput"><Displayable/>
                </span>
                <input type="date" max={maxDate} onChange={(e)=>props.handleDate(e)} className="dateInput"/>
            </div>
        </>
    )
}
