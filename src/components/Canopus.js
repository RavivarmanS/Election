import React from 'react'
import './css/canopus.css';
function Vega() {
    return (
        <div className='canopus-main'>
            <div className='canopus-vote'>
                <div className='canopus-hc'>
                    <h2 id='canopus-title'>Canopus House Captain</h2>
                    <div className='canopus-rdbtn'>
                        <div id='canopus-rd'>
                            <img src='./shruthi.jpg' alt='' id='img' />
                            <br />
                            <input type='radio' name='canopushousecaptain' />
                            <div className='title'>
                                <span>SHRUTHI</span>
                            </div>
                        </div>
                        <div id='canopus-rd'>
                            <img src='./akshada.jpg' alt='' id='img' />
                            <br />
                            <input type='radio' name='canopushousecaptain' />
                            <div className='title'>
                                <span>AKSHADA</span>
                            </div>
                        </div>
                    </div>

                    <div className='canopus-dhc'>
                        <h2 id='canopus-title'>Canopus Deputy House Captain</h2>
                        <div className='canopus-rdbtn'>

                            <div id='canopus-rd'>
                                <img src='./diya.jpg' alt='' id='img' />
                                <br />
                                <input type='radio' name='canopusdeputyhousecaptain' />
                                <div className='title'>
                                    <span>DIYA</span>
                                </div>
                            </div>

                            <div id='canopus-rd'>
                                <img src='./vigasini.jpg' alt='' id='img' />
                                <br />
                                <input type='radio' name='canopusdeputyhousecaptain' />
                                <div className='title'>
                                    <span>VIGASINI</span>
                                </div>
                            </div>

                            <div id='canopus-rd'>
                                <img src='./sujith.jpg' alt='' id='img' />
                                <br />
                                <input type='radio' name='canopusdeputyhousecaptain' />
                                <div className='title'>
                                    <span>SUJITH</span>
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