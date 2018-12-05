import React from 'react';
import PropTypes from 'prop-types';

import Question from '../Question/Question';
import AnswerOption from '../AnswerOption/AnswerOption';
import './Content.css';

function Content(props) {
  const {
    question,
    questionId,
    questionTitle,
    answer,
    answerOptions,
    onAnswerSelected
  } = props;

  return (
    <div className="pt-3 px-3" key={questionId}>
      <Question
        questionId={questionId}
        content={question}
        title={questionTitle}
        image="//placekitten.com/2000/1100"
      />
      <div className="text-white text-center p-3">Kies een optie</div>
      <div className="answer-options">
        {answerOptions.map(key => (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={answer}
            questionId={questionId}
            onAnswerSelected={onAnswerSelected}
          />
        ))}
      </div>
    </div>
  );
}

Content.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.object.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Content;
