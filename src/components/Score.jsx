import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Score = () => {
 
   const{score} =  useParams();
   const navigate =  useNavigate();
   let per = score/10 *100



   function handleNav(){
    navigate(`/QuizApp-React`)
  }


  return (
    <div className='container'>
     <p> Score Board </p>
   
   <div className="total">
    <div style={{fontSize:'4em'}}>{score}</div>
    <div style={{fontSize:'1.5em'}}>/10</div>
   </div>

       <h2 className='message'>{(score == 10)?"Excellent":(score >=5 && score <= 9 ?"Good" :'Need To Improve')}</h2>
      <div className="score">
        <div className="level"  style={{width:`${per}%`}}>
            <div className='per'>{per}%</div>
        </div>
      </div>

      <button className='Hbtn'  onClick={handleNav}>Home</button>
    </div>
  )
}

export default Score
