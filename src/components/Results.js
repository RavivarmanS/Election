import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import './css/Result.css'
import axios from 'axios'

function Results() {
  

  // const [nm, setNm] = useState([]);
  // useEffect(() => {
  //   axios.get('http://localhost:4000/nominee')
  //     .then(nm => setNm(nm.data))
  //     .catch(err => console.log(err))

  // }, [])
 

  return (

    <div className="main">
      <div className="small" >
        <Sidebar />
      </div>

      <div className="large" >
        
        {/* <div >
          <div >
        <table className='table'>
          <thead>
            <tr>
              
              <th>Name</th>
              <th>position</th>
              <th>Vote</th>
              
            </tr>
          </thead>
          <tbody>
            {
              nm.map(nomi => {
                return <tr>
                  <td>{nomi.name }</td>
                  <td>{nomi.position }</td>
                  <td>{nomi.vote }</td>
                </tr>
              })
            }
          </tbody>
        </table>
        </div>
        </div>
         */}
          <div className='header'>
            <h1>head Boy</h1>
          </div>
          <div className='position-result'>
            <div>
              MITHUL PRANAV: {JSON.stringify(localStorage.getItem('mithul')).length-2}
            </div><br/>
            <div>
              AKIF: {JSON.stringify(localStorage.getItem('akif')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>head Girl</h1>
          </div>
          <div className='position-result'>
          <div>
          PRATHIKSHA: {JSON.stringify(localStorage.getItem('prathiksha')).length-2}
            </div><br/>
            <div>
            SAKTHI DEVI: {JSON.stringify(localStorage.getItem('sakthidevi')).length-2}
            </div>
            </div>
            <div className='header'>
            <h1>Junior Head Boy</h1>
          </div>
          <div className='position-result'>
            <div>
            SIVESHNATH: {JSON.stringify(localStorage.getItem('siveshnath')).length-2}
            </div><br/>
            <div>
            DHARANEESH: {JSON.stringify(localStorage.getItem('dharaneesh')) .length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Junior Head Girl</h1>
          </div>
          <div className='position-result'>
            <div>
            LYDIA FLORENCE: {JSON.stringify(localStorage.getItem('lydia')) .length-2}
            </div><br/>
            <div>
            SHRISUBANITHI: {JSON.stringify(localStorage.getItem('shrisubanithi')) .length-2}
            </div><br/>
            <div>
            THANUNITHA: {JSON.stringify(localStorage.getItem('thanunitha')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Deputy Head Boy</h1>
          </div>
          <div className='position-result'>
            <div>
            HARSHAN KRISHNA: {JSON.stringify(localStorage.getItem('harshankrishna') ).length-2}
            </div><br/>
            <div>
            RAAGAV: {JSON.stringify(localStorage.getItem('raagav')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Deputy Head Girl</h1>
          </div>
          <div className='position-result'>
            <div>
            AMAANI: {JSON.stringify(localStorage.getItem('amaani') ).length-2}
            </div><br/>
            <div>
            THARUNA: {JSON.stringify(localStorage.getItem('tharuna')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>sports Captain Boy</h1>
          </div>
          <div className='position-result'>
            <div>
            DEVADHARSHAN: {JSON.stringify(localStorage.getItem('devadharshan') ).length-2}
            </div><br/>
            <div>
            THARANIDHARAN: {JSON.stringify(localStorage.getItem('tharanidharani')) .length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Sports Captain Girl</h1>
          </div>
          <div className='position-result'>
            <div>
            SHIFA FATHIMA: {JSON.stringify(localStorage.getItem('shifa')) .length-2}
            </div><br/>
            <div>
            RITHU VARSHINI: {JSON.stringify(localStorage.getItem('rithu')).length-2}
            </div><br/>
            <div>
            BIRUNDHA: {JSON.stringify(localStorage.getItem('birundha') ).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Perfect Of Food</h1>
          </div>
          <div className='position-result'>
            <div>
            RITISH: {JSON.stringify(localStorage.getItem('ritish') ).length-2}
            </div><br/>
            <div>
            RITISH KUMAR: {JSON.stringify(localStorage.getItem('ritishkumar') ).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Perfect Of Cultural Events</h1>
          </div>
          <div className='position-result'>
            <div>
            YATHESH: {JSON.stringify(localStorage.getItem('yathesh')).length-2}
            </div><br/>
            <div>
            KRISHMA: {JSON.stringify(localStorage.getItem('krishma')) .length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Perfect Of Discpline</h1>
          </div>
          <div className='position-result'>
            <div>
            SHRIKA: {JSON.stringify(localStorage.getItem('shrika') ).length-2}
            </div><br/>
            <div>
            SANCHIT: {JSON.stringify(localStorage.getItem('sanchit') ).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Perfect Of Library</h1>
          </div>
          <div className='position-result'>
            <div>
            DURGESH: {JSON.stringify(localStorage.getItem('duresh') ).length-2}
            </div><br/>
            <div>
            STUTHI: {JSON.stringify(localStorage.getItem('stuthi') ).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Deputy Perfect Of Food</h1>
          </div>
          <div className='position-result'>
            <div>
            SATHVIKA: {JSON.stringify(localStorage.getItem('sathvika') ).length-2}
            </div><br/>
            <div>
            SHRI CHITAMBARI: {JSON.stringify(localStorage.getItem('shrichitambari')) .length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Deputy Perfect Of Cultural Events</h1>
          </div>
          <div className='position-result'>
            <div>
            CHIRANJEEV: {JSON.stringify(localStorage.getItem('chiranjeev')) .length-2}
            </div><br/>
            <div>
            HARSHITH: {JSON.stringify(localStorage.getItem('harshith')) .length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Deputy Perfect Of Discpline</h1>
          </div>
          <div className='position-result'>
            <div>
            DARSHAN: {JSON.stringify(localStorage.getItem('darshan')).length-2}
            </div><br/>
            <div>
            VIYASHINI: {JSON.stringify(localStorage.getItem('viyashini')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Deputy Perfect Of Library</h1>
          </div>
          <div className='position-result'>
            <div>
            PAVIN: {JSON.stringify(localStorage.getItem('pavin')).length-2}
            </div><br/>
            <div>
            VISRUTH: {JSON.stringify(localStorage.getItem('visruth')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>PREFECTS OF TRANSPORT</h1>
          </div>
          <div className='header'>
            <h1>Bus 1</h1>
          </div>
          <div className='position-result'>
            <div>
            GOWTHAM: {JSON.stringify(localStorage.getItem('gowtham')).length-2}
            </div><br/>
            <div>
            MOWLISH: {JSON.stringify(localStorage.getItem('mowlish')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Bus 2</h1>
          </div>
          <div className='position-result'>
            <div>
            VIVEKA: {JSON.stringify(localStorage.getItem('viveka')) .length-2}
            </div><br/>
            <div>
            ADVAYDTH: {JSON.stringify(localStorage.getItem('advaydth')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Bus 3</h1>
          </div>
          <div className='position-result'>
            <div>
            ASMITHA: {JSON.stringify(localStorage.getItem('asmitha')) .length-2}
            </div><br/>
            <div>
            SARVESH: {JSON.stringify(localStorage.getItem('sarvesh')) .length-2}
            </div><br/>
            <div>
            GOWTHAM K: {JSON.stringify(localStorage.getItem('gowthamk')) .length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Bus 4</h1>
          </div>
          <div className='position-result'>
            <div>
            JAYAKASH: {JSON.stringify(localStorage.getItem('jayakash')) .length-2}
            </div><br/>
            <div>
            TINISHA: {JSON.stringify(localStorage.getItem('tinisha')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>Bus 5</h1>
          </div>
          <div className='position-result'>
            <div>
            RAKSHITHA: {JSON.stringify(localStorage.getItem('rakshitha')).length-2}
            </div><br/>
            <div>
            HARSHAN SURYA: {JSON.stringify(localStorage.getItem('harshansurya')).length-2}
            </div>
          </div>
          <div className='header'>
            <h1>House Votes</h1>
          </div>
          <div className='header-canopus'>
            <h1>Canopus House Captain</h1>
          </div>
          <div className='position-result'>
            <div>
            SHRUTHI: {JSON.stringify(localStorage.getItem('shruthi')).length-2}
            </div><br/>
            <div>
            AKSHADA: {JSON.stringify(localStorage.getItem('akshada')).length-2}
            </div>
          </div>
          <div className='header-canopus'>
            <h1>Canopus Deputy House Captain</h1>
          </div>
          <div className='position-result'>
            <div>
            DIYA: {JSON.stringify(localStorage.getItem('diya')).length-2}
            </div><br/>
            <div>
            VIGASINI: {JSON.stringify(localStorage.getItem('vigasini')).length-2}
            </div><br/>
            <div>
            SUJITH: {JSON.stringify(localStorage.getItem('sujith')).length-2}
            </div>
          </div>
          <div className='header-vega'>
            <h1>Vega House Captain</h1>
          </div>
          <div className='position-result'>
            <div>
            SHREEJITH: {JSON.stringify(localStorage.getItem('shreejith')).length-2}
            </div><br/>
            <div>
            PRAVANTIKA: {JSON.stringify(localStorage.getItem('pravantika')).length}
            </div>
          </div>
          <div className='header-vega'>
            <h1>Vega Deputy House Captain</h1>
          </div>
          <div className='position-result'>
            <div>
            RIDU PRANA: {JSON.stringify(localStorage.getItem('ridu')).length-2}
            </div><br/>
            <div>
            ANU VARSHINI: {JSON.stringify(localStorage.getItem('anuvarshini')).length-2}
            </div><br/>
            <div>
            VISHAL: {JSON.stringify(localStorage.getItem('vishal')).length-2}
            </div>
          </div>
          <div className='header-sirius'>
            <h1>Sirius House Captain</h1>
          </div>
          <div className='position-result'>
            <div>
            VARNA: {JSON.stringify(localStorage.getItem('varna')).length-2}
            </div><br/>
            <div>
            PRANAV: {JSON.stringify(localStorage.getItem('pranav')).length-2}
            </div><br/>
            <div>
            HANSHINI: {JSON.stringify(localStorage.getItem('hanshini')).length-2}
            </div>
          </div>
          <div className='header-sirius'>
            <h1>Sirius Deputy House Captain</h1>
          </div>
          <div className='position-result'>
            <div>
            SURYA: {JSON.stringify(localStorage.getItem('surya')).length-2}
            </div><br/>
            <div>
            SRI HAREN: {JSON.stringify(localStorage.getItem('sriharen')).length-2}
            </div>
          </div>
          <div className='header-capella'>
            <h1>Capella House Captain</h1>
          </div>
          <div className='position-result'>
            <div>
            DHANVARSHINI: {JSON.stringify(localStorage.getItem('dhanvarshini')).length-2}
            </div><br/>
            <div>
            NITHISH: {JSON.stringify(localStorage.getItem('nithish')).length-2}
            </div>
          </div>
          <div className='header-capella'>
            <h1>Capella Deputy House Captain</h1>
          </div>
          <div className='position-result'>
            <div>
            VIDYUTHA: {JSON.stringify(localStorage.getItem('vidyutha')).length-2}
            </div><br/>
            <div>
            KEERTHI: {JSON.stringify(localStorage.getItem('keerthi')).length-2}
            </div>
          </div>
      </div>
    </div>
    

  )
}

export default Results