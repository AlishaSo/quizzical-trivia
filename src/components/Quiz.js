import { useState, useEffect } from 'react';
import getData from '../services/getQuizData';
import Questions from './Questions';
import { nanoid } from 'nanoid';

export default function Quiz() {
  const [triviaData, setTriviaData] = useState([]);

  useEffect(() => {
    async function callApi() {
      let data = await getData();
      setTriviaData(data);
    }
    callApi();
  }, []);

  const questionElements = triviaData.map(item => (
    <Questions 
      key = {nanoid()}
      question = {item.question}
      allAnswers = {item.answers}
      correctAnswer = {item.rightAnswer}
    />)
  )
  
  return (
    <div className='quiz-container'>
      {questionElements}
      <button className='btn check-answers-btn'>Check answers</button>
    </div>
  )
}