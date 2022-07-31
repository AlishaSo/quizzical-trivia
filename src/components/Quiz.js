import { useState, useEffect } from 'react';
import getQuizData from '../services/getQuizData';
import Questions from './Questions';
import { nanoid } from 'nanoid';

export default function Quiz() {
  const [triviaData, setTriviaData] = useState([]);

  useEffect(() => {
    async function callApi() {
      let data = await getQuizData();
      const triviaObj = data.map(item => ({
          question: item.question,
          answers: item.incorrect_answers.concat(item.correct_answer),
          rightAnswer: item.correct_answer
        }));
      setTriviaData(triviaObj);
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