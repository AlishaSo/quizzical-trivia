import React, {useState, useEffect} from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';

export default function App() {
  const [gameOn, setGameOn] = useState(false);
  
  const [triviaData, setTriviaData] = useState([]);

  useEffect(() => {
    try {
      fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium')
        .then(response => response.json())
        .then(data => {
          if(data.response_code !== 0) {
            throw new Error('Could not retrieve any questions at this time');
          } else {
            // console.log(data.results);
            const triviaArr = data.results.map(item => ({
              question: item.question,
              answers: item.incorrect_answers.concat(item.correct_answer),
              rightAnswer: item.correct_answer
          }))
            setTriviaData(triviaArr);
          }
        });
    } catch(error) {
      window.alert(error);
    }
  }, []);

  function toggleGame() {
    setGameOn(true);
  }

  return (
    <>
      { gameOn ? <Quiz trivia={triviaData} /> : <Start toggleGame={toggleGame} /> }
    </>
  )
}