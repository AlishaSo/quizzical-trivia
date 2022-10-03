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

  const questionElements = triviaData.map(item => {
    const nan = nanoid();
    return (
      <Questions
        key={nan}
        id={nan}
        question={item.question}
        allAnswers={item.answers}
        correctAnswer={item.rightAnswer}
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

  return (
    <div className="quiz-container">
      {questionElements}
      <button
        className="btn check-answers-btn"
        onClick={() => checkAnswers(correctAnswers)}
      >
        Check answers
      </button>
    </div>
  );
}
