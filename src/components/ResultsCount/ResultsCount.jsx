import React from 'react';
import PropTypes from 'prop-types';

const ResultsCount = ({ count = 0 }) => <p>{`${count} movies found`}</p>;

ResultsCount.propTypes = {
  count: PropTypes.number
};

export default ResultsCount;
