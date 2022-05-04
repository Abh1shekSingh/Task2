import React from 'react';
import "./Sidebar.css"
const Sidebar = () => {

  return (
    <div className="sidebar">
        <div className='upper'>
            <h3>Filters</h3>
            <p>Edit</p>
        </div>

        <div className='Sidebar__elements'>
            <div className='elements'>
                <h4>Date</h4>
                <select >
                    <option>Select</option>
                </select>
            </div>
            <div className='elements'>
                <h4>Class</h4>
                <select >
                    <option>Select</option>
                </select>
            </div>
            <div className='elements'>
                <h4>Subject</h4>
                <select >
                    <option>Select</option>
                </select>
            </div>
            <div className='elements'>
                <h4>Gender</h4>
                <select >
                    <option>Select</option>
                </select>
            </div>
            <div className='elements'>
                <h4>Date</h4>
                <select >
                    <option>Select</option>
                </select>
            </div>
            <div className='elements'>
                <h4>Age</h4>
                <select >
                    <option>Select</option>
                </select>
            </div>
            <div className='elements'>
                <h4>Country</h4>
                <select >
                    <option>Select</option>
                </select>
            </div>
            <div className='elements'>
                <h4>State</h4>
                <select >
                    <option>Select</option>
                </select>
            </div>
            <div className='elements'>
                <h4>Block</h4>
                <select >
                    <option>Select</option>
                </select>
            </div>
            
        </div>
        
    </div>
  )
}

export default Sidebar