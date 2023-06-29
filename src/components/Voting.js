import React, { useState, useEffect } from 'react'
import './css/voting.css';
import Sidebar from './Sidebar';
import Sirius from './Sirius';
import Vega from './Vega';
import Capella from './Capella';
import Canopus from './Canopus'
import axios from 'axios';
import { colors } from '@mui/material';



function Voting() {
  const [selected, setSelected] = useState('')
  
  const stud = [
    {
     "Grade": "G3",
     "Name": "HASHMIDHA.S",
     "House": "Canopus"
    },
    {
     "Grade": "G3",
     "Name": "MANAV.V.NAIR",
     "House": "Canopus"
    },
    {
     "Grade": "G3",
     "Name": "SASHWIN VAIBHAV. K.K",
     "House": "Canopus"
    },
    {
     "Grade": "G3",
     "Name": "VINIEETH",
     "House": "Canopus"
    },
    {
     "Grade": "G3",
     "Name": "ADHVI",
     "House": "Sirius"
    },
    {
     "Grade": "G3",
     "Name": "KIRUSHVIKA.M",
     "House": "Sirius"
    },
    {
     "Grade": "G3",
     "Name": "LISHANTH. R. L",
     "House": "Sirius"
    },
    {
     "Grade": "G3",
     "Name": "RITIK VITUR",
     "House": "Sirius"
    },
    {
     "Grade": "G3",
     "Name": "ASWANTH. S",
     "House": "Vega"
    },
    {
     "Grade": "G3",
     "Name": "JEFFRIN BLESSO. D",
     "House": "Vega"
    },
    {
     "Grade": "G3",
     "Name": "MEGHA. V",
     "House": "Vega"
    },
    {
     "Grade": "G3",
     "Name": "SADURTHIKA G.",
     "House": "Vega"
    },
    {
     "Grade": "G3",
     "Name": "DAKSHINA .N.V",
     "House": "Capella"
    },
    {
     "Grade": "G3",
     "Name": "FARIDHA FATHIMA",
     "House": "Capella"
    },
    {
     "Grade": "G3",
     "Name": "PON CHIDAMBARI",
     "House": "Capella"
    },
    {
     "Grade": "G3",
     "Name": "SHAKTHI VISHAKAN. Y",
     "House": "Capella"
    },
    {
     "Grade": "G4",
     "Name": "AKSHATH.U.K",
     "House": "Canopus"
    },
    {
     "Grade": "G4",
     "Name": "HARISUDHAN P.",
     "House": "Canopus"
    },
    {
     "Grade": "G4",
     "Name": "MAHI VENBA",
     "House": "Canopus"
    },
    {
     "Grade": "G4",
     "Name": "SARVESH. P.D",
     "House": "Canopus"
    },
    {
     "Grade": "G4",
     "Name": "SASWATH",
     "House": "Canopus"
    },
    {
     "Grade": "G4",
     "Name": "THARUN ADHITHYA",
     "House": "Canopus"
    },
    {
     "Grade": "G4",
     "Name": "HARISHANTH",
     "House": "Sirius"
    },
    {
     "Grade": "G4",
     "Name": "MALINI R.",
     "House": "Sirius"
    },
    {
     "Grade": "G4",
     "Name": "PRANAV.D",
     "House": "Sirius"
    },
    {
     "Grade": "G4",
     "Name": "SRIKRITHI",
     "House": "Sirius"
    },
    {
     "Grade": "G4",
     "Name": "SRIMATHI G.",
     "House": "Sirius"
    },
    {
     "Grade": "G4",
     "Name": "AHAN .V.V",
     "House": "Vega"
    },
    {
     "Grade": "G4",
     "Name": "CHAITANYA L.B.",
     "House": "Vega"
    },
    {
     "Grade": "G4",
     "Name": "DEEPAK. N",
     "House": "Vega"
    },
    {
     "Grade": "G4",
     "Name": "NITHILAA G.",
     "House": "Vega"
    },
    {
     "Grade": "G4",
     "Name": "RIYTHWIN AKSHITH. D",
     "House": "Vega"
    },
    {
     "Grade": "G4",
     "Name": "SAANVIKA.M",
     "House": "Vega"
    },
    {
     "Grade": "G4",
     "Name": "ABHAY THARUN",
     "House": "Capella"
    },
    {
     "Grade": "G4",
     "Name": "ANJHANA KRISHNA",
     "House": "Capella"
    },
    {
     "Grade": "G4",
     "Name": "GABRIELA ROY. N",
     "House": "Capella"
    },
    {
     "Grade": "G4",
     "Name": "HASHINI PRAKALYA V.",
     "House": "Capella"
    },
    {
     "Grade": "G4",
     "Name": "VETHA RITHIKA",
     "House": "Capella"
    },
    {
     "Grade": "G5",
     "Name": "DHIKSAN.A.K",
     "House": "Canopus"
    },
    {
     "Grade": "G5",
     "Name": "HARINI R.",
     "House": "Canopus"
    },
    {
     "Grade": "G5",
     "Name": "KALPHAJA. J",
     "House": "Canopus"
    },
    {
     "Grade": "G5",
     "Name": "MANTHAN KOTHARI J.",
     "House": "Canopus"
    },
    {
     "Grade": "G5",
     "Name": "SARA GRACE. A",
     "House": "Canopus"
    },
    {
     "Grade": "G5",
     "Name": "SHIVANI. V",
     "House": "Canopus"
    },
    {
     "Grade": "G5",
     "Name": "ANANYA J.",
     "House": "Sirius"
    },
    {
     "Grade": "G5",
     "Name": "ILAKKIYA MOORTHI",
     "House": "Sirius"
    },
    {
     "Grade": "G5",
     "Name": "JEFFERSON EDEN RAJ J.",
     "House": "Sirius"
    },
    {
     "Grade": "G5",
     "Name": "MIRUTHUVIKA. S",
     "House": "Sirius"
    },
    {
     "Grade": "G5",
     "Name": "MITHUL KRITHIK",
     "House": "Sirius"
    },
    {
     "Grade": "G5",
     "Name": "RITHUN.S",
     "House": "Sirius"
    },
    {
     "Grade": "G5",
     "Name": "ASWATHA SELVARAJ",
     "House": "Vega"
    },
    {
     "Grade": "G5",
     "Name": "DHEER PAREEK",
     "House": "Vega"
    },
    {
     "Grade": "G5",
     "Name": "DHYAN PAREEK",
     "House": "Vega"
    },
    {
     "Grade": "G5",
     "Name": "HANSIKA V.",
     "House": "Vega"
    },
    {
     "Grade": "G5",
     "Name": "LITHIK GUHAN V.",
     "House": "Vega"
    },
    {
     "Grade": "G5",
     "Name": "SHREYAS RAJ.K",
     "House": "Vega"
    },
    {
     "Grade": "G5",
     "Name": "ASHVATHRAAM M.",
     "House": "Capella"
    },
    {
     "Grade": "G5",
     "Name": "KATHIRAVAN.B.K",
     "House": "Capella"
    },
    {
     "Grade": "G5",
     "Name": "LITESH ABINAV D.",
     "House": "Capella"
    },
    {
     "Grade": "G5",
     "Name": "MINHA S.",
     "House": "Capella"
    },
    {
     "Grade": "G5",
     "Name": "SASTHIK E.",
     "House": "Capella"
    },
    {
     "Grade": "G5",
     "Name": "VASUNDRA.R.V",
     "House": "Capella"
    },
    {
     "Grade": "G6",
     "Name": "DHARSHAN.A.S",
     "House": "Canopus"
    },
    {
     "Grade": "G6",
     "Name": "PAVIN",
     "House": "Canopus"
    },
    {
     "Grade": "G6",
     "Name": "RAKSITHA.B.S",
     "House": "Canopus"
    },
    {
     "Grade": "G6",
     "Name": "VISRUTH VADIVELAN",
     "House": "Canopus"
    },
    {
     "Grade": "G6",
     "Name": "DARSHAN C.",
     "House": "Sirius"
    },
    {
     "Grade": "G6",
     "Name": "SHRI SUBANITHI. K",
     "House": "Sirius"
    },
    {
     "Grade": "G6",
     "Name": "SIVESH NATH S.",
     "House": "Sirius"
    },
    {
     "Grade": "G6",
     "Name": "VIYASINI. S.J",
     "House": "Sirius"
    },
    {
     "Grade": "G6",
     "Name": "AGRIMA PANDEY",
     "House": "Vega"
    },
    {
     "Grade": "G6",
     "Name": "DHARANEESH. J",
     "House": "Vega"
    },
    {
     "Grade": "G6",
     "Name": "SATHVIKA. S.V",
     "House": "Vega"
    },
    {
     "Grade": "G6",
     "Name": "THANU NITHA. D",
     "House": "Vega"
    },
    {
     "Grade": "G6",
     "Name": "CHIRANJEEV RAM",
     "House": "Capella"
    },
    {
     "Grade": "G6",
     "Name": "HARSHITH. S",
     "House": "Capella"
    },
    {
     "Grade": "G6",
     "Name": "SHRI CHIDAMBARI S.V.",
     "House": "Capella"
    },
    {
     "Grade": "G6",
     "Name": "YAKSHITHA.M",
     "House": "Capella"
    },
    {
     "Grade": "G7",
     "Name": "ABHINAV J.",
     "House": "Canopus"
    },
    {
     "Grade": "G7",
     "Name": "LAKSITA.D",
     "House": "Canopus"
    },
    {
     "Grade": "G7",
     "Name": "NIKHIL KISHORE",
     "House": "Canopus"
    },
    {
     "Grade": "G7",
     "Name": "PRANIEETH",
     "House": "Canopus"
    },
    {
     "Grade": "G7",
     "Name": "TINISHA DEVORA",
     "House": "Canopus"
    },
    {
     "Grade": "G7",
     "Name": "YUVAN RUBAN",
     "House": "Canopus"
    },
    {
     "Grade": "G7",
     "Name": "FAREEZ. H",
     "House": "Sirius"
    },
    {
     "Grade": "G7",
     "Name": "HARSHAN SURYAH P.",
     "House": "Sirius"
    },
    {
     "Grade": "G7",
     "Name": "JASWITHA. B",
     "House": "Sirius"
    },
    {
     "Grade": "G7",
     "Name": "PRAJITH.K.G",
     "House": "Sirius"
    },
    {
     "Grade": "G7",
     "Name": "RITHIHA SHREE R.",
     "House": "Sirius"
    },
    {
     "Grade": "G7",
     "Name": "SHRI HARI MURUGAPPAN.D",
     "House": "Sirius"
    },
    {
     "Grade": "G7",
     "Name": "VEDANT JOSHI (Staff)",
     "House": "Sirius"
    },
    {
     "Grade": "G7",
     "Name": "AJAY KANNA K.S",
     "House": "Vega"
    },
    {
     "Grade": "G7",
     "Name": "DEBINO STEVANY. A.N",
     "House": "Vega"
    },
    {
     "Grade": "G7",
     "Name": "HARSHITH.V.J",
     "House": "Vega"
    },
    {
     "Grade": "G7",
     "Name": "PRERNA PANDEY",
     "House": "Vega"
    },
    {
     "Grade": "G7",
     "Name": "SAIMITRA.G",
     "House": "Vega"
    },
    {
     "Grade": "G7",
     "Name": "VARUNAN G.",
     "House": "Vega"
    },
    {
     "Grade": "G7",
     "Name": "ASMITHA E.",
     "House": "Capella"
    },
    {
     "Grade": "G7",
     "Name": "DHAKSHIN SRINIVAS",
     "House": "Capella"
    },
    {
     "Grade": "G7",
     "Name": "GAUTAM KOTHARI",
     "House": "Capella"
    },
    {
     "Grade": "G7",
     "Name": "JAY AKASH M.",
     "House": "Capella"
    },
    {
     "Grade": "G7",
     "Name": "RAKSHITA S.P.",
     "House": "Capella"
    },
    {
     "Grade": "G7",
     "Name": "SARVESH S.",
     "House": "Capella"
    },
    {
     "Grade": "G8",
     "Name": "DIYA B. (Staff)",
     "House": "Canopus"
    },
    {
     "Grade": "G8",
     "Name": "MADHUMITHRA. V.S",
     "House": "Canopus"
    },
    {
     "Grade": "G8",
     "Name": "SUJITH PRANAV",
     "House": "Canopus"
    },
    {
     "Grade": "G8",
     "Name": "GOWTHAM. S",
     "House": "Sirius"
    },
    {
     "Grade": "G8",
     "Name": "SURYA S.S.",
     "House": "Sirius"
    },
    {
     "Grade": "G8",
     "Name": "AATHIRAI B.",
     "House": "Capella"
    },
    {
     "Grade": "G8",
     "Name": "KEERTHI VARMAN M.S.",
     "House": "Capella"
    },
    {
     "Grade": "G8",
     "Name": "VIDYUTHA T.",
     "House": "Capella"
    },
    {
     "Grade": "G9",
     "Name": "AKSHADA LIJU .C",
     "House": "Canopus"
    },
    {
     "Grade": "G9",
     "Name": "RITHISH P.D.",
     "House": "Canopus"
    },
    {
     "Grade": "G9",
     "Name": "SHRUTI KOTHARI",
     "House": "Canopus"
    },
    {
     "Grade": "G9",
     "Name": "THANISHA. M.S",
     "House": "Canopus"
    },
    {
     "Grade": "G9",
     "Name": "VIVEKA. R",
     "House": "Canopus"
    },
    {
     "Grade": "G9",
     "Name": "ADVAYDH R.",
     "House": "Sirius"
    },
    {
     "Grade": "G9",
     "Name": "GURUCHARAN H.S.",
     "House": "Sirius"
    },
    {
     "Grade": "G9",
     "Name": "PRANAV P.A.",
     "House": "Sirius"
    },
    {
     "Grade": "G9",
     "Name": "RITISH KUMAR",
     "House": "Sirius"
    },
    {
     "Grade": "G9",
     "Name": "SHRIKA K.P.",
     "House": "Sirius"
    },
    {
     "Grade": "G9",
     "Name": "VARNA RAAGAVI C.",
     "House": "Sirius"
    },
    {
     "Grade": "G9",
     "Name": "DURGESH M.",
     "House": "Vega"
    },
    {
     "Grade": "G9",
     "Name": "MOWLISH. R.J",
     "House": "Vega"
    },
    {
     "Grade": "G9",
     "Name": "RUTHRESH. B.V",
     "House": "Vega"
    },
    {
     "Grade": "G9",
     "Name": "SANCHIT",
     "House": "Vega"
    },
    {
     "Grade": "G9",
     "Name": "SHREEJIT KARMAKAR",
     "House": "Vega"
    },
    {
     "Grade": "G9",
     "Name": "DANVARSHINI S.T.",
     "House": "Capella"
    },
    {
     "Grade": "G9",
     "Name": "JEEVA BHARATHI",
     "House": "Capella"
    },
    {
     "Grade": "G9",
     "Name": "KRISHMA. S.V",
     "House": "Capella"
    },
    {
     "Grade": "G9",
     "Name": "LYNN TRESA FRANCIS",
     "House": "Capella"
    },
    {
     "Grade": "G9",
     "Name": "ROHIT. C",
     "House": "Capella"
    },
    {
     "Grade": "G9",
     "Name": "RUDY CHRISTUS. A",
     "House": "Capella"
    },
    {
     "Grade": "G10",
     "Name": "ASHRAQ AHAMED",
     "House": "Canopus"
    },
    {
     "Grade": "G10",
     "Name": "PRANESH K.R.",
     "House": "Canopus"
    },
    {
     "Grade": "G10",
     "Name": "YASHITA. S",
     "House": "Canopus"
    },
    {
     "Grade": "G10",
     "Name": "BARATH V.K.",
     "House": "Sirius"
    },
    {
     "Grade": "G10",
     "Name": "HANSINI K.",
     "House": "Sirius"
    },
    {
     "Grade": "G10",
     "Name": "THEJASHREE",
     "House": "Sirius"
    },
    {
     "Grade": "G10",
     "Name": "ADHARSH RATHINAM",
     "House": "Vega"
    },
    {
     "Grade": "G10",
     "Name": "GOKUL. R",
     "House": "Vega"
    },
    {
     "Grade": "G10",
     "Name": "HARSHAN KRISHNA. K.S",
     "House": "Vega"
    },
    {
     "Grade": "G10",
     "Name": "SANJANA S.",
     "House": "Vega"
    },
    {
     "Grade": "G10",
     "Name": "AMAANI ABU SUFIYAN",
     "House": "Capella"
    },
    {
     "Grade": "G10",
     "Name": "RAGHAV R.",
     "House": "Capella"
    },
    {
     "Grade": "G10",
     "Name": "THARUNA E.",
     "House": "Capella"
    },
    {
     "Grade": "G11",
     "Name": "SAKTHI DEVI S.K.",
     "House": "Canopus"
    },
    {
     "Grade": "G11",
     "Name": "VINAY SRI RAM R.P.",
     "House": "Canopus"
    },
    {
     "Grade": "G11",
     "Name": "SAGANA N.",
     "House": "Vega"
    },
    {
     "Grade": "G11",
     "Name": "SHIFA FATHIMA K.S.",
     "House": "Vega"
    }
   ]
  const [mithulCount, setMithulCount] = useState(0);
  const [akifCount, setAkifCount] = useState(0);
  const [prathikshaCount, setPrathikshaCount] = useState(0);
  const [sakthideviCount, setSakthideviCount] = useState(0);
  const [siveshnathCount, setSiveshnathCount] = useState(0);
  const [dharaneeshCount, setDharaneeshCount] = useState(0);
  const [lydiaCount, setLydiaCount] = useState(0);
  const [shrisubanithiCount, setShrisubanithiCount] = useState(0);
  const [thanunithaCount, setThanunithaCount] = useState(0);
  const [harshankrishnaCount, setHarshankrishnaCount] = useState(0);
  const [raagavCount, setRaagavCount] = useState(0);
  const [amaaniCount, setAmaaniCount] = useState(0);
  const [tharunaCount, setTharunaCount] = useState(0);
  const [devadharshanCount, setDevadharshanCount] = useState(0);
  const [tharanidharanCount, setTharanidharanCount] = useState(0);
  const [shifaCount, setShifaCount] = useState(0);
  const [rithuCount, setRithuCount] = useState(0);
  const [birundhaCount, setBirundhaCount] = useState(0);
  const [dhanvarshiniCount, setDhanvarshiniCount] = useState(0);
  const [nithishCount, setNithishCount] = useState(0);
  const [shruthiCount, setShruthiCount] = useState(0);
  const [akshadaCount, setAkshadaCount] = useState(0);
  const [shreejithCount, setShreejithCount] = useState(0);
  const [ pravantikaCount, setPravantikaCount] = useState(0);
  const [ varnaCount, setVarnaCount] = useState(0);
  const [ pranavCount, setPranavCount] = useState(0);
  const [ hanshiniCount, setHanshiniCount] = useState(0);
  const [ vidyuthaCount, setVidyuthaCount] = useState(0);
  const [ keerthiCount, setKeerthiCount] = useState(0);
  const [ diyaCount, setDiyaCount] = useState(0);
  const [ vigasiniCount, setVigasiniCount] = useState(0);
  const [ sujithCount, setSujithCount] = useState(0);
  const [ riduCount, setRiduCount] = useState(0);
  const [ anuvarshiniCount, setAnuvarshiniCount] = useState(0);
  const [ vishalCount, setVishalCount] = useState(0);
  const [ suryaCount, setSuryaCount] = useState(0);
  const [ sriharenCount, setSriharenCount] = useState(0);
  const [ ritishCount, setRitishCount] = useState(0);
  const [ ritishkumarCount, setRitishkumarCount] = useState(0);
  const [ yatheshCount, setYatheshCount] = useState(0);
  const [ krishmaCount, setKrishmaCount] = useState(0);
  const [ shrikaCount, setShrikaCount] = useState(0);
  const [ sanchitCount, setSanchitCount] = useState(0);
  const [ durgeshCount, setDurgeshCount] = useState(0);
  const [ stuthiCount, setStuthiCount] = useState(0);
  const [ sathvikaCount, setSathvikaCount] = useState(0);
  const [ shrichitambariCount, setShrichitambariCount] = useState(0);
  const [ chiranjeevCount, setChiranjeevCount] = useState(0);
  const [ harshithCount, setHarshithCount] = useState(0);
  const [ darshanCount, setDarshanCount] = useState(0);
  const [ viyashiniCount, setViyashiniCount] = useState(0);
  const [ gowthamCount, setGowthamCount] = useState(0);
  const [ mowlishCount, setMowlishCount] = useState(0);
  const [ vivekaCount, setVivekaCount] = useState(0);
  const [ advaydthCount, setAdvaydthCount] = useState(0);
  const [ asmithaCount, setAsmithaCount] = useState(0);
  const [ sarveshCount, setSarveshCount] = useState(0);
  const [ gowthamkCount, setGowthamkCount] = useState(0);
  const [ jayakashCount, setJayakashCount] = useState(0);
  const [ tinishaCount, setTinishaCount] = useState(0);
  const [ rakshithaCount, setRakshithaCount] = useState(0);
  const [ harshansuryaCount, setHarshansuryaCount] = useState(0);
  const [pavinCount, setPavinCount] = useState(0);
  const [visruthCount, setVisruthCount] = useState(0);


  let text ;
  text = selected.split(',')
  let house = text[2]

  
function voteCount(event){
  event.preventDefault();

  let hb1 = document.getElementById('hb1')
  let hb2 = document.getElementById('hb2')
  let hg1 = document.getElementById('hg1')
  let hg2 = document.getElementById('hg2')
  let jhb1 = document.getElementById('jhb1')
  let jhb2 = document.getElementById('jhb2')
  let jhg1 = document.getElementById('jhg1')
  let jhg2 =document.getElementById('jhg2')
  let jhg3 =document.getElementById('jhg3')
  let dhb1 = document.getElementById('dhb1')
  let dhb2 =document.getElementById('dhb2')
  let dhg1=document.getElementById('dhg1')
  let dhg2=document.getElementById('dhg2')
  let scb1=document.getElementById('scb1')
  let scb2=document.getElementById('scb2')
  let scg1=document.getElementById('scg1')
  let scg2=document.getElementById('scg2')
  let scg3=document.getElementById('scg3')
  let pf1=document.getElementById('pf1')
  let pf2=document.getElementById('pf2')
  let pc1=document.getElementById('pc1')
  let pc2=document.getElementById('pc2')
  let pd1=document.getElementById('pd1')
  let pd2=document.getElementById('pd2')
  let pl1=document.getElementById('pl1')
  let pl2=document.getElementById('pl2')
  let dpf1=document.getElementById('dpf1')
  let dpf2=document.getElementById('dpf2')
  let dpc1=document.getElementById('dpc1')
  let dpc2=document.getElementById('dpc2')
  let dpd1=document.getElementById('dpd1')
  let dpd2=document.getElementById('dpd2')
  let dpl1=document.getElementById('dpl1')
  let dpl2=document.getElementById('dpl2')
  let pt1=document.getElementById('pt1')
  let pt2=document.getElementById('pt2')
  let pt3=document.getElementById('pt3')
  let pt4=document.getElementById('pt4')
  let pt5=document.getElementById('pt5')
  let pt6=document.getElementById('pt6')
  let pt7=document.getElementById('pt7')
  let pt8=document.getElementById('pt8')
  let pt9=document.getElementById('pt9')
  let pt10=document.getElementById('pt10')
  let pt11=document.getElementById('pt11')
  let cnhc1=document.getElementById('cnhc1')
  let cnhc2=document.getElementById('cnhc2')
  let cndhc1=document.getElementById('cndhc1')
  let cndhc2=document.getElementById('cndhc2')
  let cndhc3=document.getElementById('cndhc3')
  let vhc1=document.getElementById('vhc1')
  let vhc2=document.getElementById('vhc2')
  let vdhc1=document.getElementById('vdhc1')
  let vdhc2=document.getElementById('vdhc2')
  let vdhc3=document.getElementById('vdhc3')
  let shc1=document.getElementById('shc1')
  let shc2=document.getElementById('shc2')
  let shc3=document.getElementById('shc3')
  let sdhc1=document.getElementById('sdhc1')
  let sdhc2=document.getElementById('sdhc2')
  let cphc1=document.getElementById('cphc1')
  let cphc2=document.getElementById('cphc2')
  let cpdhc1=document.getElementById('cpdhc1')
  let cpdhc2=document.getElementById('cpdhc2')

  

  if(hb1.checked){ 
      var ini = localStorage.getItem('mithul');
      localStorage.setItem('mithul',ini+1);      
      console.log(localStorage.getItem('mithul').length)
  }
  if(hb2.checked){
    var ini = localStorage.getItem('akif');
    localStorage.setItem('akif', ini+1); 
  }
  if(hg1.checked){
    var ini = localStorage.getItem('prathiksha');
    localStorage.setItem('prathiksha', ini+1);
  }
  if(hg2.checked){
    var ini = localStorage.getItem('sakthidevi');
    localStorage.setItem('sakthidevi',ini+1);
  }
  if(jhb1.checked){
    var ini = localStorage.getItem('siveshnath');
    localStorage.setItem('siveshnath',ini+1)
  }
  if(jhb2.checked){
    var ini = localStorage.getItem('dharaneesh');
    localStorage.setItem('dharaneesh',ini+1)
  }
  if(jhg1.checked){
    var ini = localStorage.getItem('lydia');
    localStorage.setItem('lydia',ini+1);
  }
  if(jhg2.checked){
    var ini = localStorage.getItem('shrisubanithi');
    localStorage.setItem('shrisubanithi',ini+1);
  }
  if(jhg3.checked){
    var ini = localStorage.getItem('thanunitha');
    localStorage.setItem('thanunitha',ini+1);
  }
  if(dhb1.checked){
    var ini = localStorage.getItem('harshankrishna');
    localStorage.setItem('harshankrishna',ini+1);
  }
  if(dhb2.checked){
    var ini = localStorage.getItem('raagav');
    localStorage.setItem('raagav',ini+1);
  }
  if(dhg1.checked){
    var ini = localStorage.getItem('amaani');
    localStorage.setItem('amaani',ini+1);
  }
  if(dhg2.checked){
    var ini = localStorage.getItem('tharuna');
    localStorage.setItem('tharuna',ini+1);
  }
  if(scb1.checked){
    var ini = localStorage.getItem('devadharshan');
    localStorage.setItem('devadharshan',ini+1);
  }
  if(scb2.checked){
    var ini = localStorage.getItem('tharanidharan');
    localStorage.setItem('tharanidharan',ini+1);
  }
  if(scg1.checked){
    var ini = localStorage.getItem('shifa');
    localStorage.setItem('shifa',ini+1);
  }
  if(scg2.checked){
    var ini = localStorage.getItem('rithu');
    localStorage.setItem('rithu',ini+1);
  }
  if(scg3.checked){
    var ini = localStorage.getItem('birundha');
    localStorage.setItem('birundha',ini+1);
  }
  if(pf1.checked){
    var ini = localStorage.getItem('ritish');
    localStorage.setItem('ritish',ini+1);
  }
  if(pf2.checked){
    var ini = localStorage.getItem('ritishkumar');
    localStorage.setItem('ritishkumar',ini+1);
  }
  if(pc1.checked){
    var ini = localStorage.getItem('yathesh');
    localStorage.setItem('yathesh',ini+1);
  }
  if(pc2.checked){
    var ini = localStorage.getItem('krishma');
    localStorage.setItem('krishma',ini+1);
  }
  if(pd1.checked){
    var ini = localStorage.getItem('shrika');
    localStorage.setItem('shrika',ini+1);
  }
  if(pd2.checked){
    var ini = localStorage.getItem('sanchit');
    localStorage.setItem('sanchit',ini+1);
  }
  if(pl1.checked){
    var ini = localStorage.getItem('durgesh');
    localStorage.setItem('durgesh',ini+1);
  }
  if(pl2.checked){
    var ini = localStorage.getItem('stuthi');
    localStorage.setItem('stuthi',ini+1);
  }
  if(dpf1.checked){
    var ini = localStorage.getItem('sathvika');
    localStorage.setItem('sathvika',ini+1);
  }
  if(dpf2.checked){
    var ini = localStorage.getItem('shrichitambari');
    localStorage.setItem('shrichitambari',ini+1);
  }
  if(dpc1.checked){
    var ini = localStorage.getItem('chiranjeev');
    localStorage.setItem('chiranjeev',ini+1);
  }
  if(dpc2.checked){
    var ini = localStorage.getItem('harshith');
    localStorage.setItem('harshith',ini+1);
  }
  if(dpd1.checked){
    var ini = localStorage.getItem('darshan');
    localStorage.setItem('darshan',ini+1);
  }
  if(dpd2.checked){
    var ini = localStorage.getItem('viyashini');
    localStorage.setItem('viyashini',ini+1);
  }
  if(dpl1.checked){
    var ini = localStorage.getItem('pavin');
    localStorage.setItem('pavin',ini+1);
  }
  if(dpl2.checked){
    var ini = localStorage.getItem('visruth');
    localStorage.setItem('visruth',ini+1);
  }
  if(pt1.checked){
    var ini = localStorage.getItem('gowtham');
    localStorage.setItem('gowtham',ini+1);
  }
  if(pt2.checked){
    var ini = localStorage.getItem('mowlish');
    localStorage.setItem('mowlish',ini+1);
  }
  if(pt3.checked){
    var ini = localStorage.getItem('viveka');
    localStorage.setItem('viveka',ini+1);
  }
  if(pt4.checked){
    var ini = localStorage.getItem('advaydth');
    localStorage.setItem('advaydth',ini+1);
  }
  if(pt5.checked){
    var ini = localStorage.getItem('asmitha');
    localStorage.setItem('asmitha',ini+1);
  }
  if(pt6.checked){
    var ini = localStorage.getItem('sarvesh');
    localStorage.setItem('sarvesh',ini+1);
  }
  if(pt7.checked){
    var ini = localStorage.getItem('gowthamk');
    localStorage.setItem('gowthamk',ini+1);
  }
  if(pt8.checked){
    var ini = localStorage.getItem('jayakash');
    localStorage.setItem('jayakash',ini+1);
  }
  if(pt9.checked){
    var ini = localStorage.getItem('tinisha');
    localStorage.setItem('tinisha',ini+1);
  }
  if(pt10.checked){
    var ini = localStorage.getItem('rakshitha');
    localStorage.setItem('rakshitha',ini+1);
  }
  if(pt11.checked){
    var ini = localStorage.getItem('harshansurya');
    localStorage.setItem('harshansurya',ini+1);
  }
  if(cnhc1.checked){
    var ini = localStorage.getItem('shruthi');
    localStorage.setItem('shruthi',ini+1);
  }
  if(cnhc2.checked){
    var ini = localStorage.getItem('akshada');
    localStorage.setItem('akshada',ini+1);
  }
  if(cndhc1.checked){
    var ini = localStorage.getItem('diya');
    localStorage.setItem('diya',ini+1);
  }
  if(cndhc2.checked){
    var ini = localStorage.getItem('vigasini');
    localStorage.setItem('vigasini',ini+1);
  }
  if(cndhc3.checked){
    var ini = localStorage.getItem('sujith');
    localStorage.setItem('sujith',ini+1);
  }
  if(vhc1.checked){
    var ini = localStorage.getItem('shreejith');
    localStorage.setItem('shreejith',ini+1);
  }
  if(vhc2.checked){
    var ini = localStorage.getItem('pravantika');
    localStorage.setItem('pravantika',ini+1);
  }
  if(vdhc1.checked){
    var ini = localStorage.getItem('ridu');
    localStorage.setItem('ridu',ini+1);
  }if(vdhc2.checked){
    var ini = localStorage.getItem('anuvarshini');
    localStorage.setItem('anuvarshini',ini+1);
  }if(vdhc3.checked){
    var ini = localStorage.getItem('vishal');
    localStorage.setItem('vishal',ini+1);
  }
  if(shc1.checked){
    var ini = localStorage.getItem('varna');
    localStorage.setItem('harshansurya',ini+1);
  }
  if(shc2.checked){
    var ini = localStorage.getItem('pranav');
    localStorage.setItem('pranav',ini+1);
  }
  if(shc3.checked){
    var ini = localStorage.getItem('hanshini');
    localStorage.setItem('hanshini',ini+1);
  }
  if(sdhc1.checked){
    var ini = localStorage.getItem('surya');
    localStorage.setItem('surya',ini+1);
  }
  if(sdhc2.checked){
    var ini = localStorage.getItem('sriharen');
    localStorage.setItem('sriharen',ini+1);
  }
  if(cphc1.checked){
    var ini = localStorage.getItem('dhanvarshini');
    localStorage.setItem('dhanvarshini',ini+1);
  }if(cphc2.checked){
    var ini = localStorage.getItem('nithish');
    localStorage.setItem('nithish',ini+1);
  }
  if(cpdhc1.checked){
    var ini = localStorage.getItem('vidyutha');
    localStorage.setItem('vidyutha',ini+1);
  }if(cpdhc2.checked){
    var ini = localStorage.getItem('keerthi');
    localStorage.setItem('keerthi',ini+1);
  }
  var frm = document.getElementsByName('nominee-form')[0];
  frm.reset();
  return false;
}

const handleRadioChangemithul = (event) => {
  if (event.target.checked) {
    setMithulCount((mc) => mc + 1);
  }
};
const handleRadioChangeakif = (event) => {
  if (event.target.checked) {
    setAkifCount((aCount) => aCount + 1);
  }
};
const handleRadioChangeprathiksha = (event) => {
  if (event.target.checked) {
    setPrathikshaCount((prCount) => prCount + 1);
  }
};
const handleRadioChangesakthidevi = (event) => {
  if (event.target.checked) {
    setSakthideviCount((sakthiCount) => sakthiCount + 1);
  }
};
const handleRadioChangesiveshnath = (event) => {
  if (event.target.checked) {
    setSiveshnathCount((siveshnathCount) => siveshnathCount + 1);
  }
};
const handleRadioChangedharneesh = (event) => {
  if (event.target.checked) {
    setDharaneeshCount((dharaneeshCount) => dharaneeshCount + 1);
  }
};
const handleRadioChangelydia = (event) => {
  if (event.target.checked) {
    setLydiaCount((lydiaCount) => lydiaCount + 1);
  }
};
const handleRadioChangeshrisubanithi = (event) => {
  if (event.target.checked) {
    setShrisubanithiCount((shrisubanithiCount) => shrisubanithiCount + 1);
  }
};
const handleRadioChangethanunitha = (event) => {
  if (event.target.checked) {
    setThanunithaCount((thanunithaCount) => thanunithaCount + 1);
  }
};
const handleRadioChangeharshankrishna = (event) => {
  if (event.target.checked) {
    setHarshankrishnaCount((harshankrishnaCount) => harshankrishnaCount + 1);
  }
};
const handleRadioChangeraagav = (event) => {
  if (event.target.checked) {
    setRaagavCount((raagavCount) => raagavCount + 1);
  }
};
const handleRadioChangeamaani = (event) => {
  if (event.target.checked) {
    setAmaaniCount((amaaniCount) => amaaniCount + 1);
  }
};
const handleRadioChangetharuna = (event) => {
  if (event.target.checked) {
    setTharunaCount((tharunaCount) => tharunaCount + 1);
  }
};
const handleRadioChangedevadharshan = (event) => {
  if (event.target.checked) {
    setDevadharshanCount((devadharshanCount) => devadharshanCount + 1);
  }
};
const handleRadioChangetharanidharan = (event) => {
  if (event.target.checked) {
    setTharanidharanCount((tharanidharanCount) => tharanidharanCount + 1);
  }
};
const handleRadioChangeshifa = (event) => {
  if (event.target.checked) {
    setShifaCount((shifaCount) => shifaCount + 1);
  }
};
const handleRadioChangerithu = (event) => {
  if (event.target.checked) {
    setRithuCount((rithuCount) => rithuCount + 1);
  }
};
const handleRadioChangebirundha = (event) => {
  if (event.target.checked) {
    setBirundhaCount((birundhaCount) => birundhaCount + 1);
  }
};
const handleRadioChangestuthi = (event) => {
  if (event.target.checked) {
    setStuthiCount((stuthiCount) => stuthiCount + 1);
  }
};
const handleRadioChangedhanvarshini = (event) => {
  if (event.target.checked) {
    setDhanvarshiniCount((dhanvarshiniCount) => dhanvarshiniCount + 1);
  }
};const handleRadioChangenithish = (event) => {
  if (event.target.checked) {
    setNithishCount((nithishCount) => nithishCount + 1);
  }
};
const handleRadioChangeshruthi = (event) => {
  if (event.target.checked) {
    setShruthiCount((shruthiCount) => shruthiCount + 1);
  }
};
const handleRadioChangeakshada = (event) => {
  if (event.target.checked) {
    setAkshadaCount((akshadaCount) => akshadaCount + 1);
  }
};
const handleRadioChangeshreejith = (event) => {
  if (event.target.checked) {
    setShreejithCount((shreejithCount) => shreejithCount + 1);
  }
};
const handleRadioChangepravantika = (event) => {
  if (event.target.checked) {
    setPravantikaCount((pravantikaCount) => pravantikaCount + 1);
  }
};
const handleRadioChangevarna = (event) => {
  if (event.target.checked) {
    setVarnaCount((varnaCount) => varnaCount + 1);
  }
};
const handleRadioChangepranav = (event) => {
  if (event.target.checked) {
    setPranavCount((pranavCount) => pranavCount + 1);
  }
};
const handleRadioChangehanshini = (event) => {
  if (event.target.checked) {
    setHanshiniCount((hanshiniCount) => hanshiniCount + 1);
  }
};
const handleRadioChangevidyutha = (event) => {
  if (event.target.checked) {
    setVidyuthaCount((vidyuthaCount) => vidyuthaCount + 1);
  }
};
const handleRadioChangekeerthi = (event) => {
  if (event.target.checked) {
    setKeerthiCount((keerthiCount) => keerthiCount + 1);
  }
};
const handleRadioChangediya = (event) => {
  if (event.target.checked) {
    setDiyaCount((diyaCount) => diyaCount + 1);
  }
};
const handleRadioChangevigasini = (event) => {
  if (event.target.checked) {
    setVigasiniCount((vigasiniCount) => vigasiniCount + 1);
  }
};
const handleRadioChangesujith = (event) => {
  if (event.target.checked) {
    setSujithCount((sujithCount) => sujithCount + 1);
  }
};
const handleRadioChangeridu = (event) => {
  if (event.target.checked) {
    setRiduCount((riduCount) => riduCount + 1);
  }
};
const handleRadioChangeanuvarshini = (event) => {
  if (event.target.checked) {
    setAnuvarshiniCount((anuvarshiniCount) => anuvarshiniCount + 1);
  }
};
const handleRadioChangevishal = (event) => {
  if (event.target.checked) {
    setVishalCount((vishalCount) => vishalCount + 1);
  }
};
const handleRadioChangesurya = (event) => {
  if (event.target.checked) {
    setSuryaCount((suryaCount) => suryaCount + 1);
  }
};
const handleRadioChangesriharen = (event) => {
  if (event.target.checked) {
    setSriharenCount((sriharenCount) => sriharenCount + 1);
  }
};
const handleRadioChangeritish = (event) => {
  if (event.target.checked) {
    setRitishCount((ritishCount) => ritishCount + 1);
  }
};
const handleRadioChangeritishkumar = (event) => {
  if (event.target.checked) {
    setRitishkumarCount((ritishkumarCount) => ritishkumarCount + 1);
  }
};
const handleRadioChangeyathesh = (event) => {
  if (event.target.checked) {
    setYatheshCount((yatheshCount) => yatheshCount + 1);
  }
};
const handleRadioChangekrishma = (event) => {
  if (event.target.checked) {
    setKrishmaCount((krishmaCount) => krishmaCount + 1);
  }
};
const handleRadioChangedurgesh = (event) => {
  if (event.target.checked) {
    setDurgeshCount((durgeshCount) => durgeshCount + 1);
  }
};
const handleRadioChangeshrika = (event) => {
  if (event.target.checked) {
    setShrikaCount((shrikaCount) => shrikaCount + 1);
  }
};
const handleRadioChangesanchit = (event) => {
  if (event.target.checked) {
    setSanchitCount((sanchitCount) => sanchitCount + 1);
  }
};
const handleRadioChangesathvika = (event) => {
  if (event.target.checked) {
    setSathvikaCount((sathvikaCount) => sathvikaCount + 1);
  }
};
const handleRadioChangeshrichitambari = (event) => {
  if (event.target.checked) {
    setShrichitambariCount((shrichitambariCount) => shrichitambariCount + 1);
  }
};
const handleRadioChangechiranjeev = (event) => {
  if (event.target.checked) {
    setChiranjeevCount((chiranjeevCount) => chiranjeevCount + 1);
  }
};
const handleRadioChangeharshith = (event) => {
  if (event.target.checked) {
    setHarshithCount((harshithCount) => harshithCount + 1);
  }
};
const handleRadioChangedarshan = (event) => {
  if (event.target.checked) {
    setDarshanCount((darshanCount) => darshanCount + 1);
  }
};
const handleRadioChangeviyashini = (event) => {
  if (event.target.checked) {
    setViyashiniCount((viyashiniCount) => viyashiniCount + 1);
  }
};
const handleRadioChangepavin = (event) => {
  if (event.target.checked) {
    setPavinCount((pavinCount) => pavinCount + 1);
  }
};
const handleRadioChangevisruth = (event) => {
  if (event.target.checked) {
    setVisruthCount((visruthCount) => visruthCount + 1);
  }
};
const handleRadioChangegowtham = (event) => {
  if (event.target.checked) {
    setGowthamCount((gowthamCount) => gowthamCount + 1);
  }
};
const handleRadioChangemowlish = (event) => {
  if (event.target.checked) {
    setMowlishCount((mowlishCount) => mowlishCount + 1);
  }
};
const handleRadioChangeviveka = (event) => {
  if (event.target.checked) {
    setVivekaCount((vivekaCount) => vivekaCount + 1);
  }
};
const handleRadioChangeadvaydth = (event) => {
  if (event.target.checked) {
    setAdvaydthCount((advaydthCount) => advaydthCount + 1);
  }
};
const handleRadioChangeasmitha = (event) => {
  if (event.target.checked) {
    setAsmithaCount((asmithaCount) => asmithaCount + 1);
  }
};
const handleRadioChangesarvesh = (event) => {
  if (event.target.checked) {
    setSarveshCount((sarveshCount) => sarveshCount + 1);
  }
};
const handleRadioChangegowthamk = (event) => {
  if (event.target.checked) {
    setGowthamkCount((gowthamkCount) => gowthamkCount + 1);
  }
};
const handleRadioChangejayakash = (event) => {
  if (event.target.checked) {
    setJayakashCount((jayakashCount) => jayakashCount + 1);
  }
};
const handleRadioChangetinisha = (event) => {
  if (event.target.checked) {
    setTinishaCount((tinishaCount) => tinishaCount + 1);
  }
};
const handleRadioChangerakshitha = (event) => {
  if (event.target.checked) {
    setRakshithaCount((akshithaCount) => akshithaCount + 1);
  }
};
const handleRadioChangeharshansurya = (event) => {
  if (event.target.checked) {
    setHarshansuryaCount((harshansuryaCount) => harshansuryaCount + 1);
  }
};
const handleRadioChangedharaneesh = (event) => {
  if (event.target.checked) {
    setDharaneeshCount((dharaneeshCount) => dharaneeshCount + 1);
  }
};


  return (

    <div className='main-candidate'>
      <div className='small'>
        <Sidebar />
      </div>
      <div className='large'>
        <div className='voting-head'>
          <div className='head'>
            <h1>
              Voting
            </h1>
          </div>
        </div>
        <form  name='nominee-form' onSubmit={voteCount} >
        <div className='select-class'>
          <select id='grade' onChange={(e => setSelected(e.target.value))}>
            <option selected disabled="true">--Select Student--</option>
            {
              stud.map((stud, i) => <option>{stud.Grade},{stud.Name},{stud.House}</option>)
            }
          </select>
        </div>
        <div className='students'>

          <h2>
            {
              selected
            }
          </h2>

        </div>
        {/* <div>
          {house}
        </div> */}

        
          <div id='vote'><h3>Head Boy</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>

              <img src='./mithul.jpg' alt='' id='img' />
              <br />
              <input type='radio' name="headboy" id='hb1' onChange={handleRadioChangemithul}/>
              <div className='title'>
                <span>MITHUL PRANAV</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./akif.jpg' alt='' id='img' />
              <br />
              <input type='radio' name="headboy" id='hb2' onChange={handleRadioChangeakif}/>
              <div className='title'>
                <span>AKIF</span>
              </div>
            </div>

          </div>


          <div id='vote'><h3>Head Girl</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./prathiksha.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='headgirl' id='hg1' onChange={handleRadioChangeprathiksha}/>
              <div className='title'>
                <span>PRATHIKSHA</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./sakthi_devi.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='headgirl' id='hg2' onChange={handleRadioChangesakthidevi}/>
              <div className='title'>
                <span>SAKTHI DEVI</span>
              </div>
            </div>

          </div>

          <div id='vote'><h3>Junior Head Boy</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./siveshnath.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='jheadboy' id='jhb1' onChange={handleRadioChangesiveshnath} />
              <div className='title'>
                <span>SIVESHNATH</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./dharaneesh.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='jheadboy' id='jhb2' onChange={handleRadioChangedharaneesh}/>
              <div className='title'>
                <span>DHARANEESH</span>
              </div>
            </div>

          </div>
          <div id='vote'><h3>Junior Head Girl</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./lydia.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='jheadgirl' id='jhg1' onChange={handleRadioChangelydia}/>
              <div className='title'>
                <span>LYDIA FLORENCE</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./shrisubanithi.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='jheadgirl' id='jhg2' onChange={handleRadioChangeshrisubanithi}/>
              <div className='title'>
                <span>SHRISUBANITHI</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./thanunitha.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='jheadgirl' id='jhg3' onChange={handleRadioChangethanunitha}/>
              <div className='title'>
                <span>THANUNITHA</span>
              </div>
            </div>
          </div>
          <div id='vote'><h3>Deputy Head Boy</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./harshan.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='dheadboy' id='dhb1' onChange={handleRadioChangeharshankrishna}/>
              <div className='title'>
                <span>HARSHAN KRISHNA</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./raagav.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='dheadboy' id='dhb2' onChange={handleRadioChangeraagav}/>
              <div className='title'>
                <span>RAAGAV</span>
              </div>
            </div>
          </div>
          <div id='vote'><h3>Deputy Head Girl</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./amaani.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='dheadgirl' id='dhg1' onChange={handleRadioChangeamaani}/>
              <div className='title'>
                <span>AMAANI</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./thruna.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='dheadgirl' id='dhg2' onChange={handleRadioChangetharuna}/>
              <div className='title'>
                <span>THARUNA</span>
              </div>
            </div>
          </div>
          <div id='vote'><h3>sports Captain Boy</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./devadharshan.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='scapboy' id='scb1' onChange={handleRadioChangedevadharshan}/>
              <div className='title'>
                <span>DEVADHARSHAN</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./tharanidharan.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='scapboy' id='scb2' onChange={handleRadioChangetharanidharan}/>
              <div className='title'>
                <span>THARANIDHARAN</span>
              </div>
            </div>
          </div>
          <div id='vote'><h3>Sports Captain Girl</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./shifa.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='scapgirl' id='scg1' onChange={handleRadioChangeshifa}/>
              <div className='title'>
                <span>SHIFA FATHIMA</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./rithu.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='scapgirl' id='scg2' onChange={handleRadioChangerithu}/>
              <div className='title'>
                <span>RITHU VARSHINI</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./birundha.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='scapgirl' id='scg3' onChange={handleRadioChangebirundha}/>
              <div className='title'>
                <span>BIRUNDHA</span>
              </div>
            </div>
          </div>
          <div id='vote'><h3>Perfect Of Food</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./ritish.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='perfectfood' id='pf1' onChange={handleRadioChangeritish}/>
              <div className='title'>
                <span>RITISH</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./rithish_kumar.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='perfectfood' id='pf2' onChange={handleRadioChangeritishkumar}/>
              <div className='title'>
                <span>RITISH KUMAR</span>
              </div>
            </div>
          </div>
          <div id='vote'><h3>Perfect Of Cultural Events</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./yathesh.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='perfectevent' id='pc1' onChange={handleRadioChangeyathesh}/>
              <div className='title'>
                <span>YATHESH</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./krishma.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='perfectevent' id='pc2' onChange={handleRadioChangekrishma}/>
              <div className='title'>
                <span>KRISHMA</span>
              </div>
            </div>
          </div>
          <div id='vote'><h3>Perfect Of Discpline</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./shrika.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='perfectdis' id='pd1' onChange={handleRadioChangeshrika}/>
              <div className='title'>
                <span>SHRIKA</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./sanchit.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='perfectdis' id='pd2' onChange={handleRadioChangesanchit}/>
              <div className='title'>
                <span>SANCHIT</span>
              </div>
            </div>
          </div>
          <div id='vote'><h3>Perfect Of Library</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./durgesh.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='perfectlib' id='pl1' onChange={handleRadioChangedurgesh}/>
              <div className='title'>
                <span>DURGESH</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./stuthi.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='perfectlib' id='pl2' onChange={handleRadioChangestuthi}/>
              <div className='title'>
                <span>STUTHI</span>
              </div>
            </div>
          </div>

          <div id='vote'><h3>Deputy Perfect Of Food</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./sathvika.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='deputyPerfectFood' id='dpf1' onChange={handleRadioChangesathvika}/>
              <div className='title'>
                <span>SATHVIKA</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./shri_chitambari.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='deputyPerfectFood' id='dpf2' onChange={handleRadioChangeshrichitambari} />
              <div className='title'>
                <span>SHRI CHITAMBARI</span>
              </div>
            </div>
          </div>

          <div id='vote'><h3>Deputy Perfect Of Cultural Events</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./chiranjeev.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='deputyPerfectCulturalEvent' id='dpc1' onChange={handleRadioChangechiranjeev} />
              <div className='title'>
                <span>CHIRANJEEV</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./harshith.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='deputyPerfectCulturalEvent' id='dpc2' onChange={handleRadioChangeharshith}/>
              <div className='title'>
                <span>HARSHITH</span>
              </div>
            </div>
          </div>

          <div id='vote'><h3>Deputy Perfect Of Discpline</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./darshan.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='deputyPerfectDiscpline' id='dpd1' onChange={handleRadioChangedarshan}/>
              <div className='title'>
                <span>DARSHAN</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./viyashini.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='deputyPerfectDiscpline' id='dpd2' onChange={handleRadioChangeviyashini}/>
              <div className='title'>
                <span>VIYASHINI</span>
              </div>
            </div>
          </div>


          <div id='vote'><h3>Deputy Perfect Of Library</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./pavin.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='DeputyPerfectLibrary' id='dpl1' onChange={handleRadioChangepavin}/>
              <div className='title'>
                <span>PAVIN</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./visruth.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='DeputyPerfectLibrary' id='dpl2' onChange={handleRadioChangevisruth} />
              <div className='title'>
                <span>VISRUTH</span>
              </div>
            </div>
          </div>


          <div id='vote'><h3>PREFECTS OF TRANSPORT</h3></div>
          <div id='vote'><h3>Bus 1</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./gowtham.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus1' id='pt1' onChange={handleRadioChangegowtham}/>
              <div className='title'>
                <span>GOWTHAM</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./mowlish.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus1' id='pt2' onChange={handleRadioChangemowlish}/>
              <div className='title'>
                <span>MOWLISH</span>
              </div>
            </div>
          </div>

          <div id='vote'><h3>Bus 2</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./viveka.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus2' id='pt3' onChange={handleRadioChangeviveka}/>
              <div className='title'>
                <span>VIVEKA</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./advaydth.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus2' id='pt4' onChange={handleRadioChangeadvaydth}/>
              <div className='title'>
                <span>ADVAYDTH</span>
              </div>
            </div>
          </div>

          <div id='vote'><h3>Bus 3</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./asmitha.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus3' id='pt5' onChange={handleRadioChangeasmitha}/>
              <div className='title'>
                <span>ASMITHA</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./sarvesh.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus3' id='pt6' onChange={handleRadioChangesarvesh}/>
              <div className='title'>
                <span>SARVESH</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./gowthamk.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus3' id='pt7' onChange={handleRadioChangegowthamk}/>
              <div className='title'>
                <span>GOWTHAM K</span>
              </div>
            </div>
          </div>

          <div id='vote'><h3>Bus 4</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./jayakash.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus4' id='pt8' onChange={handleRadioChangejayakash}/>
              <div className='title'>
                <span>JAYAKASH</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./tinisha.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus4' id='pt9'onChange={handleRadioChangetinisha} />
              <div className='title'>
                <span>TINISHA</span>
              </div>
            </div>
          </div>

          <div id='vote'><h3>Bus 5</h3></div>
          <div className='rd-btn'>
            <div id='rd-button'>
              <img src='./rakshitha.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus5' id='pt10' onChange={handleRadioChangerakshitha}/>
              <div className='title'>
                <span>RAKSHITHA</span>
              </div>
            </div>
            <div id='rd-button'>
              <img src='./harshan_surya.jpg' alt='' id='img' />
              <br />
              <input type='radio' name='bus5' id='pt11' onChange={handleRadioChangeharshansurya}/>
              <div className='title'>
                <span>HARSHAN SURYA</span>
              </div>
            </div>
          </div>



          <div id='vote'><h3>House Votes</h3></div>
          <h2 >
            You can vote only for {house}
          </h2>
          <div className='canopus-vote' >
            <div className='canopus-hc'>
              <h2 id='canopus-title'>Canopus House Captain</h2>
              <div className='canopus-rdbtn'>
                <div id='canopus-rd'>
                  <img src='./shruthi.jpg' alt='' id='img' />
                  <br />
                  <input type='radio' name='canopushousecaptain' id='cnhc1' onChange={handleRadioChangeshruthi}/>
                  <div className='title'>
                    <span>SHRUTHI</span>
                  </div>
                </div>
                <div id='canopus-rd'>
                  <img src='./akshada.jpg' alt='' id='img' />
                  <br />
                  <input type='radio' name='canopushousecaptain' id='cnhc2' onChange={handleRadioChangeakshada}/>
                  <div className='title'>
                    <span>AKSHADA</span>
                  </div>
                </div>
              </div>

              <div className='canopus-dhc' >
                <h2 id='canopus-title'>Canopus Deputy House Captain</h2>
                <div className='canopus-rdbtn'>

                  <div id='canopus-rd'>
                    <img src='./diya.jpg' alt='' id='img' />
                    <br />
                    <input type='radio' name='canopusdeputyhousecaptain' id='cndhc1' onChange={handleRadioChangediya}/>
                    <div className='title'>
                      <span>DIYA</span>
                    </div>
                  </div>

                  <div id='canopus-rd'>
                    <img src='./vigasini.jpg' alt='' id='img' />
                    <br />
                    <input type='radio' name='canopusdeputyhousecaptain' id='cndhc2' onChange={handleRadioChangevigasini}/>
                    <div className='title'>
                      <span>VIGASINI</span>
                    </div>
                  </div>

                  <div id='canopus-rd'>
                    <img src='./sujith.jpg' alt='' id='img' />
                    <br />
                    <input type='radio' name='canopusdeputyhousecaptain' id='cndhc3' onChange={handleRadioChangesujith}/>
                    <div className='title'>
                      <span>SUJITH</span>
                    </div>
                  </div>
                </div>
              </div>




              <div className='vega-vote'>
                <div className='vega-hc'>
                  <h2 id='vega-title'>Vega House Captain</h2>
                  <div className='vega-rdbtn'>
                    <div id='vega-rd'>
                      <img src='./shreejith.jpg' alt='' id='img' />
                      <br />
                      <input type='radio' name='vegahousecaptain' id='vhc1' onChange={handleRadioChangeshreejith}/>
                      <div className='title'>
                        <span>SHREEJITH</span>
                      </div>
                    </div>
                    <div id='vega-rd'>
                      <img src='./pravantika.jpg' alt='' id='img' />
                      <br />
                      <input type='radio' name='vegahousecaptain' id='vhc2'onChange={handleRadioChangepravantika}/>
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
                        <input type='radio' name='vegadeputyhousecaptain' id='vdhc1' onChange={handleRadioChangeridu}/>
                        <div className='title'>
                          <span>RIDU PRANA</span>
                        </div>
                      </div>

                      <div id='vega-rd'>
                        <img src='./anu.jpg' alt='' id='img' />
                        <br />
                        <input type='radio' name='vegadeputyhousecaptain' id='vdhc2' onChange={handleRadioChangeanuvarshini}/>
                        <div className='title'>
                          <span>ANU VARSHINI</span>
                        </div>
                      </div>

                      <div id='vega-rd'>
                        <img src='./vishal.jpg' alt='' id='img' />
                        <br />
                        <input type='radio' name='vegadeputyhousecaptain' id='vdhc3' onChange={handleRadioChangevishal}/>
                        <div className='title'>
                          <span>VISHAL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>




              <div className='sirius-vote'>
                <div className='sirius-hc'>
                  <h2 id='sirius-title'>Sirius House Captain</h2>
                  <div className='sirius-rdbtn'>
                    <div id='sirius-rd'>
                      <img src='./varna.jpg' alt='' id='img' />
                      <br />
                      <input type='radio' name='siriushousecaptain' id='shc1' onChange={handleRadioChangevarna}/>
                      <div className='title'>
                        <span>VARNA</span>
                      </div>
                    </div>
                    <div id='sirius-rd'>
                      <img src='./pranav.jpg' alt='' id='img' />
                      <br />
                      <input type='radio' name='siriushousecaptain' id='shc2' onChange={handleRadioChangepranav}/>
                      <div className='title'>
                        <span>PRANAV</span>
                      </div>
                    </div>
                    <div id='sirius-rd'>
                      <img src='./hanshini.jpg' alt='' id='img' />
                      <br />
                      <input type='radio' name='siriushousecaptain' id='shc3' onChange={handleRadioChangehanshini}/>
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
                        <input type='radio' name='siriusdeputyhousecaptain' id='sdhc1' onChange={handleRadioChangesurya}/>
                        <div className='title'>
                          <span>SURYA</span>
                        </div>
                      </div>

                      <div id='sirius-rd'>
                        <img src='./sri_haren.jpg' alt='' id='img' />
                        <br />
                        <input type='radio' name='siriusdeputyhousecaptain' id='sdhc2'onChange={handleRadioChangesriharen}/>
                        <div className='title'>
                          <span>SRI HAREN</span>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

              </div>





              <div className='capella-vote'>
                <div className='capella-hc'>
                  <h2 id='capella-title'>Capella House Captain</h2>
                  <div className='capella-rdbtn'>
                    <div id='capella-rd'>
                      <img src='./dhanvarshini.jpg' alt='' id='img' />
                      <br />
                      <input type='radio' name='capellahousecaptain' id='cphc1'onChange={handleRadioChangedhanvarshini}/>
                      <div className='title'>
                        <span>DHANVARSHINI</span>
                      </div>
                    </div>
                    <div id='capella-rd'>
                      <img src='./nithish.jpg' alt='' id='img' />
                      <br />
                      <input type='radio' name='capellahousecaptain' id='cphc2'onChange={handleRadioChangenithish}/>
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
                        <input type='radio' name='capelladeputyhousecaptain' id='cpdhc1'onChange={handleRadioChangevidyutha}/>
                        <div className='title'>
                          <span>VIDYUTHA</span>
                        </div>
                      </div>

                      <div id='capella-rd'>
                        <img src='./keerthi.jpg' alt='' id='img' />
                        <br />
                        <input type='radio' name='capelladeputyhousecaptain' id='cpdhc2'onChange={handleRadioChangekeerthi}/>
                        <div className='title'>
                          <span>KEERTHI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                
              

              </div>
            </div>
          </div>
          <div className='button'>
            <button type='submit' >Submit</button>
          </div>       
          </form>
      </div>
    </div>
  )
      
}

export default Voting