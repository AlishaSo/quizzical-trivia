import { useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';

export default function App() {
  const [gameOn, setGameOn] = useState(false);

  function toggleGame() {
    setGameOn(true);
  }

  return (
    <div className='App'>
      { gameOn ? <Quiz /> : <Start toggleGame={toggleGame} /> }
    </div>
  )
}