import React, {useState, useEffect} from 'react';
import Questions from './Questions';

export default function Quiz(props) {
  const [data, setData] = useState(props.trivia);

  const questionElements = data.map((item, index) => (
     <Questions 
        key={index}
        question={item.question}
        allAnswers={item.answers}
        correctAnswer={item.rightAnswer}
      />)
  )
  
  return (
    <>
      {questionElements}
    </>
  )
}