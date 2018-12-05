import React from 'react';
import PropTypes from 'prop-types'

function Logo(props) {
  const { 
    logoSrc,
    logoTitle,
  } = props;

  return (
    <img
      src={logoSrc}
      alt={logoTitle}
      width="80"
    />
  );
}

Logo.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoTitle: PropTypes.string.isRequired
};

export default Logo;
