import React from 'react';

export default function Questions(props) {
  return (
    <div className='quest-el-div'>
      <h2>{props.question}</h2>
      <h3>{props.correctAnswer}</h3>
    </div>
  )
}