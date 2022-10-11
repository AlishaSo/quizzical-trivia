import { useState, useEffect } from "react";
import getData from "../services/getQuizData";
import Questions from "./Questions";
import { nanoid } from "nanoid";
import checkAnswers from "../services/checkAnswers";
import { decode } from "html-entities";

export default function Quiz() {
  const [triviaData, setTriviaData] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(new Map());
  const [userChoices, setUserChoices] = useState({
    q0: '',
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });

  useEffect(() => {
    async function callApi() {
      let data = await getData();
      setTriviaData(data);
    }
    callApi();
  }, []);

  useEffect(() => {
    createCorrectAnswersMap();
  }, [triviaData]);

  const selectAnswer = (questionIndex, answer) => {
    console.log('selectAnswer called');
    setUserChoices(prevChoices => {
      let newAnswer = {};
      newAnswer[`q${questionIndex}`] = answer;
      return Object.assign(prevChoices, newAnswer);
    })
  }

  const questionElements = triviaData.map(item => {
    const nan = nanoid();
    return (
      <Questions
        key={nan}
        id={nan}
        question={item.question}
        allAnswers={item.answers}
        correctAnswer={item.rightAnswer}
        submitStatus={submitStatus}
        handleClick={selectAnswer}
      />
    );
  });

  const createCorrectAnswersMap = () => {
    triviaData.forEach((item, index) => {
      setCorrectAnswers(
        new Map(correctAnswers.set(decode(item.rightAnswer), `q${index}`))
      );
    });
  };

  const submitQuiz = () => {
    setSubmitStatus(prevStatus => !prevStatus);
    checkAnswers(correctAnswers);
  }

  console.log(userChoices)

  return (
    <div className="quiz-container">
      {questionElements}
      <button
        className="btn check-answers-btn"
        onClick={submitQuiz}
      >
        Check answers
      </button>
    </div>
  );
}
