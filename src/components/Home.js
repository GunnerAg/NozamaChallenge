import React,{useState,useEffect} from 'react'
import Calendar from './Calendar'
import IndicatorA from './IndicatorA'
import IndicatorB from './IndicatorB'
import Chart from './Chart'
import '../styles/Home.css'

import getRandomData from '../Data'
import {maxDateFormater,displayDateFormater} from '../DateFormater'

export default function Home() {

    let date = new Date(Date.now());
    let maxDate=maxDateFormater(date);
    let [dateDisplay,setDateDisplay]=useState(displayDateFormater(date));
    let [data,setData]= useState(getRandomData())
    let [month,setMonth]= useState((date).toLocaleDateString().slice(3,4))

    useEffect(() => {
        setData(getRandomData())
    }, [dateDisplay])

    function handleDate(e) {
        setDateDisplay(displayDateFormater(e.currentTarget.value))
        setMonth(e.currentTarget.value.toString().slice(5,7))
    }
    
    return (
        <div className="mainHomeContainer">
            <div className="headerContainer">
                <div className="companyLogo"></div>
                <div className="challenge">CHALLENGE</div>
            </div>
            <div className="indicatorsContainer">
                <Calendar handleDate={handleDate} dateDisplay={dateDisplay} maxDate={maxDate} />
                <IndicatorA data={data} />
                <IndicatorB data={data} />
            </div>
            <div className="chart-container">
                <div className="overChart">
                    <div className="overChartIcon"/>
                    <div className="overChartTxt">Recovered</div>
                </div>
                <Chart dataSet={data} month={month} maintainAspectRatio={true} responsive={true} style={{border: 'solide blue 5px'}}/>
            </div>
        </div>
    )
}
