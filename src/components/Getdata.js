import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Getdata() {

    const [data,setData]=useState([]);
    const getData = () => {
        const url = 'http://localhost:8000'
        axios.get(url)
        .then(response => {
            const result = response.data;
            const {status,message,data} =result;
            if(status !== 'SUCESS'){
                alert(message,status)
            }else{
                setData(data)
                console.log(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(()=>{
        getData();
    },[])

  return (
    <div>Getdata</div>
  )
}

export default Getdata