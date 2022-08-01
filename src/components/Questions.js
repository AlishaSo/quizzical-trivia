import { nanoid } from 'nanoid';
import { decode } from 'html-entities';

export default function Questions(props) {

  function clickedState(e) {
    e.currentTarget.classList.toggle('clicked');
  }

  let { allAnswers } = props;
  allAnswers = allAnswers.sort(() => Math.random() - 0.5);  //make them be "random"
  let answerOptions = allAnswers.map(answer => {
    const correctAnswerClass = answer === props.correctAnswer ? ' correct-answer' : '';
    const nan = nanoid();
    return (
      <button 
        key = {nan} 
        id = {nan} 
        className = {`option-btn${correctAnswerClass} btn`} 
        onClick = {clickedState}
      >
        {decode(answer)}
      </button>)
  })

  return (
    <div className='quest-el-div'>
      <h2 className='question'>{decode(props.question)}</h2>
      <div className='answers-container'>{answerOptions}</div>
    </div>
  )
}