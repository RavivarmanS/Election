import React from 'react'
import './css/capella.css';
function Capella() {
  return (
    <div className='capella-main'>
      <div className='capella-vote'>
        <div className='capella-hc'>
          <h2 id='capella-title'>Capella House Captain</h2>
          <div className='capella-rdbtn'>
            <div id='capella-rd'>
              <img src='./dhanvarshini.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='capellahousecaptain' />
              <div className='title'>
                <span>DHANVARSHINI</span>
              </div>
            </div>
            <div id='capella-rd'>
              <img src='./nithish.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='capellahousecaptain' />
              <div className='title'>
                <span>NITHISH</span>
              </div>
            </div>
          </div>

          <div className='capella-dhc'>
            <h2 id='capella-title'>Capella Deputy House Captain</h2>
            <div className='capella-rdbtn'>

              <div id='capella-rd'>
                <img src='./vidyutha.jpg' alt='' id='img' />
                <br />
                <input type='radio' name='capelladeputyhousecaptain' />
                <div className='title'>
                  <span>VIDYUTHA</span>
                </div>
              </div>

              <div id='capella-rd'>
                <img src='./keerthi.jpg' alt='' id='img' />
                <br />
                <input type='radio' name='capelladeputyhousecaptain' />
                <div className='title'>
                  <span>KEERTHI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Capella