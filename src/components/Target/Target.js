import React from 'react';
import PropTypes from 'prop-types';

function Target(props) {
  const { targetScore } = props;

  return (
    <div className="bg-primary text-white rounded p-2 text-center">
      <div>DOEL</div>
      &bull;&nbsp;
      {targetScore}
    </div>
  );
}

Target.propTypes = {
  targetScore: PropTypes.number.isRequired
};

export default Target;
