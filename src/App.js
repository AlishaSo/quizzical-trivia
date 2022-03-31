import React, {useState, useEffect} from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';

export default function App() {
  const [gameOn, setGameOn] = useState(false);

  useEffect(() => {
    try {
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium')
        .then(response => response.json())
        .then(data => {
          if(data.response_code !== 0) {
            throw new Error('Could not retrieve any questions at this time');
          } else {
            console.log(data.results);
          }
        });
    } catch(error) {
      window.alert(error);
    }
  }, [gameOn]);

  function toggleGame() {
    setGameOn(true);
  }

  return (
    <>
      { gameOn ? <Quiz /> : <Start toggleGame={toggleGame} /> }
    </>
  )
}