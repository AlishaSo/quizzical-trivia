import React, {useState, useEffect} from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';

export default function App() {
  const [gameOn, setGameOn] = useState(false);

  function toggleGame() {
    setGameOn(true);
  }

  return (
    <>
      { gameOn ? <Quiz /> : <Start toggleGame={toggleGame} /> }
    </>
  )
}