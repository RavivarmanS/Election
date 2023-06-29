import React from 'react'
import './css/sirius.css';
function Sirius() {
  return (
    <div className='sirius-main'>
      <div className='sirius-vote'>
        <div className='sirius-hc'>
          <h2 id='sirius-title'>Sirius House Captain</h2>
          <div className='sirius-rdbtn'>
            <div id='sirius-rd'>
              <img src='./varna.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='siriushousecaptain' />
              <div className='title'>
                <span>VARNA</span>
              </div>
            </div>
            <div id='sirius-rd'>
              <img src='./pranav.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='siriushousecaptain' />
              <div className='title'>
                <span>PRANAV</span>
              </div>
            </div>
            <div id='sirius-rd'>
              <img src='./hanshini.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='siriushousecaptain' />
              <div className='title'>
                <span>HANSHINI</span>
              </div>
            </div>
          </div>

          <div className='sirius-dhc'>
            <h2 id='sirius-title'>Sirius Deputy House Captain</h2>
            <div className='sirius-rdbtn'>

              <div id='sirius-rd'>
                <img src='./surya.jpg' alt='' id='img' />
                <br />
                <input type='radio' name='siriusdeputyhousecaptain' />
                <div className='title'>
                  <span>SURYA</span>
                </div>
              </div>

              <div id='sirius-rd'>
                <img src='./sri_haren.jpg' alt='' id='img' />
                <br />
                <input type='radio' name='siriusdeputyhousecaptain' />
                <div className='title'>
                  <span>SRI HAREN</span>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Sirius