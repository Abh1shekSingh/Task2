import React from 'react'
import { Bubble } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"
const BarChart = ({chardata}) => {
 
  return (
    <div>
         <Bubble
            data={chardata}
            height={400}
            width={600}
            options={{
            maintainAspectRatio: false
            }}
         />
    </div>
  )
}

export default BarChart;