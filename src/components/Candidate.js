import React from 'react'
import Sidebar from './Sidebar'
import'./css/candidate.css';
import students from './json/students.json';

function candidate() {
  return (
    <div className='main-candidate'>
      <div className='small'>
        <Sidebar/>
      </div>
      <div className='large'>
        <div className='candidate-head'>
          <div className='head'>
          <h1>
            Students List
          </h1>
          </div>
          
        </div>
      <div className='table-students'>
          <table>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
            {students.map((val, key) => {
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

export default candidate