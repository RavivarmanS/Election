import { React } from 'react';
import { Route, Routes, link, useNavigate } from 'react-router-dom';
import './css/Login.css';
import { useState } from 'react';
function Login() {

  const navigate = useNavigate();
  const [user, setUser] = useState('') 
  const [password, setPassword] = useState('')
  function handleClick() {
    if (user.length == 0) {
      alert('Invalid Form, User can not be empty')
      return
    }
    if(password.length == 0){
      alert('Please Enter Password')
    }
    if(user != 'admin' || password != '123')
    {
      alert('Please Enter Correct Credentials')
    }
    if(user == 'admin' && password == '123')
    {
      navigate('/home');
    }
  }
  return (
    <div className='form'>
      <div className='navbar'>
        <nav>
          <img src="./logo.png" className="logo" alt="" />
          <h1>BHARATHI VIDHYAA KENDHRA</h1>
        </nav>
      </div>
      <div >
        <div className='login'>
          <body className='login-body'>
            <form onSubmit={handleClick} >
              <div className='user'>
                <label htmlFor='user'>User</label><br />
                <input type='text' placeholder='Enter User' required className='userid' onChange={(e)=>setUser(e.target.value)}/>
              </div>
              <div className='pass'>
                <label htmlFor='password'>Password</label><br />
                <input type='password' placeholder='Enter Password' required className='passid' onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className='submit'>
                <button type='submit'>login</button>
              </div>
            </form>
          </body>
        </div>
      </div>
    </div>
  );
}
export default Login
