import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Java from '../data/Java.jsx'
import Html from '../data/Html.jsx';
import Reactjs from '../data/React.jsx';
import '../css/Quiz.css'

const Quiz = () => {
    const[data,setData]=useState(Java);
    const[qtnIndex,setQtnIndex] = useState(0);
    const {type} = useParams();
    const[optSelect,setOpt] = useState(false);
    const[score,setScore]=useState(0);
    const refOpt = useRef([]);
    const[submit,setSubmit]= useState(false);
    const navigate =  useNavigate();
    const[min,setMin]=useState(0);
    const[sec,setSec]=useState(60);
    const option= {
      A:0,
      B:1,
      C:2,
      D:3
    }

    useEffect(()=>{
  switch(type){
    case 'Java':
      {
        setData(Java);
        break;
      }
      case 'Html':{
        setData(Html);
        break;
      }
      case 'ReactJs':{
        setData(Reactjs);
        break;
      }
      default:{
        setData(Java);
      }
  } 


    },[])

    var  timer
    useEffect(()=>{
      timer = setInterval(() => {
        setSec(prevSec => {
          const newSec = prevSec - 1;
          if (newSec <= 0) {
            setMin(prevMin => {
              const newMin = prevMin -1;
              if(newMin <= 0){
                scoreNav()
              } 
              return newMin;
            })
            return 60;
          }
          return newSec;
        });

  

      }, 1000);
    
     

    return ()=> clearInterval(timer);

    },[])


    function scoreNav(){
      handleNav();
    }
  
    function handleClick(){
     if(optSelect){
      if(qtnIndex == data.length-2){ 
        setSubmit(true)
       }
       refOpt.current.map(val=>{
         if(val.classList.contains('correct')){
           val.classList.remove('correct')
         }
         if(val.classList.contains('wrong')){
           val.classList.remove('wrong')
         }
       })
       setOpt(false)
       setQtnIndex(index=> index+1);
     }
     else{
      alert('Answer the question')
     }
    }

    function handleAns(e,opt){
    if(!optSelect){
      if(data[qtnIndex].correctAnswer == opt){
        setScore(s=> s+1);
        setOpt(true)
        e.target.classList.add('correct');
      }
      else{
        refOpt.current[ option[data[qtnIndex].correctAnswer]].classList.add('correct');
        e.target.classList.add('wrong');
        setOpt(true)
      }
    }
      
    } 


    function handleNav(){
      navigate(`/QuizApp-React/score/${score}`)
    }

  return (
    <div className='container'>

<span className='line'></span>
        <div className="board">
          <p> {qtnIndex+1} of {data.length} Question</p>
          <p>Easy {type} Quiz</p>
          <p>Timer <span>{min}:{sec < 10 ? '0'+sec : sec}</span></p>
        </div>
      
        <div className="question">
            <p>{qtnIndex+1}.{data[qtnIndex].question}</p>
         </div>

        <div className="option">
            {data[qtnIndex].options.map((val,i) =>{
              return <li  ref={(element) => refOpt.current[i] = element} onClick={(e)=>handleAns(e,val.option)} key={val.option}>{val.option}.{val.text}</li>
            })}
          
        </div>
          
         {submit ?  <button className='nextBtn' onClick={handleNav}>Submit</button> :  <button className='nextBtn' onClick={()=>handleClick()}>Next</button> }
    </div>
  )
}

export default Quiz
