import React from 'react'

//Line es un canvas element que me proporciona la libreria chart.js para crear la gráfica.
//dataChunker es una función de formato de datos, la uso para obtener los datos en el formato que requiere
//chart.js. y para obtener solo el trozo de datos que hay que graficar.(por eso lo de chunk)
import { Line } from '@reactchartjs/react-chart.js'
import {dataChunker} from '../helpers/DateFormater'

//El componente de la grafica
export default function Chart(props) {

  //Desestructuro props.
  let{month,dataSet}=props;

  //esta función la uso para crear por un lado un canvas con los gradientes del color de fondo que se ve
  //en la gráfica (parece absurdo pero es la unica forma que chart.js permite para usar de color de fondo un gradiente)
  //y hago que me devuelva un objeto con todos los datos necesarios para crear la gráfica.
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 500);
    gradient.addColorStop(0, "rgb(98, 119, 93)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.4)");
    return {
      labels:  dataChunker(month,dataSet)['monthsArr'],
      datasets: [
        {
          pointStyle: 'circle',
          radius:6,
          label: 'Recovered KG per month',
          data: dataChunker(month,dataSet)['dataArr'],
          fill: true,
          backgroundColor:  gradient,
          borderColor: 'rgb(98, 119, 93)',
        },
      ]
    }
  }
  //Este objeto simplemente es para quitar la leyenda de la grafica, era horriblemente fea.
  let options={
    legend: {
        display: false,
    },
  };

  //el return del componente, toma un componente proporcionado por la libreria (que genera el canvas de la gráfica) y requere las props de datos y opciones.
  return (
    <>
      <div>
        <Line data={data} options={options} />
      </div>  
  </>
  )
}
