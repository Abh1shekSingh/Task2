import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"

const PieChart = ({chardata}) => {
  return (
    <div>
        <Doughnut 
            data = {chardata}
            height={300}
            width={300}
            options={{
            maintainAspectRatio: false
            }}

        />

    </div>
  )
}

export default PieChart