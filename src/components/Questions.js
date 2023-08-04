import React, { useState } from 'react';



export default function Question(props) {
     
    let question=[
        {que: "React is a popular",
         options: {
            firstOption: "programming language",
            secondOption: "front-end JavaScript library",
            thirdOption: "JavaScript framework",
            fourthOption: "file extension   "},
        answer_id: "two"
        },
        {que: "Which of the following are the advantages of React.js?",
        options:{
           firstOption: "React.js can increase the application's performance with Virtual DOM.",
           secondOption: "React.js is easy to integrate with other frameworks such as Angular since it is only a view library.",
           thirdOption: "React.js can render both on client and server side.",
           fourthOption: "All of the above"},
        answer_id: "four"
       },
       {que: "What is the default port where webpack-server runs?",
       options:{
          firstOption: "3000",
          secondOption: "8800",
          thirdOption: "5000",
          fourthOption: "2323"},
          answer_id: "one"
      },
      {que: "How many numbers of elements a valid react component can return?",
       options:{
          firstOption: "3",
          secondOption: "1",
          thirdOption: "4",
          fourthOption: "0"},
          answer_id: "two"
      },
      {que: "How many ways of defining your variables in ES6?",
       options:{
          firstOption: "3",
          secondOption: "4",
          thirdOption: "5",
          fourthOption: "7"},
          answer_id: "one"
      }
]

const[score, setScore]= useState(0);
const [nextQuestion, setNextQuestion]= useState(0); 
const[displayMarks, setDisplayMarks]= useState(false);

let idkeep=null;

//function to change question
const questionChanger=()=>{
    document.querySelectorAll('.options').forEach(item=>item.removeAttribute('style'));
    setNextQuestion(nextQuestion+1);
     if(question.length-1 == nextQuestion){
   setNextQuestion(0);
   setDisplayMarks(true)
   }
}

// function to check answer
function answerCheck(){
if(idkeep==null){
    return
}
if(idkeep===question[nextQuestion].answer_id){
   document.getElementById(idkeep).style.background='lightgreen';
   setScore(score+1)
}
else{
   document.getElementById(idkeep).style.background='red'; 
   
}

}

// function to style focused option
function Focus(k){
    document.querySelectorAll('.options').forEach(item=>item.removeAttribute('style'));
    document.getElementById(k).style.cssText=`background-color: #eca1a6; color: black; border: 1px solid red`
}

function Refresh(){
    setDisplayMarks(false)
    setScore(0)
}

  return (
    <>
    <div className="wrapper" >
        <div className="question-container">
            <div className='question-wrapper' >
                <div className="question">Que {nextQuestion+1}) {props.value} <br /> {question[nextQuestion].que}</div>
                <div className="score-display"><span>Score:</span> {score}</div>
                </div> 

            <div className="options-container" >
                <div className='options' id='one' onClick={(e)=>{idkeep=e.target.id; Focus(idkeep)}}>{question[nextQuestion].options.firstOption}</div> 
                <div className='options' id='two' onClick={(e)=>{idkeep=e.target.id; Focus(idkeep)}}>{question[nextQuestion].options.secondOption}</div> 
                <div className='options' id='three' onClick={(e)=>{idkeep=e.target.id; Focus(idkeep)}}>{question[nextQuestion].options.thirdOption}</div> 
                <div className='options' id='four' onClick={(e)=>{idkeep=e.target.id; Focus(idkeep)}}>{question[nextQuestion].options.fourthOption}</div> 
            </div>

            <div className="buttons-container">
            <button className='submit-btn' onClick={answerCheck}>Submit</button>
            <button className='next-btn' onClick={questionChanger}>Next</button>
            </div>
        </div>
        
        <div className="marks" style={{color:'black', zIndex:displayMarks==true?2:-1}}>
            <span>Your final Score is: {score}</span>
            <button className='refresh' onClick={()=>{Refresh()}}>Refresh Quiz</button>
        </div>

       
    
    </div>

    

  
    </>
  )
}