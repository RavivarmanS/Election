import React from 'react'
import './css/vega.css';
function Vega() {
  return (
    <div className='vega-main'>
      <div className='vega-vote'>
        <div className='vega-hc'>
          <h2 id='vega-title'>Vega House Captain</h2>
          <div className='vega-rdbtn'>
            <div id='vega-rd'>
              <img src='./shreejith.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='vegahousecaptain' />
              <div className='title'>
                <span>SHREEJITH</span>
              </div>
            </div>
            <div id='vega-rd'>
              <img src='./pravantika.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='vegahousecaptain' />
              <div className='title'>
                <span>PRAVANTIKA</span>
              </div>
            </div>
          </div>

          <div className='vega-dhc'>
            <h2 id='vega-title'>Vega Deputy House Captain</h2>
            <div className='vega-rdbtn'>

            <div id='vega-rd'>
              <img src='./ridu.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='vegadeputyhousecaptain' />
              <div className='title'>
                <span>RIDU PRANA</span>
              </div>
            </div>

            <div id='vega-rd'>
              <img src='./anu.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='vegadeputyhousecaptain' />
              <div className='title'>
                <span>ANU VARSHINI</span>
              </div>
            </div>

            <div id='vega-rd'>
              <img src='./vishal.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='vegadeputyhousecaptain' />
              <div className='title'>
                <span>VISHAL</span>
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Vega