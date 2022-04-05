import React from 'react';

export default function Questions(props) {
  let allAnswers = props.allAnswers;
  allAnswers = allAnswers.sort(() => Math.random() - 0.5);
  const answerOptions = allAnswers.map((answer, index) => {
    const correctAnswerClass = answer === props.correctAnswer ? ' correct-answer' : '';
    return <button key={index} className={`option-btn${correctAnswerClass}`}>{answer}</button>
  })
  console.log(props.correctAnswer)

  return (
    <div className='quest-el-div'>
      <h2>{props.question}</h2>
      <div className='answers-container'>{answerOptions}</div>
    </div>
  )
}