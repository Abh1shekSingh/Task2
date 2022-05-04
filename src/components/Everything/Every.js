import React,{useState} from 'react'
import "./Every.css"
import {FiUsers} from "react-icons/fi"
import {BiMessageSquareDetail} from "react-icons/bi"
import {AiOutlineLike,AiOutlineCheckCircle} from "react-icons/ai"
import BarChart from '../Barchart/BarChart'
import  {UserData}  from '../Barchart/Data';
import PieChart from '../Piechart/PieChart'
import Sidebar from '../Sidebar/Sidebar'
import {ImCross} from "react-icons/im"
const Every = () => {

  const [userScatterData, setUserScatterData] = useState({
      labels:UserData.map((user) => user.year),
      datasets:[{
        label:"UserGained",
        data: UserData.map((data) => data.usergained),
        
        pointBorderColor: 'blue',
        borderColor: ['blue'],
        backgroundColor: ['blue'],
        pointBackgroundColor: 'blue'
      },{
        label:"Userlost",
        data: UserData.map((data) => data.userlost),
  
        pointBorderColor: 'red',
        borderColor: ['red'],
        backgroundColor: ['red'],
        pointBackgroundColor: 'red'
      }]
  })

  const [userDoughnutData, setUserData] = useState({
    labels:UserData.map((user) => user.year),
    datasets:[{
      label:"UserGained",
      data: UserData.map((data) => data.usergained),
      
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 156, 86)',
        'rgb(25, 156, 86)'
      ]
    }]
})

const [userDoughnutDataLost, setUserDataLost] = useState({
  labels:UserData.map((user) => user.year),
  datasets:[{
    label:"UserGained",
    data: UserData.map((data) => data.userlost),
    
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 156, 86)',
      'rgb(25, 156, 86)'
    ]
  }]
})


  return (
    <div className='grid-container'>

        
        <div className='item1'>
            <Sidebar />
            <ImCross />
        </div>


        <div className='item2'>

          <div className='card1'>
             <div className='card_heading'>
                <p>Total users</p>
                <p><FiUsers /></p>
             </div>
             <h1>13,675</h1>
          </div>

          <div className='card1'>
             <div className='card_heading'>
                <p>Course Available</p>
                <p><BiMessageSquareDetail /></p>
             </div>
             <h1>1,980</h1>
          </div>

          <div className='card1'>
             <div className='card_heading'>
                <p>Course Enrolled</p>
                <p><AiOutlineLike/></p>
             </div>
             <h1>890</h1>
          </div>

          <div className='card1'>
             <div className='card_heading'>
                <p>Course Completed</p>
                <p><AiOutlineCheckCircle /></p>
             </div>
             <h1>700</h1>
          </div>
        </div>


        <div className='item3 chart'>
          <h3>User Registration Year Wise</h3>
          <br></br>
          <BarChart chardata={userScatterData} />
        </div>

        <div className='item4'>
        
          <div className='chart'>
            <h3>User Gained</h3>
            <br></br>
            <PieChart chardata={userDoughnutData} />
          </div>

          <div className='chart'>
            <h3>User Lost</h3>
            <br></br>
            <PieChart chardata={userDoughnutDataLost} />
          </div>
          
        </div>
    </div>
  )
}

export default Every