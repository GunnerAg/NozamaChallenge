import React from 'react'
import '../styles/Calendar.css'

//El componente Calendario.
export default function Calendar(props) {

    //Desestructuro los props para no usar pros.x todo el rato.
    let{dateDisplay,maxDate}=props

    //Para no hacer mas complejo el return principal de calendar, y ya que esto solo da formato y estilo al texto que se muestra en el 
    //selector del calendario, decido seprarlo en un pseudocomponente, ya que es demasiado sencillo y poco reusable como para ser
    //un componente separado.
    let Displayable=()=>{
        //desestructuro la el objeto con los datos que voy a usar.
        const{dayDisplayTxt,monthDisplay,selecetdYear,dayDisplayNumb}=dateDisplay
        return(
            <div className="dateContainer">
                <div style={{fontWeight:'700'}}>{`${dayDisplayTxt} ${dayDisplayNumb},`}</div>
                <div>{`${monthDisplay},${selecetdYear}`}</div>
            </div>
        )
    }

    //El return principal del Componente Calendario, ya que HTML no me permitía estilizar el input
    //y no queria usar otra libreria externa que me diese componentes estilizados (tipo bootstrap)`
    //se me ocurrio usar un span encima debajo del calendario real, con CSS le puse una opacidad de 0
    //y usando position: relative/absolute los superpuse. quiza no es la mejor solucion del mundo, pero funciona.
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
