import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './AnswerOption.css';

function AnswerOption(props) {
  const { answer, answerType, onAnswerSelected, answerContent } = props;

  return (
    <Button
      color="light"
      className="answer-option"
      onClick={onAnswerSelected}
      disabled={answer ? true : false}
      name={answerType}
      value={answerContent}
    >
      {answerContent}
    </Button>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
