import React,{useState,useEffect} from 'react'
import Calendar from './Calendar'
import IndicatorA from './IndicatorA'
import IndicatorB from './IndicatorB'
import Chart from './Chart'
import '../styles/Home.css'

//Estos archivos contienene la funcion que genera datos aleatorios y las funciones que uso para dar formatos.
import getRandomData from '../helpers/Data'
import {maxDateFormater,displayDateFormater} from '../helpers/DateFormater'

export default function Home() {

    //Objeto fecha actual y la fecha maxima que se puede elegir en el calendario.
    let date = new Date(Date.now());
    let maxDate=maxDateFormater(date);

    //Estados que utilizo para pasar a los componentes en forma de props.
    //dateDisplay es la fecha que selecciona el usuario, data es el obejto con datos random.
    //El mes es el mes actual en un principio y se actualiza segun la fecha elegida, lo guardo en el estado de home
    //pues su valor se determina en el componente Calendar y me hace falta en el componente Chart para hacer display
    //de el rango de datos correcto.
    let [dateDisplay,setDateDisplay]=useState(displayDateFormater(date));
    let [data,setData]= useState(getRandomData())
    let [month,setMonth]= useState((date).toLocaleDateString().slice(3,4))

    //Este hook podría no usarlo y llamar a setData dentro de handleDate cuando la fecha seleccionada cambia, 
    //pero he decidido usar este hook ya que en un caso real los datos vendrian de un server y usaria una API
    //que me proporcione HTML request, como por ejemplo axios y su GET method para obtener del endpoint los datos.
    useEffect(() => {
        setData(getRandomData())
    }, [dateDisplay])

    //Esta funcion simplemente recibe el evento desde el componente Calendar y actualiza la fecha seleccionada y el mes correspondiente.
    function handleDate(e) {
        setDateDisplay(displayDateFormater(e.currentTarget.value))
        setMonth(e.currentTarget.value.toString().slice(5,7))
    }
    
    //El return principal del componente, esto podría ir en App.js pero en un caso real esto seria una 
    //pagina o parte de la App global, por eso lo mantejo en otro componente
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
