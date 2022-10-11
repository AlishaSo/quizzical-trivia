import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Questions(props) {
  let { allAnswers } = props;

  function clickedState(parentId, e) {
    const container = document.querySelector(`#${parentId} > .answers-container`);
    for(const option of container.children) {
      if(option.classList.contains('checked'))
        option.classList.remove('checked');
    }
    e.currentTarget.classList.toggle("checked");
  }

  const chooseAnswer = (e, questionIndex) => {
    clickedState(props.id, e);
    props.handleClick(questionIndex, e.target.name);
  }

  allAnswers = allAnswers.sort(() => Math.random() - 0.5); //make them be 'random'
  let answerOptions = allAnswers.map((answer, index) => {
    const correctAnswerClass =
      answer === props.correctAnswer ? " correct-answer" : "";
    const nan = nanoid();
    return (
      <button
        key={nan}
        id={nan}
        name={decode(answer)}
        className={`option-btn${correctAnswerClass} btn`}
        onClick={e => chooseAnswer(e, index)}
      >
        {decode(answer)}
        {/* will convert html entities to its corresponding special character */}
      </button>
    );
  });

  return (
    <div className="quest-el-div" id={props.id}>
      <h2 className="question">{decode(props.question)}</h2>
      <div className="answers-container">{answerOptions}</div>
    </div>
  );
}
