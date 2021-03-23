import React from 'react'
import '../styles/Calendar.css'

export default function Calendar(props) {

    let{dateDisplay,maxDate}=props

    let Displayable=()=>{
        const{dayDisplayTxt,monthDisplay,selecetdYear,dayDisplayNumb}=dateDisplay
        return(
            <div className="dateContainer">
                <div style={{fontWeight:'700'}}>{`${dayDisplayTxt} ${dayDisplayNumb},`}</div>
                <div>{`${monthDisplay},${selecetdYear}`}</div>
            </div>
        )
    }

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
