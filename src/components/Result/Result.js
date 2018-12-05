import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="p-4 text-center text-white">
      <h3>
        Jouw antwoord: <strong>{props.quizResult}</strong>
      </h3>
      <p className="p-2">{props.quizResultContent}</p>
      <button
        className="btn btn-light"
        onClick={() => window.location.reload()}
      >
        Go Back
      </button>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  quizResultContent: PropTypes.string.isRequired
};

export default Result;
