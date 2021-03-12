import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import {dataChunker} from '../DateFormater'

export default function Chart(props) {

  let{month,dataSet}=props;
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
  let options={
    legend: {
        display: false,
    },
  };

  return (
    
    <>
    <div>
      <Line data={data} options={options} />
    </div>  
    
  </>
  )
}
