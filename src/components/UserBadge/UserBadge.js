import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';

function UserBadge(props) {
  const {
    imageSrc,
    userName,
    scorePoints,
  } = props;

  return (
    <Media className="bg-warning rounded text-white d-flex align-items-center">
      <Media left>
        <Media
          object
          src={imageSrc}
          alt={userName}
          width="68"
          className="rounded"
        />
      </Media>
      <Media body className="p-2">
        {userName}
        <div className="points-count">
          <span className="h5">&#9733;&nbsp;</span>
          {scorePoints ? scorePoints : 0} punten
        </div>
      </Media>
    </Media>

  );
}

UserBadge.propTypes = {
  imageSrc: PropTypes.string,
  userName: PropTypes.string,
  scorePoints: PropTypes.number,
};

export default UserBadge;
