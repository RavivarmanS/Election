import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
import Students from './components/Students';
import Candidate from './components/Candidate';
import Voting from './components/Voting';
import Results from './components/Results';
import axios from 'axios';

// localStorage.setItem("mithul",0)
// localStorage.setItem("akif",0)
// localStorage.setItem("prathiksha",0)
// localStorage.setItem("sakthidevi",0)
// localStorage.setItem("siveshnath",0)
// localStorage.setItem("dharneesh",0)
// localStorage.setItem("lydia",0)
// localStorage.setItem("shrisubanithi",0)
// localStorage.setItem("thanunitha",0)
// localStorage.setItem("harshankrishna",0)
// localStorage.setItem("raagav",0)
// localStorage.setItem("amaani",0)
// localStorage.setItem("tharuna",0)
// localStorage.setItem("devadharsan",0)
// localStorage.setItem("tharanidharan",0)
// localStorage.setItem("shifa",0)
// localStorage.setItem("birundha",0)
// localStorage.setItem("ritish",0)
// localStorage.setItem("ritishkumar",0)
// localStorage.setItem("yathesh",0)
// localStorage.setItem("krishma",0)
// localStorage.setItem("shrika",0)
// localStorage.setItem("sanchit",0)
// localStorage.setItem("durgesh",0)
// localStorage.setItem("stuthi",0)
// localStorage.setItem("sathvika",0)
// localStorage.setItem("shrichitambari",0)
// localStorage.setItem("chiranjeev",0)
// localStorage.setItem("harshith",0)
// localStorage.setItem("darshan",0)
// localStorage.setItem("viyashini",0)
// localStorage.setItem("pavin",0)
// localStorage.setItem("visruth",0)





// localStorage.setItem("gowtham",0)
// localStorage.setItem("mowlish",0)
// localStorage.setItem("viveka",0)
// localStorage.setItem("advaydth",0)
// localStorage.setItem("asmitha",0)
// localStorage.setItem("sarvesh",0)
// localStorage.setItem("gowthamk",0)
// localStorage.setItem("jayakash",0)
// localStorage.setItem("tinisha",0)
// localStorage.setItem("rakshitha",0)
// localStorage.setItem("harshansurya",0)



// localStorage.setItem("shruthi",0)
// localStorage.setItem("akshada",0)
// localStorage.setItem("diya",0)
// localStorage.setItem("vigasini",0)
// localStorage.setItem("sujith",0)



// localStorage.setItem("shreejith",0)
// localStorage.setItem("pravantika",0)
// localStorage.setItem("riduprana",0)
// localStorage.setItem("anuvarshini",0)
// localStorage.setItem("vishal",0)



// localStorage.setItem("varna",0)
// localStorage.setItem("pranav",0)
// localStorage.setItem("hanshini",0)
// localStorage.setItem("surya",0)
// localStorage.setItem("sriharen",0)



// localStorage.setItem("dhanvarshini",0)
// localStorage.setItem("nithish",0)
// localStorage.setItem("vidyutha",0)
// localStorage.setItem("keerthi",0)




function App() {
  const [nom, setNom] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/nominee')
      .then(nom => setNom(nom.data))
      .catch(err => console.log(err))

  }, [])
  
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/candidate'element={<Candidate/>}/>
          <Route path='/voting' element={<Voting/>}/>
          <Route path='/result' element={<Results />}/>
      </Routes>
    </div>
  );
   
}
export default App;
