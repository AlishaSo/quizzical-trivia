import React from 'react';

export default function Start(props) {
  return (
    <div className='wrapper'>
      <h2 className='game-title'>Quizzical</h2>
      <p className='game-description'>Can you answer all 5 questions correctly? We'll see!</p>
      <button onClick={props.toggleGame} className='start-btn'>Start Quiz</button>
    </div>
  )
}