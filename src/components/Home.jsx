import React, { useState } from 'react'
import Select from "react-select"
import '../css/Home.css'


import { useNavigate } from 'react-router-dom';

const Home = () => {
    const options = [
        { value: "Java", label: "Java" },
        { value: "Html", label: "Html" },
        { value: "ReactJs", label: "ReactJs" },
      ]

    const[type,setType] =  useState('Java')
   const navigate =  useNavigate();

   function handleChange(e){
   setType(e.value)
// console.log(e.value);

   }
    function handleNav(){
        navigate(`/quiz/${type}`)
    }

  return (
<> 
    <h2>Welcome To Quiz App</h2>  
    <div className='container'>
     
      <button onClick={handleNav} className='btn'>Start</button>

      <label  className='select'>
      <span className='qt'>Select Question Type :</span>
      <Select  onChange={(e)=>handleChange(e)} options={options} />
      </label>
    </div>
    </>
  )
}

export default Home
