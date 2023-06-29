import React from 'react'
import Sidebar from './Sidebar'
import './css/student.css';
import vega from './json/vega.json'
import capella from './json/capella.json'
import sirius from './json/sirius.json'
import canopus from './json/canopus.json'


function Students() {
  return (
    <div className='main-student'>
      <div className='small'>
        <Sidebar />
      </div>
      <div className='large'>
        <div className='student-body'>
          <div className='head'>
            <h1>House List</h1>
          </div>
        </div>
       
        <div className='house-head-capella'>
          <h3>capella</h3>
        </div>
        <div className='table-capella'>
          <table>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
            {capella.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.Sno}</td>
                  <td>{val.Name}</td>
                  <td>{val.Grade}</td>
                  <td>{val.Status}</td>
                </tr>
              )
            })}
          </table>

        </div>
        <div className='house-head-vega'>
          <h3>vega</h3>

        </div>
        <div className='table-vega'>
          <table>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
            {vega.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.Sno}</td>
                  <td>{val.Name}</td>
                  <td>{val.Grade}</td>
                  <td>{val.Status}</td>
                </tr>
              )
            })}
          </table>

        </div>
        <div className='house-head-sirius'>
          <h3>sirius</h3>
        </div>
        <div>
          <table>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
            {sirius.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.Sno}</td>
                  <td>{val.Name}</td>
                  <td>{val.Grade}</td>
                  <td>{val.Status}</td>
                </tr>
              )
            })}
          </table>

        </div>
        <div className='house-head-canopus'>
          <h3>canopus</h3>
        </div>
        <div className='table-canopus'>
          <table>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
            {canopus.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.Sno}</td>
                  <td>{val.Name}</td>
                  <td>{val.Grade}</td>
                  <td>{val.Status}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>

  )
}

export default Students